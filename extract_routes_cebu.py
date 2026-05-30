import json
import math
import heapq
from datetime import datetime, timezone
from collections import defaultdict, Counter

import requests

OVERPASS_URL = "https://overpass-api.de/api/interpreter"

# Metro Cebu + north/south island corridor for demo extraction.
BBOX = (9.95, 123.55, 10.62, 124.10)  # south, west, north, east

ALLOWED_HIGHWAY_CLASSES = {
    "primary",
    "secondary",
    "tertiary",
}

MAJOR_TERMINALS = {
    "Cebu South Bus Terminal",
    "Cebu North Bus Terminal",
    "SM City Cebu Terminal",
    "IT Park Terminal",
}

ROUTE_SPECS = [
    {
        "route_name": "Cebu North Bus Terminal -> Mandaue -> Consolacion -> Liloan",
        "vehicle_type": "bus",
        "road_class": "primary",
        "highway_names": ["Cebu North Road"],
        "stops": [
            {"name": "Cebu North Bus Terminal", "lat": 10.3358, "lon": 123.9274},
            {"name": "Mandaue", "lat": 10.3231, "lon": 123.9410},
            {"name": "Consolacion", "lat": 10.3764, "lon": 123.9571},
            {"name": "Liloan", "lat": 10.3986, "lon": 123.9992},
        ],
        "fallback_polyline": [
            [10.3358, 123.9274],
            [10.3231, 123.9410],
            [10.3512, 123.9448],
            [10.3764, 123.9571],
            [10.3986, 123.9992],
        ],
    },
    {
        "route_name": "Cebu North Bus Terminal -> Danao",
        "vehicle_type": "bus",
        "road_class": "primary",
        "highway_names": ["Cebu North Road"],
        "stops": [
            {"name": "Cebu North Bus Terminal", "lat": 10.3358, "lon": 123.9274},
            {"name": "Mandaue", "lat": 10.3231, "lon": 123.9410},
            {"name": "Consolacion", "lat": 10.3764, "lon": 123.9571},
            {"name": "Liloan", "lat": 10.3986, "lon": 123.9992},
            {"name": "Danao", "lat": 10.5333, "lon": 124.0272},
        ],
        "fallback_polyline": [
            [10.3358, 123.9274],
            [10.3231, 123.9410],
            [10.3512, 123.9448],
            [10.3764, 123.9571],
            [10.3986, 123.9992],
            [10.4554, 124.0078],
            [10.4872, 124.0164],
            [10.5333, 124.0272],
        ],
    },
    {
        "route_name": "Cebu South Bus Terminal -> Talisay -> Minglanilla -> Naga",
        "vehicle_type": "bus",
        "road_class": "primary",
        "highway_names": ["Natalio Bacalso Avenue", "Cebu South Road"],
        "stops": [
            {"name": "Cebu South Bus Terminal", "lat": 10.2968, "lon": 123.8924},
            {"name": "Talisay", "lat": 10.2447, "lon": 123.8494},
            {"name": "Minglanilla", "lat": 10.2440, "lon": 123.7960},
            {"name": "Naga", "lat": 10.2088, "lon": 123.7580},
        ],
        "fallback_polyline": [
            [10.2968, 123.8924],
            [10.2828, 123.8732],
            [10.2578, 123.8484],
            [10.2447, 123.8494],
            [10.2442, 123.8270],
            [10.2440, 123.7960],
            [10.2312, 123.7818],
            [10.2088, 123.7580],
        ],
    },
    {
        "route_name": "Cebu South Bus Terminal -> Carcar",
        "vehicle_type": "bus",
        "road_class": "primary",
        "highway_names": ["Natalio Bacalso Avenue", "Cebu South Road"],
        "stops": [
            {"name": "Cebu South Bus Terminal", "lat": 10.2968, "lon": 123.8924},
            {"name": "Talisay", "lat": 10.2447, "lon": 123.8494},
            {"name": "Minglanilla", "lat": 10.2440, "lon": 123.7960},
            {"name": "Naga", "lat": 10.2088, "lon": 123.7580},
            {"name": "Carcar", "lat": 10.1073, "lon": 123.6407},
        ],
        "fallback_polyline": [
            [10.2968, 123.8924],
            [10.2828, 123.8732],
            [10.2578, 123.8484],
            [10.2447, 123.8494],
            [10.2440, 123.7960],
            [10.2088, 123.7580],
            [10.1450, 123.6897],
            [10.1073, 123.6407],
        ],
    },
    {
        "route_name": "IT Park Terminal -> Lahug -> Fuente -> Colon -> Carbon",
        "vehicle_type": "modern_jeep",
        "road_class": "secondary",
        "highway_names": ["Salinas Drive", "Osmena Boulevard"],
        "stops": [
            {"name": "IT Park Terminal", "lat": 10.3289, "lon": 123.9068},
            {"name": "Lahug", "lat": 10.3386, "lon": 123.9000},
            {"name": "Fuente", "lat": 10.3157, "lon": 123.8854},
            {"name": "Colon", "lat": 10.2956, "lon": 123.9013},
            {"name": "Carbon", "lat": 10.2925, "lon": 123.9019},
        ],
        "fallback_polyline": [
            [10.3289, 123.9068],
            [10.3386, 123.9000],
            [10.3250, 123.8950],
            [10.3157, 123.8854],
            [10.3018, 123.8938],
            [10.2956, 123.9013],
            [10.2925, 123.9019],
        ],
    },
    {
        "route_name": "SM City Cebu Terminal -> Ayala -> Banilad -> Talamban",
        "vehicle_type": "modern_jeep",
        "road_class": "secondary",
        "highway_names": ["Cardinal Rosales Avenue", "Gov. M. Cuenco Avenue"],
        "stops": [
            {"name": "SM City Cebu Terminal", "lat": 10.3170, "lon": 123.9185},
            {"name": "Ayala", "lat": 10.3176, "lon": 123.9053},
            {"name": "Banilad", "lat": 10.3502, "lon": 123.9054},
            {"name": "Talamban", "lat": 10.3547, "lon": 123.9136},
        ],
        "fallback_polyline": [
            [10.3170, 123.9185],
            [10.3176, 123.9053],
            [10.3256, 123.9052],
            [10.3378, 123.9045],
            [10.3502, 123.9054],
            [10.3547, 123.9136],
        ],
    },
    {
        "route_name": "SM City Cebu Terminal -> Parkmall -> Mandaue proper -> Cebu City",
        "vehicle_type": "modern_jeep",
        "road_class": "secondary",
        "highway_names": ["Cebu North Road", "A.C. Cortes Avenue", "M.C. Briones Street"],
        "stops": [
            {"name": "SM City Cebu Terminal", "lat": 10.3170, "lon": 123.9185},
            {"name": "Parkmall", "lat": 10.3345, "lon": 123.9380},
            {"name": "Mandaue proper", "lat": 10.3231, "lon": 123.9410},
            {"name": "Cebu City", "lat": 10.3157, "lon": 123.8854},
        ],
        "fallback_polyline": [
            [10.3170, 123.9185],
            [10.3345, 123.9380],
            [10.3231, 123.9410],
            [10.3210, 123.9178],
            [10.3157, 123.8854],
        ],
    },
    {
        "route_name": "SM City Cebu Terminal -> Pier Area -> Carbon",
        "vehicle_type": "modern_jeep",
        "road_class": "tertiary",
        "highway_names": ["Sergio Osmena Jr Boulevard"],
        "stops": [
            {"name": "SM City Cebu Terminal", "lat": 10.3170, "lon": 123.9185},
            {"name": "Pier Area", "lat": 10.3004, "lon": 123.9059},
            {"name": "Carbon", "lat": 10.2925, "lon": 123.9019},
        ],
        "fallback_polyline": [
            [10.3170, 123.9185],
            [10.3096, 123.9122],
            [10.3004, 123.9059],
            [10.2925, 123.9019],
        ],
    },
]


