import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

type VehicleStatus = "fresh" | "degraded" | "stale";

type Vehicle = {
  tripId: string;
  routeCode: string;
  routeName: string;
  plateNo: string;
  status: VehicleStatus;
  etaMinutes: number | null;
  etaConfidence: "High" | "Medium" | "Low";
};

const vehiclesSeed: Vehicle[] = [
  {
    tripId: "TRP-2411",
    routeCode: "JEEP-ITP-01",
    routeName: "SM City Cebu -> Ayala Loop",
    plateNo: "GAB-1021",
    status: "fresh",
    etaMinutes: 4,
    etaConfidence: "High"
  },
  {
    tripId: "TRP-2422",
    routeCode: "BUS-CEB-12",
    routeName: "Cebu South -> Carcar",
    plateNo: "DGT-5520",
    status: "degraded",
    etaMinutes: 11,
    etaConfidence: "Medium"
  },
  {
    tripId: "TRP-2467",
    routeCode: "JEEP-LAPU-03",
    routeName: "IT Park -> Mactan Newtown",
    plateNo: "HKA-8472",
    status: "stale",
    etaMinutes: null,
    etaConfidence: "Low"
  }
];

const stops = [
  { name: "SM City Cebu", municipality: "Cebu City" },
  { name: "Ayala Center Cebu", municipality: "Cebu City" },
  { name: "South Bus Terminal", municipality: "Cebu City" },
  { name: "Carcar Terminal", municipality: "Carcar" }
];

const adSlots = [
  { title: "Cebu Fuel Network", copy: "Partner fuel discounts for verified Bussin fleets." },
  { title: "Metro Insurance Assist", copy: "Daily commuter coverage options for bus routes." },
  { title: "Telecom Signal Boost", copy: "Reliable data bundles for GPS continuity." }
];

const seatLabels = Array.from({ length: 24 }, (_, index) => {
  const letters = ["A", "B", "C", "D"];
  return `${Math.floor(index / 4) + 1}${letters[index % 4]}`;
});

function statusLabel(status: VehicleStatus): string {
  if (status === "fresh") return "Live";
  if (status === "degraded") return "Signal Weak";
  return "Location Unavailable";
}

