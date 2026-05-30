export type Freshness = "fresh" | "degraded" | "stale";

export function classifyFreshness(lastCapturedAt: Date): Freshness {
  const ageSec = Math.floor((Date.now() - lastCapturedAt.getTime()) / 1000);

  if (ageSec <= 20) return "fresh";
  if (ageSec <= 60) return "degraded";
  return "stale";
}

export function distanceKm(
  fromLat: number,
  fromLng: number,
  toLat: number,
  toLng: number
): number {
  const toRadians = (value: number): number => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;

  const dLat = toRadians(toLat - fromLat);
  const dLng = toRadians(toLng - fromLng);
  const lat1 = toRadians(fromLat);
  const lat2 = toRadians(toLat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLng / 2) * Math.sin(dLng / 2) * Math.cos(lat1) * Math.cos(lat2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

type EtaConfidence = "High" | "Medium" | "Low";

export function estimateEtaMinutes(params: {
  distanceToStopKm: number;
  speedKph: number | null;
  freshness: Freshness;
}): { etaMinutes: number | null; confidence: EtaConfidence } {
  if (params.freshness === "stale") {
    return { etaMinutes: null, confidence: "Low" };
  }

  const fallbackKph = 22;
  const effectiveSpeed = params.speedKph && params.speedKph > 3 ? params.speedKph : fallbackKph;
  const etaMinutes = Math.ceil((params.distanceToStopKm / effectiveSpeed) * 60);

  if (params.freshness === "fresh" && params.speedKph && params.speedKph > 3) {
    return { etaMinutes, confidence: "High" };
  }

  return { etaMinutes, confidence: "Medium" };
}