def haversine_m(lat1, lon1, lat2, lon2):
    r = 6371000.0
    p1 = math.radians(lat1)
    p2 = math.radians(lat2)
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (math.sin(dlat / 2) ** 2) + (math.cos(p1) * math.cos(p2) * (math.sin(dlon / 2) ** 2))
    return r * (2 * math.atan2(math.sqrt(a), math.sqrt(1 - a)))


def route_distance_km(polyline):
    if len(polyline) < 2:
        return 0.0
    total_m = 0.0
    for i in range(1, len(polyline)):
        a = polyline[i - 1]
        b = polyline[i]
        total_m += haversine_m(a[0], a[1], b[0], b[1])
    return total_m / 1000.0


def estimate_time_min(distance_km, vehicle_type, stop_count):
    speed_kmh = 30.0 if vehicle_type == "bus" else 22.0
    moving_min = (distance_km / max(speed_kmh, 1e-6)) * 60.0
    dwell_per_stop = 0.8 if vehicle_type == "bus" else 0.6
    dwell_min = max(0, stop_count - 2) * dwell_per_stop
    return int(round(moving_min + dwell_min))


def overpass_highway_query():
    s, w, n, e = BBOX
    return f"""
[out:json][timeout:40];
(
  way["highway"~"primary|secondary|tertiary"]({s},{w},{n},{e});
);
(._;>;);
out body;
""".strip()