export default function App() {
  const [search, setSearch] = useState("");
  const [vehicles, setVehicles] = useState(vehiclesSeed);
  const [updatedAt, setUpdatedAt] = useState("Updated just now");
  const [paymentType, setPaymentType] = useState<"cash" | "digital">("cash");
  const [bookedSeats, setBookedSeats] = useState<string[]>(["1A", "1B", "2D", "3A", "4C"]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookingMessage, setBookingMessage] = useState("");

  const filteredVehicles = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return vehicles;
    return vehicles.filter((vehicle) => {
      return (
        vehicle.routeCode.toLowerCase().includes(keyword) ||
        vehicle.routeName.toLowerCase().includes(keyword)
      );
    });
  }, [search, vehicles]);

  function refreshVehicles() {
    const next = vehicles.map((vehicle) => {
      const roll = Math.random();
      let status: VehicleStatus = "fresh";
      if (roll < 0.15) status = "stale";
      else if (roll < 0.45) status = "degraded";

      return {
        ...vehicle,
        status,
        etaMinutes: status === "stale" ? null : Math.floor(Math.random() * 12) + 3
      };
    });

    setVehicles(next);
    setUpdatedAt(`Updated ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`);
  }

  function toggleSeat(seat: string) {
    if (bookedSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
      return;
    }
    setSelectedSeats([...selectedSeats, seat]);
  }

  function bookSelectedSeats() {
    if (selectedSeats.length === 0) {
      setBookingMessage("Select at least one seat.");
      return;
    }

    setBookedSeats([...bookedSeats, ...selectedSeats]);
    const fare = selectedSeats.length * 180;
    setBookingMessage(
      `Booked ${selectedSeats.join(", ")} | Fare PHP ${fare} | ${paymentType === "cash" ? "Pay in cash" : "Digital payment pending"}`
    );
    setSelectedSeats([]);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.brand}>BUSSIN</Text>
          <Text style={styles.title}>Ride with Certainty</Text>
          <Text style={styles.subtitle}>Live route visibility for Cebu commuters</Text>
          <View style={styles.searchRow}>
            <TextInput
              placeholder="Search route or destination"
              placeholderTextColor="#8c8277"
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />
            <Pressable style={styles.refreshBtn} onPress={refreshVehicles}>
              <Text style={styles.refreshText}>Refresh</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.panel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelTitle}>Nearby Vehicles</Text>
            <Text style={styles.updatedAt}>{updatedAt}</Text>
          </View>
          <Text style={styles.vehicleCount}>{filteredVehicles.length} active</Text>

          {filteredVehicles.map((vehicle) => (
            <View key={vehicle.tripId} style={styles.card}>
              <View style={styles.rowBetween}>
                <View style={{ flex: 1, paddingRight: 8 }}>
                  <Text style={styles.routeCode}>{vehicle.routeCode}</Text>
                  <Text style={styles.routeName}>{vehicle.routeName}</Text>
                </View>
                <Text style={styles.plate}>{vehicle.plateNo}</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={[styles.chip, styles[vehicle.status]]}>{statusLabel(vehicle.status)}</Text>
                <Text style={[styles.chip, styles.etaChip]}>
                  {vehicle.etaMinutes !== null
                    ? `${vehicle.etaMinutes} min (${vehicle.etaConfidence})`
                    : "ETA unavailable"}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Key Stops</Text>
          {stops.map((stop) => (
            <View key={stop.name} style={styles.stopRow}>
              <Text style={styles.stopName}>{stop.name}</Text>
              <Text style={styles.stopTown}>{stop.municipality}</Text>
            </View>
          ))}
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Seat Selection (Coach)</Text>
          <Text style={styles.panelNote}>Seat picking is available for provincial bus trips.</Text>
          <View style={styles.seatGrid}>
            {seatLabels.map((seat) => {
              const isBooked = bookedSeats.includes(seat);
              const isSelected = selectedSeats.includes(seat);
              return (
                <Pressable
                  key={seat}
                  onPress={() => toggleSeat(seat)}
                  style={[
                    styles.seat,
                    isBooked ? styles.seatBooked : null,
                    isSelected ? styles.seatSelected : null
                  ]}
                >
                  <Text style={styles.seatText}>{seat}</Text>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.paymentRow}>
            <Pressable
              onPress={() => setPaymentType("cash")}
              style={[styles.paymentChip, paymentType === "cash" ? styles.paymentChipActive : null]}
            >
              <Text style={styles.paymentChipText}>Cash</Text>
            </Pressable>
            <Pressable
              onPress={() => setPaymentType("digital")}
              style={[styles.paymentChip, paymentType === "digital" ? styles.paymentChipActive : null]}
            >
              <Text style={styles.paymentChipText}>Digital</Text>
            </Pressable>
          </View>
          <Pressable style={styles.bookBtn} onPress={bookSelectedSeats}>
            <Text style={styles.bookBtnText}>Book Selected Seats</Text>
          </Pressable>
          <Text style={styles.bookingMessage}>{bookingMessage}</Text>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>Commercial Slots</Text>
          {adSlots.map((slot) => (
            <View key={slot.title} style={styles.adCard}>
              <Text style={styles.adTitle}>{slot.title}</Text>
              <Text style={styles.adCopy}>{slot.copy}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFF8F0"
  },
  container: {
    padding: 14
  },
  hero: {
    backgroundColor: "#FF6B00",
    borderRadius: 18,
    padding: 14
  },
  brand: {
    color: "white",
    fontWeight: "800",
    letterSpacing: 2,
    fontSize: 11
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "800",
    marginTop: 6
  },
  subtitle: {
    color: "#ffeada",
    marginTop: 6
  },
  searchRow: {
    marginTop: 12,
    flexDirection: "row",
    gap: 8
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 42
  },
  refreshBtn: {
    backgroundColor: "#FF4500",
    borderRadius: 10,
    paddingHorizontal: 14,
    justifyContent: "center"
  },
  refreshText: {
    color: "white",
    fontWeight: "700"
  },
  panel: {
    marginTop: 12,
    backgroundColor: "white",
    borderColor: "#F0DDCC",
    borderWidth: 1,
    borderRadius: 14,
    padding: 12
  },
  panelHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A"
  },
  updatedAt: {
    fontSize: 11,
    color: "#6A625A"
  },
  vehicleCount: {
    marginTop: 8,
    color: "#6A625A",
    fontSize: 12
  },
  panelNote: {
    marginTop: 6,
    color: "#6A625A",
    fontSize: 12
  },
  card: {
    marginTop: 9,
    borderColor: "#F0DDCC",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  routeCode: {
    fontWeight: "700",
    color: "#1A1A1A"
  },
  routeName: {
    fontSize: 12,
    color: "#6A625A",
    marginTop: 3
  },
  plate: {
    fontWeight: "700",
    color: "#1A1A1A"
  },
  metaRow: {
    marginTop: 8,
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap"
  },
  chip: {
    fontSize: 11,
    fontWeight: "700",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  fresh: {
    backgroundColor: "#E6F4EA",
    color: "#1F5E24"
  },
  degraded: {
    backgroundColor: "#FFF4DF",
    color: "#8A5B10"
  },
  stale: {
    backgroundColor: "#FFE7E7",
    color: "#8F1414"
  },
  etaChip: {
    backgroundColor: "#F4E8DE",
    color: "#7D4F2B"
  },
  stopRow: {
    marginTop: 10,
    paddingBottom: 8,
    borderBottomColor: "#F3E9DF",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  stopName: {
    color: "#1A1A1A"
  },
  stopTown: {
    color: "#6A625A",
    fontSize: 12
  },
  seatGrid: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6
  },
  seat: {
    width: "23%",
    minHeight: 30,
    borderWidth: 1,
    borderColor: "#D7C5B5",
    borderRadius: 8,
    backgroundColor: "#FFF8F2",
    justifyContent: "center",
    alignItems: "center"
  },
  seatSelected: {
    backgroundColor: "#FFE3CD",
    borderColor: "#D85D00"
  },
  seatBooked: {
    backgroundColor: "#EFEFEF",
    borderColor: "#DADADA"
  },
  seatText: {
    fontSize: 11,
    color: "#3E3229",
    fontWeight: "700"
  },
  paymentRow: {
    marginTop: 10,
    flexDirection: "row",
    gap: 8
  },
  paymentChip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#E6D6C8",
    paddingHorizontal: 12,
    paddingVertical: 7
  },
  paymentChipActive: {
    backgroundColor: "#FFE6D3",
    borderColor: "#D56B16"
  },
  paymentChipText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#7A3F00"
  },
  bookBtn: {
    marginTop: 10,
    backgroundColor: "#FF4500",
    borderRadius: 10,
    minHeight: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  bookBtnText: {
    color: "white",
    fontWeight: "700"
  },
  bookingMessage: {
    marginTop: 8,
    color: "#7D4F2B",
    fontSize: 12
  },
  adCard: {
    marginTop: 9,
    borderWidth: 1,
    borderColor: "#F0DDCC",
    borderRadius: 10,
    backgroundColor: "#FFF8F1",
    padding: 9
  },
  adTitle: {
    fontWeight: "700",
    color: "#1A1A1A"
  },
  adCopy: {
    marginTop: 3,
    color: "#6A625A",
    fontSize: 12
  }
});