def overpass_pt_query():
    s, w, n, e = BBOX
    return f"""
[out:json][timeout:40];
(
  relation["route"~"bus|minibus|share_taxi"]({s},{w},{n},{e});
);
out body;
""".strip()


def fetch_overpass(query):
    response = requests.post(OVERPASS_URL, data=query.encode("utf-8"), timeout=70)
    response.raise_for_status()
    return response.json()


def parse_osm_graph(osm_json):
    elements = osm_json.get("elements", [])
    nodes = {}
    for el in elements:
        if el.get("type") == "node":
            nodes[el["id"]] = (float(el["lat"]), float(el["lon"]))

    graph = defaultdict(list)
    for el in elements:
        if el.get("type") != "way":
            continue
        tags = el.get("tags", {})
        hwy = tags.get("highway", "")
        if hwy not in ALLOWED_HIGHWAY_CLASSES:
            continue
        name = tags.get("name") or tags.get("ref") or "Unnamed"
        oneway = str(tags.get("oneway", "")).lower() in {"yes", "true", "1"}
        nds = el.get("nodes", [])
        for i in range(len(nds) - 1):
            u = nds[i]
            v = nds[i + 1]
            if u not in nodes or v not in nodes:
                continue
            a = nodes[u]
            b = nodes[v]
            d = haversine_m(a[0], a[1], b[0], b[1])
            meta = {"road_class": hwy, "name": name, "way_id": el["id"]}
            graph[u].append((v, d, meta))
            if not oneway:
                graph[v].append((u, d, meta))
    return graph, nodes


def nearest_node_id(lat, lon, node_items):
    best_id = None
    best_score = float("inf")
    for nid, (nlat, nlon) in node_items:
        score = (nlat - lat) ** 2 + (nlon - lon) ** 2
        if score < best_score:
            best_score = score
            best_id = nid
    return best_id


def dijkstra_path(graph, start, goal):
    pq = [(0.0, start)]
    dist = {start: 0.0}
    prev = {}
    while pq:
        cost, node = heapq.heappop(pq)
        if node == goal:
            break
        if cost > dist.get(node, float("inf")):
            continue
        for nxt, w, meta in graph.get(node, []):
            nd = cost + w
            if nd < dist.get(nxt, float("inf")):
                dist[nxt] = nd
                prev[nxt] = (node, meta)
                heapq.heappush(pq, (nd, nxt))

    if goal not in dist:
        return [], []

    node_path = [goal]
    edge_meta = []
    cur = goal
    while cur != start:
        pnode, em = prev[cur]
        node_path.append(pnode)
        edge_meta.append(em)
        cur = pnode
    node_path.reverse()
    edge_meta.reverse()
    return node_path, edge_meta


def simplify_polyline(points, epsilon_m=25.0):
    """Ramer-Douglas-Peucker simplification in meter space (approx via local projection)."""
    if len(points) < 3:
        return points

    base_lat = math.radians(points[0][0])
    m_per_deg_lat = 111320.0
    m_per_deg_lon = 111320.0 * math.cos(base_lat)

    def to_xy(p):
        return (p[1] * m_per_deg_lon, p[0] * m_per_deg_lat)

    def point_line_distance(p, a, b):
        px, py = to_xy(p)
        ax, ay = to_xy(a)
        bx, by = to_xy(b)
        vx, vy = bx - ax, by - ay
        wx, wy = px - ax, py - ay
        c1 = vx * wx + vy * wy
        if c1 <= 0:
            return math.hypot(px - ax, py - ay)
        c2 = vx * vx + vy * vy
        if c2 <= c1:
            return math.hypot(px - bx, py - by)
        t = c1 / c2
        projx = ax + t * vx
        projy = ay + t * vy
        return math.hypot(px - projx, py - projy)

    def rdp(seg):
        if len(seg) < 3:
            return seg
        a = seg[0]
        b = seg[-1]
        max_d = -1.0
        max_i = -1
        for i in range(1, len(seg) - 1):
            d = point_line_distance(seg[i], a, b)
            if d > max_d:
                max_d = d
                max_i = i
        if max_d > epsilon_m:
            left = rdp(seg[: max_i + 1])
            right = rdp(seg[max_i:])
            return left[:-1] + right
        return [a, b]

    return rdp(points)


def interpolate_along_path(polyline, step_m=20.0):
    """Helper for animation: returns evenly spaced points along the path."""
    if len(polyline) < 2:
        return polyline[:]
    cumulative = [0.0]
    for i in range(1, len(polyline)):
        a = polyline[i - 1]
        b = polyline[i]
        cumulative.append(cumulative[-1] + haversine_m(a[0], a[1], b[0], b[1]))
    total = cumulative[-1]
    if total <= 0:
        return polyline[:]

    targets = [0.0]
    t = step_m
    while t < total:
        targets.append(t)
        t += step_m
    targets.append(total)

    result = []
    seg_idx = 1
    for d in targets:
        while seg_idx < len(cumulative) and cumulative[seg_idx] < d:
            seg_idx += 1
        if seg_idx >= len(cumulative):
            result.append(polyline[-1])
            continue
        d0 = cumulative[seg_idx - 1]
        d1 = cumulative[seg_idx]
        if d1 - d0 <= 1e-9:
            result.append(polyline[seg_idx][:])
            continue
        r = (d - d0) / (d1 - d0)
        a = polyline[seg_idx - 1]
        b = polyline[seg_idx]
        lat = a[0] + (b[0] - a[0]) * r
        lon = a[1] + (b[1] - a[1]) * r
        result.append([round(lat, 6), round(lon, 6)])
    return result


def validate_route_geometry(polyline, max_jump_m=5000.0):
    issues = []
    if len(polyline) < 2:
        issues.append("polyline_has_fewer_than_2_points")
        return False, issues
    for i, p in enumerate(polyline):
        if len(p) != 2:
            issues.append(f"point_{i}_not_latlon_pair")
            continue
        lat, lon = p
        if not (math.isfinite(lat) and math.isfinite(lon)):
            issues.append(f"point_{i}_not_finite")
            continue
        if not (-90 <= lat <= 90 and -180 <= lon <= 180):
            issues.append(f"point_{i}_out_of_bounds")
    for i in range(1, len(polyline)):
        a = polyline[i - 1]
        b = polyline[i]
        jump = haversine_m(a[0], a[1], b[0], b[1])
        if jump > max_jump_m:
            issues.append(f"segment_{i-1}_{i}_jump_{int(jump)}m")
    return len(issues) == 0, issues


def build_route_polyline(spec, graph, nodes):
    node_items = list(nodes.items())
    combined = []
    classes_seen = Counter()
    names_seen = Counter()

    stops = spec["stops"]
    success = True
    for i in range(len(stops) - 1):
        s = stops[i]
        t = stops[i + 1]
        sid = nearest_node_id(s["lat"], s["lon"], node_items)
        tid = nearest_node_id(t["lat"], t["lon"], node_items)
        if sid is None or tid is None:
            success = False
            break
        npath, emeta = dijkstra_path(graph, sid, tid)
        if len(npath) < 2:
            success = False
            break
        segment = [[round(nodes[n][0], 6), round(nodes[n][1], 6)] for n in npath]
        if combined and segment and combined[-1] == segment[0]:
            combined.extend(segment[1:])
        else:
            combined.extend(segment)
        for em in emeta:
            cls = em.get("road_class")
            nm = em.get("name")
            if cls:
                classes_seen[cls] += 1
            if nm and nm != "Unnamed":
                names_seen[nm] += 1

    if not success or len(combined) < 2:
        combined = [p[:] for p in spec["fallback_polyline"]]
        classes_seen[spec["road_class"]] += 1
        for n in spec.get("highway_names", []):
            names_seen[n] += 1

    # Keep extraction order stable; only dedupe consecutive duplicates.
    ordered = []
    for point in combined:
        if not ordered or ordered[-1] != point:
            ordered.append(point)
    combined = ordered

    simplified = simplify_polyline(combined, epsilon_m=22.0 if spec["vehicle_type"] == "modern_jeep" else 35.0)

    # Ensure first/last align to first/last stop.
    simplified[0] = [round(stops[0]["lat"], 6), round(stops[0]["lon"], 6)]
    simplified[-1] = [round(stops[-1]["lat"], 6), round(stops[-1]["lon"], 6)]

    valid, issues = validate_route_geometry(simplified)
    if not valid:
        simplified = [p[:] for p in spec["fallback_polyline"]]
        valid, issues = validate_route_geometry(simplified)

    road_class = spec["road_class"]
    if classes_seen:
        # Convert *_link to their base class to keep output clean.
        normalized = Counter()
        for k, v in classes_seen.items():
            normalized[k.replace("_link", "")] += v
        road_class = normalized.most_common(1)[0][0]

    highway_names = list(dict.fromkeys(spec.get("highway_names", []) + [n for n, _ in names_seen.most_common(8)]))

    return simplified, road_class, highway_names, valid, issues


def fetch_public_transport_relations():
    try:
        payload = fetch_overpass(overpass_pt_query())
        rels = []
        for el in payload.get("elements", []):
            if el.get("type") != "relation":
                continue
            tags = el.get("tags", {})
            rels.append(
                {
                    "id": el.get("id"),
                    "name": tags.get("name", ""),
                    "ref": tags.get("ref", ""),
                    "route": tags.get("route", ""),
                    "network": tags.get("network", ""),
                }
            )
        return rels
    except Exception:
        return []


def route_starts_at_major_terminal(spec):
    stops = spec.get("stops", [])
    if not stops:
        return False
    return stops[0].get("name", "") in MAJOR_TERMINALS


def main():
    invalid_specs = [spec["route_name"] for spec in ROUTE_SPECS if not route_starts_at_major_terminal(spec)]
    if invalid_specs:
        raise ValueError(
            "All routes must start at major terminals. Invalid routes: "
            + ", ".join(invalid_specs)
        )

    print("Querying Overpass roads...")
    roads_json = fetch_overpass(overpass_highway_query())
    graph, nodes = parse_osm_graph(roads_json)
    print(f"Graph nodes: {len(nodes):,}, graph vertices: {len(graph):,}")

    print("Querying Overpass public transport relations...")
    pt_relations = fetch_public_transport_relations()
    print(f"PT relations found: {len(pt_relations):,}")

    output_routes = []
    for spec in ROUTE_SPECS:
        polyline, road_class, highway_names, valid, issues = build_route_polyline(spec, graph, nodes)
        dist_km = round(route_distance_km(polyline), 2)
        time_min = estimate_time_min(dist_km, spec["vehicle_type"], len(spec["stops"]))

        route_obj = {
            "route_name": spec["route_name"],
            "vehicle_type": spec["vehicle_type"],
            "road_class": road_class,
            "highway_names": highway_names,
            "stops": spec["stops"],
            "polyline": polyline,
            "estimated_time_min": time_min,
            "estimated_distance_km": dist_km,
        }
        route_obj["animation_points_25m"] = interpolate_along_path(polyline, step_m=25.0)
        route_obj["geometry_valid"] = bool(valid)
        route_obj["geometry_issues"] = issues

        output_routes.append(route_obj)
        print(f"Built route: {spec['route_name']} | {dist_km} km | {time_min} min")

    out = {
        "generated_at_utc": datetime.now(timezone.utc).isoformat(),
        "source": "OpenStreetMap Overpass API",
        "bbox": {"south": BBOX[0], "west": BBOX[1], "north": BBOX[2], "east": BBOX[3]},
        "routes": output_routes,
        "public_transport_relations": pt_relations[:100],  # cap for demo-size payload
    }

    with open("routes_cebu.json", "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print("Saved routes_cebu.json")


if __name__ == "__main__":
    main()
