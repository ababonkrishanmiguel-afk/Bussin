const mapElement = document.getElementById("live-map");
const trackingStatusElement = document.getElementById("tracking-status");
const vehicleListElement = document.getElementById("vehicle-list");
const vehicleCountElement = document.getElementById("vehicle-count");
const searchInput = document.getElementById("route-search");
const searchAutocompleteWrapElement = document.getElementById("search-autocomplete-wrap");
const searchSuggestionsElement = document.getElementById("search-suggestions");
const searchFeedbackElement = document.getElementById("search-feedback");
const routeSearchRowElement = document.getElementById("route-search-row");
const refreshButton = document.getElementById("refresh-btn");
const updatedAtElement = document.getElementById("updated-at");
const adSlotsElement = document.getElementById("ad-slots");
const trackBusButton = document.getElementById("track-bus-btn");
const trackJeepButton = document.getElementById("track-jeep-btn");
const liveBusButton = document.getElementById("live-bus-btn");
const liveJeepButton = document.getElementById("live-jeep-btn");
const trackingModal = document.getElementById("tracking-modal");
const trackingCloseButton = document.getElementById("tracking-close-btn");
const trackingPanelNoteElement = document.getElementById("tracking-panel-note");
const popupTrackJeepButton = document.getElementById("popup-track-jeep-btn");
const popupTrackBusButton = document.getElementById("popup-track-bus-btn");
const mapOverlayTextElement = document.getElementById("map-overlay-text");

const pageHome = document.getElementById("page-home");
const pageSeat = document.getElementById("page-seat");
const pageActivity = document.getElementById("page-activity");
const pageUser = document.getElementById("page-user");
const pageMap = document.getElementById("page-map");
const navHome = document.getElementById("nav-home");
const navActivity = document.getElementById("nav-activity");
const navUser = document.getElementById("nav-user");
const userDashboardTitleElement = document.getElementById("user-dashboard-title");
const backHomeButton = document.getElementById("back-home-btn");
const compactTopbar = document.getElementById("compact-topbar");
const compactSearchButton = document.getElementById("compact-search-btn");

const pickupStopElement = document.getElementById("pickup-stop");
const destinationStopElement = document.getElementById("destination-stop");
const chooseMapPickupButton = document.getElementById("choose-map-pickup-btn");
const findRouteButton = document.getElementById("find-route-btn");
const tripPlanResultElement = document.getElementById("trip-plan-result");
const planTripSectionElement = document.getElementById("plan-trip-section");
const homeRideNoticeElement = document.getElementById("home-ride-notice");
const homeRideNoticeTitleElement = document.getElementById("home-ride-notice-title");
const homeRideNoticeBadgeElement = document.getElementById("home-ride-notice-badge");
const homeRideNoticeCopyElement = document.getElementById("home-ride-notice-copy");
const modeJeepButton = document.getElementById("mode-jeep-btn");
const modeBusButton = document.getElementById("mode-bus-btn");
const tripFieldsWrap = document.getElementById("trip-fields-wrap");
const planModeHint = document.getElementById("plan-mode-hint");
const mapBackButton = document.getElementById("map-back-btn");
const mapSearchInput = document.getElementById("map-search-input");
const mapPlaceList = document.getElementById("map-place-list");
const mapConfirmSheet = document.getElementById("map-confirm-sheet");
const mapSelectedLabel = document.getElementById("map-selected-label");
const mapBackHomeButton = document.getElementById("map-back-home-btn");
const mapConfirmBookingButton = document.getElementById("map-confirm-booking-btn");
const mapDirectionIndicator = document.getElementById("map-direction-indicator");
const mapDirectionArrow = document.getElementById("map-direction-arrow");
const mapDirectionText = document.getElementById("map-direction-text");

const metricActiveTripsElement = document.getElementById("metric-active-trips");
const metricTransactionsElement = document.getElementById("metric-transactions");
const metricCompletedTripsElement = document.getElementById("metric-completed-trips");
const tripUpcomingListElement = document.getElementById("trip-upcoming-list");
const tripOngoingListElement = document.getElementById("trip-ongoing-list");
const tripCompletedListElement = document.getElementById("trip-completed-list");
const tripCancelledListElement = document.getElementById("trip-cancelled-list");
const transactionListElement = document.getElementById("transaction-list");
const activityResultElement = document.getElementById("activity-result");
const epaymentLinkButton = document.getElementById("epayment-link-btn");
const languageButton = document.getElementById("language-btn");
const savedPlacesButton = document.getElementById("saved-places-btn");
const themeToggleButton = document.getElementById("theme-toggle-btn");
const supportCenterButton = document.getElementById("support-center-btn");
const userActionResultElement = document.getElementById("user-action-result");
const logoutButton = document.getElementById("logout-btn");

const seatModeBadgeElement = document.getElementById("seat-mode-badge");
const selectedRouteSummaryElement = document.getElementById("selected-route-summary");
const seatRoutePanelElement = document.getElementById("seat-route-panel");
const seatRouteTagElement = document.getElementById("seat-route-tag");
const seatRouteCaptionElement = document.getElementById("seat-route-caption");
const seatRouteMapElement = document.getElementById("seat-route-map");
const seatGridElement = document.getElementById("seat-grid");
const paymentMethodElement = document.getElementById("payment-method");
const bookSeatButton = document.getElementById("book-seat-btn");
const bookingResultElement = document.getElementById("booking-result");
const seatCountSummaryElement = document.getElementById("seat-count-summary");
const seatFareSummaryElement = document.getElementById("seat-fare-summary");

const promoModalElement = document.getElementById("promo-modal");
const promoCloseButton = document.getElementById("promo-close");
const promoCtaButton = document.getElementById("promo-cta");
const promoTitleElement = document.getElementById("promo-title");
const promoCopyElement = document.getElementById("promo-copy");
const quickAdToastElement = document.getElementById("quick-ad-toast");

const pageKeys = ["home", "seat", "activity", "user", "map"];

const onboardingScreen = document.getElementById("onboarding-screen");
const authScreen = document.getElementById("auth-screen");
const appShell = document.getElementById("app-shell");
const bottomNav = document.getElementById("bottom-nav");
const continueButton = document.getElementById("continue-btn");
const authSignInButton = document.getElementById("auth-signin-btn");
const authCreateButton = document.getElementById("auth-create-btn");
const authTitleElement = document.getElementById("auth-title");
const authSubtitleElement = document.getElementById("auth-subtitle");
const googleAuthButton = document.getElementById("google-auth-btn");
const phoneAuthButton = document.getElementById("phone-auth-btn");
const authNameInput = document.getElementById("auth-name");
const phoneNumberInput = document.getElementById("phone-number");
const authResultElement = document.getElementById("auth-result");
const verifySection = document.getElementById("verify-section");
const verificationCodeInput = document.getElementById("verification-code");
const verifyButton = document.getElementById("verify-btn");
const welcomeModal = document.getElementById("welcome-modal");
const welcomeTitle = document.getElementById("welcome-title");
const welcomeCopy = document.getElementById("welcome-copy");
const welcomeContinueButton = document.getElementById("welcome-continue-btn");
const ticketModal = document.getElementById("ticket-modal");
const ticketTitle = document.getElementById("ticket-title");
const ticketTransaction = document.getElementById("ticket-transaction");
const ticketRoute = document.getElementById("ticket-route");
const ticketFrom = document.getElementById("ticket-from");
const ticketTo = document.getElementById("ticket-to");
const ticketMode = document.getElementById("ticket-mode");
const ticketPayment = document.getElementById("ticket-payment");
const ticketFare = document.getElementById("ticket-fare");
const ticketTime = document.getElementById("ticket-time");
const ticketLiveMapElement = document.getElementById("ticket-live-map");
const ticketCloseButton = document.getElementById("ticket-close-btn");
const ticketActivityButton = document.getElementById("ticket-activity-btn");
const tripDetailModal = document.getElementById("trip-detail-modal");
const tripDetailTitle = document.getElementById("trip-detail-title");
const tripDetailRouteMapElement = document.getElementById("trip-detail-route-map");
const tripDetailStatus = document.getElementById("trip-detail-status");
const tripDetailRoute = document.getElementById("trip-detail-route");
const tripDetailFrom = document.getElementById("trip-detail-from");
const tripDetailTo = document.getElementById("trip-detail-to");
const tripDetailMode = document.getElementById("trip-detail-mode");
const tripDetailSeats = document.getElementById("trip-detail-seats");
const tripDetailPayment = document.getElementById("trip-detail-payment");
const tripDetailFare = document.getElementById("trip-detail-fare");
const tripDetailTime = document.getElementById("trip-detail-time");
const tripDetailGps = document.getElementById("trip-detail-gps");
const tripDetailCloseButton = document.getElementById("trip-detail-close-btn");
const tripCancelButton = document.getElementById("trip-cancel-btn");
const walletModal = document.getElementById("wallet-modal");
const walletButtons = Array.from(document.querySelectorAll(".wallet-btn"));
const walletLinkingNote = document.getElementById("wallet-linking-note");
const walletCancelButton = document.getElementById("wallet-cancel-btn");
const walletContinueButton = document.getElementById("wallet-continue-btn");
const tutorialModal = document.getElementById("tutorial-modal");
const tutorialTitle = document.getElementById("tutorial-title");
const tutorialCopy = document.getElementById("tutorial-copy");
const tutorialStepLabel = document.getElementById("tutorial-step-label");
const tutorialSkipButton = document.getElementById("tutorial-skip-btn");
const tutorialBackButton = document.getElementById("tutorial-back-btn");
const tutorialNextButton = document.getElementById("tutorial-next-btn");

const MODERN_JEEP_CARD_IMAGE = "https://live.staticflickr.com/65535/53515290034_1428c02bf3.jpg";
const MODERN_JEEP_CARD_IMAGE_FALLBACK = "https://live.staticflickr.com/65535/53515290034_1428c02bf3.jpg";
const CERES_BUS_CARD_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/c/c6/Ceres_Tours_56033.jpg?v=3";
const CERES_BUS_CARD_IMAGE_FALLBACK = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ceres_liner_5604.jpg?v=3";

window.__bussinAuthFallback = function bussinAuthFallback() {
  const nameInput = document.getElementById("auth-name");
  const enteredName = (nameInput?.value || "").trim() || localStorage.getItem("bussin_name") || "Commuter";
  localStorage.setItem("bussin_name", enteredName);
  localStorage.setItem("bussin_auth", "true");
  try {
    if (typeof showApp === "function") {
      showApp();
      return;
    }
  } catch (error) {
    // no-op fallback below
  }
  const onboarding = document.getElementById("onboarding-screen");
  const auth = document.getElementById("auth-screen");
  const app = document.getElementById("app-shell");
  const nav = document.getElementById("bottom-nav");
  if (onboarding) onboarding.classList.add("hidden");
  if (auth) auth.classList.add("hidden");
  if (app) app.classList.remove("hidden");
  if (nav) nav.classList.remove("hidden");
};

let authMode = "signin";
let introPromoQueued = false;
let promoModalTimeoutId = null;
let quickAdToastTimeoutId = null;
let deferPromoUntilTutorialEnds = false;
let pendingAuthProvider = "";
let shouldShowPostSignupTutorial = false;
let tutorialStepIndex = 0;
let guidedTutorialActive = false;
let guidedTutorialCurrentTarget = null;
let guidedTutorialRoot = null;
let guidedTutorialBackdrop = null;
let guidedTutorialHighlight = null;
let guidedTutorialCard = null;
let guidedTutorialTitle = null;
let guidedTutorialCopy = null;
let guidedTutorialProgress = null;
let guidedTutorialBack = null;
let guidedTutorialNext = null;
let guidedTutorialSkip = null;
let currentPageKey = "home";
let cebuSearchDatabase = { destinations: [], pickups: [], routes: [] };
let searchIndex = [];
let searchSuggestionResults = [];
let activeSearchSuggestionIndex = -1;
let selectedSearchSuggestion = null;
let searchSuggestedRouteCodes = [];
const NAV_LAYOUT_STORAGE_KEY = "bussin_nav_layout_v1";
const NAV_DOCK_MARGIN = 14;
const NAV_SIDE_SNAP_ZONE = 84;
const NAV_IDLE_DELAY_MS = 2200;
let navLayoutState = { dock: "bottom", left: 0, top: 0 };
let navDragState = {
  active: false,
  pointerId: null,
  startX: 0,
  startY: 0,
  offsetX: 0,
  offsetY: 0,
  moved: false,
  suppressClick: false,
  hasCapture: false
};
let navIdleTimer = null;

const guidedTutorialSteps = [
  {
    title: "Step 1: Choose bus booking",
    copy: "Tap the highlighted 'Book a Bus Seat' button to start a bus ride booking.",
    advanceOn: "click",
    getTarget: () => modeBusButton,
    beforeEnter: () => {
      if (currentPageKey !== "home") setPage("home");
      if (bookingMode) setBookingMode("");
      tripPlanResultElement.textContent = "";
      bookingResultElement.textContent = "";
    }
  },
  {
    title: "Step 2: Select pickup area",
    copy: "Tap Pickup Area and choose where you will board.",
    advanceOn: "change",
    getTarget: () => pickupStopElement,
    isComplete: () => pickupStopElement.value.trim().length > 0,
    beforeEnter: () => {
      if (currentPageKey !== "home") setPage("home");
      if (bookingMode !== "bus") setBookingMode("bus");
    }
  },
  {
    title: "Step 3: Select destination",
    copy: "Tap Destination and choose where you are going.",
    advanceOn: "change",
    getTarget: () => destinationStopElement,
    isComplete: () => destinationStopElement.value.trim().length > 0,
    beforeEnter: () => {
      if (currentPageKey !== "home") setPage("home");
      if (bookingMode !== "bus") setBookingMode("bus");
    }
  },
  {
    title: "Step 4: Find the route",
    copy: "Tap Find Best Route. Bussin will open the seat selection page for that route.",
    advanceOn: "click",
    advanceDelayMs: 260,
    getTarget: () => findRouteButton,
    beforeEnter: () => {
      if (currentPageKey !== "home") setPage("home");
      if (bookingMode !== "bus") setBookingMode("bus");
      updatePlanCTAState();
    }
  },
  {
    title: "Step 5: Select your seat",
    copy: "Tap an available seat in the highlighted seat map.",
    advanceOn: "click",
    getTarget: () => document.querySelector("#seat-grid .seat:not(.booked)"),
    beforeEnter: () => {
      ensureSeatPageReadyForTutorial();
    }
  },
  {
    title: "Step 6: Book selected seat",
    copy: "Tap Book Selected Seats to confirm the booking.",
    advanceOn: "click",
    advanceDelayMs: 700,
    getTarget: () => bookSeatButton,
    beforeEnter: () => {
      ensureSeatPageReadyForTutorial();
      if (selectedSeats.size === 0) {
        const firstSeat = document.querySelector("#seat-grid .seat:not(.booked)");
        firstSeat?.click();
      }
    }
  },
  {
    title: "Step 7: Open Activity",
    copy: "After booking ticket appears, tap View Activity to track your trip.",
    advanceOn: "click",
    getTarget: () => ticketModal.classList.contains("hidden") ? null : ticketActivityButton
  },
  {
    title: "Done",
    copy: "You are ready. Use Home to plan rides, Activity to track bookings, and Dashboard for account settings."
  }
];

const pickupAreasNationalRoad = [
  "Cebu South Bus Terminal (N. Bacalso Ave)",
  "Cebu North Bus Terminal (SM City Cebu)",
  "Cebu City - Fuente Osmena (N8)",
  "Mandaue - M.C. Briones (N8)",
  "Talisay City - Cebu South Road (N8)",
  "Minglanilla - Cebu South Road (N8)",
  "Naga City - Cebu South Road (N8)",
  "Carcar City Circle (N8/N83)",
  "Sibonga - Cebu South Road (N8)",
  "Argao - Cebu South Road (N8)",
  "Dalaguete - Cebu South Road (N8)",
  "Oslob - Cebu South Road (N8)",
  "Consolacion - Cebu North Road (N810)",
  "Liloan - Cebu North Road (N810)",
  "Danao City - National Road (N8/N810)",
  "Bogo City - National Road (N810)"
];

const destinationAreasCebu = [
  "Cebu City",
  "IT Park, Cebu City",
  "Mandaue City",
  "Talisay City",
  "Naga City",
  "Carcar City",
  "Sibonga",
  "Argao",
  "Dalaguete",
  "Oslob",
  "Moalboal",
  "Liloan",
  "Danao City",
  "Carmen",
  "Catmon",
  "Bogo City",
  "San Remigio"
];

const commercialSlots = [
  {
    brand: "Jollibee Demo",
    title: "Family Combo On The Go",
    copy: "Get a demo partner deal: free drink upgrade when booking your next Cebu route seat.",
    cta: "View Partner Promo"
  }
];

const promoMessages = [
  { title: "Bus Seat Saver", copy: "Reserve 2+ provincial bus seats and get PHP 30 off on digital checkout." },
  { title: "Morning Commute Promo", copy: "Modern jeep routes from 6:00 to 8:00 AM now have priority boarding." },
  { title: "Weekend Carcar Trips", copy: "Selected Cebu South to Carcar departures include luggage assist support." }
];

const routeCatalog = [
  {
    key: "jeep:JEEP-N8-01",
    mode: "jeep",
    routeCode: "JEEP-N8-01",
    routeName: "Fuente -> Mandaue Corridor",
    pickup: "Cebu City - Fuente Osmena (N8)",
    destination: "Mandaue City",
    baseFare: 35
  },
  {
    key: "jeep:JEEP-N8-02",
    mode: "jeep",
    routeCode: "JEEP-N8-02",
    routeName: "Talisay -> Naga South Corridor",
    pickup: "Talisay City - Cebu South Road (N8)",
    destination: "Naga City",
    baseFare: 38
  },
  {
    key: "jeep:JEEP-N8-03",
    mode: "jeep",
    routeCode: "JEEP-N8-03",
    routeName: "Consolacion -> Danao North Corridor",
    pickup: "Consolacion - Cebu North Road (N810)",
    destination: "Danao City",
    baseFare: 42
  },
  {
    key: "jeep:JEEP-N8-04",
    mode: "jeep",
    routeCode: "JEEP-N8-04",
    routeName: "Naga -> Liloan National Highway",
    pickup: "Naga City - Cebu South Road (N8)",
    destination: "Liloan",
    baseFare: 52
  },
  {
    key: "bus:BUS-CEB-12",
    mode: "bus",
    routeCode: "BUS-CEB-12",
    routeName: "Cebu South -> Carcar",
    pickup: "Cebu South Bus Terminal (N. Bacalso Ave)",
    destination: "Carcar City",
    baseFare: 180
  },
  {
    key: "bus:BUS-CEB-21",
    mode: "bus",
    routeCode: "BUS-CEB-21",
    routeName: "Cebu North -> Danao",
    pickup: "Cebu North Bus Terminal (SM City Cebu)",
    destination: "Danao City",
    baseFare: 165
  },
  {
    key: "bus:BUS-CEB-72",
    mode: "bus",
    routeCode: "BUS-CEB-72",
    routeName: "Consolacion -> IT Park",
    pickup: "Consolacion - Cebu North Road (N810)",
    destination: "IT Park, Cebu City",
    baseFare: 95
  },
  {
    key: "bus:BUS-CEB-34",
    mode: "bus",
    routeCode: "BUS-CEB-34",
    routeName: "South Corridor -> Oslob",
    pickup: "Cebu South Bus Terminal (N. Bacalso Ave)",
    destination: "Oslob",
    baseFare: 250
  },
  {
    key: "bus:BUS-CEB-48",
    mode: "bus",
    routeCode: "BUS-CEB-48",
    routeName: "Southwest Corridor -> Moalboal",
    pickup: "Cebu South Bus Terminal (N. Bacalso Ave)",
    destination: "Moalboal",
    baseFare: 230
  },
  {
    key: "bus:BUS-CEB-55",
    mode: "bus",
    routeCode: "BUS-CEB-55",
    routeName: "Cebu North -> Bogo",
    pickup: "Cebu North Bus Terminal (SM City Cebu)",
    destination: "Bogo City",
    baseFare: 205
  },
  {
    key: "bus:BUS-CEB-61",
    mode: "bus",
    routeCode: "BUS-CEB-61",
    routeName: "Bogo -> San Remigio",
    pickup: "Bogo City - National Road (N810)",
    destination: "San Remigio",
    baseFare: 120
  }
];

function normalizeSearchText(value) {
  return (value || "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSearchText(value) {
  const normalized = normalizeSearchText(value);
  return normalized.length === 0 ? [] : normalized.split(" ");
}

function levenshteinDistance(a, b) {
  const left = normalizeSearchText(a);
  const right = normalizeSearchText(b);
  if (!left) return right.length;
  if (!right) return left.length;
  const matrix = Array.from({ length: left.length + 1 }, () => new Array(right.length + 1).fill(0));
  for (let row = 0; row <= left.length; row += 1) matrix[row][0] = row;
  for (let col = 0; col <= right.length; col += 1) matrix[0][col] = col;
  for (let row = 1; row <= left.length; row += 1) {
    for (let col = 1; col <= right.length; col += 1) {
      const cost = left[row - 1] === right[col - 1] ? 0 : 1;
      matrix[row][col] = Math.min(
        matrix[row - 1][col] + 1,
        matrix[row][col - 1] + 1,
        matrix[row - 1][col - 1] + cost
      );
    }
  }
  return matrix[left.length][right.length];
}

function getFallbackSearchDatabase() {
  return {
    destinations: destinationAreasCebu.map((name, index) => ({
      id: `dest-${index + 1}`,
      name,
      city: "Cebu",
      aliases: []
    })),
    pickups: pickupAreasNationalRoad.map((name, index) => ({
      id: `pickup-${index + 1}`,
      name,
      corridor: "National Road",
      aliases: []
    })),
    routes: routeCatalog.map((route) => ({
      routeCode: route.routeCode,
      routeName: route.routeName,
      mode: route.mode,
      pickup: route.pickup,
      destination: route.destination,
      keywords: []
    }))
  };
}

function buildSearchIndex(database) {
  const routeItems = (database.routes || []).map((route) => ({
    type: "route",
    key: route.routeCode,
    routeCode: route.routeCode,
    routeName: route.routeName,
    mode: route.mode,
    pickup: route.pickup,
    destination: route.destination,
    label: `${route.routeCode} - ${route.routeName}`,
    subtitle: `${modeLabel(route.mode)} | ${route.pickup} -> ${route.destination}`,
    searchText: normalizeSearchText([
      route.routeCode,
      route.routeName,
      route.pickup,
      route.destination,
      ...(route.keywords || [])
    ].join(" "))
  }));

  const destinationItems = (database.destinations || []).map((destination) => ({
    type: "destination",
    key: destination.id,
    destination: destination.name,
    label: destination.name,
    subtitle: `Destination | ${destination.city || "Cebu"}`,
    searchText: normalizeSearchText([
      destination.name,
      destination.city,
      ...(destination.aliases || [])
    ].join(" "))
  }));

  const pickupItems = (database.pickups || []).map((pickup) => ({
    type: "pickup",
    key: pickup.id,
    pickup: pickup.name,
    label: pickup.name,
    subtitle: `Pickup | ${pickup.corridor || "National Road"}`,
    searchText: normalizeSearchText([
      pickup.name,
      pickup.corridor,
      ...(pickup.aliases || [])
    ].join(" "))
  }));

  return [...routeItems, ...destinationItems, ...pickupItems];
}

function scoreSearchItem(item, queryTokens, normalizedQuery) {
  if (!normalizedQuery) return 0;
  let score = 0;
  if (item.searchText.includes(normalizedQuery)) {
    score += 120;
    score += Math.max(0, 20 - item.searchText.indexOf(normalizedQuery));
  }
  const itemTokens = item.searchText.split(" ");
  queryTokens.forEach((token) => {
    if (itemTokens.some((itemToken) => itemToken.startsWith(token))) score += 22;
    else if (item.searchText.includes(token)) score += 12;
  });
  if (item.type === "route" && item.routeCode && normalizeSearchText(item.routeCode).includes(normalizedQuery)) score += 25;
  if (item.type === "destination" && item.destination && normalizeSearchText(item.destination).includes(normalizedQuery)) score += 15;
  return score;
}

function getClosestSimilarSuggestions(normalizedQuery) {
  return searchIndex
    .map((item) => {
      const candidates = [item.label, item.subtitle, item.searchText];
      const bestDistance = Math.min(...candidates.map((candidate) => levenshteinDistance(normalizedQuery, candidate)));
      return { item, bestDistance };
    })
    .sort((left, right) => left.bestDistance - right.bestDistance)
    .slice(0, 6)
    .filter((entry) => entry.bestDistance <= Math.max(3, Math.floor(normalizedQuery.length * 0.45)))
    .map((entry) => entry.item);
}

function getSearchSuggestions(query) {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return [];
  const tokens = tokenizeSearchText(normalizedQuery);
  const scored = searchIndex
    .map((item) => ({ item, score: scoreSearchItem(item, tokens, normalizedQuery) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 8)
    .map((entry) => entry.item);

  if (scored.length > 0) return scored;
  return getClosestSimilarSuggestions(normalizedQuery);
}

function resolveRouteCodesForSuggestion(item) {
  if (!item) return [];
  if (item.type === "route") return [item.routeCode];
  if (item.type === "destination") {
    return routeCatalog
      .filter((route) => normalizeSearchText(route.destination) === normalizeSearchText(item.destination))
      .map((route) => route.routeCode);
  }
  if (item.type === "pickup") {
    return routeCatalog
      .filter((route) => normalizeSearchText(route.pickup) === normalizeSearchText(item.pickup))
      .map((route) => route.routeCode);
  }
  return [];
}

function resolveRouteCodesForSuggestions(items) {
  const routeCodes = new Set();
  items.forEach((item) => {
    resolveRouteCodesForSuggestion(item).forEach((routeCode) => routeCodes.add(routeCode));
  });
  return Array.from(routeCodes);
}

function setSearchFeedback(message = "") {
  if (!searchFeedbackElement) return;
  searchFeedbackElement.textContent = message;
  searchFeedbackElement.classList.toggle("hidden", message.length === 0);
}

function renderSearchSuggestionsDropdown() {
  if (!searchSuggestionsElement) return;
  searchSuggestionsElement.innerHTML = "";
  if (searchSuggestionResults.length === 0) {
    searchSuggestionsElement.classList.add("hidden");
    searchAutocompleteWrapElement.classList.remove("open");
    return;
  }

  searchSuggestionResults.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-suggestion-btn";
    button.classList.toggle("active", index === activeSearchSuggestionIndex);
    button.innerHTML = `
      <div class="search-suggestion-main">${item.label}</div>
      <div class="search-suggestion-sub">${item.subtitle}</div>
    `;
    button.addEventListener("click", () => {
      selectSearchSuggestion(item);
    });
    searchSuggestionsElement.appendChild(button);
  });
  searchSuggestionsElement.classList.remove("hidden");
  searchAutocompleteWrapElement.classList.add("open");
}

function hideSearchSuggestionsDropdown() {
  searchSuggestionResults = [];
  activeSearchSuggestionIndex = -1;
  if (searchSuggestionsElement) {
    searchSuggestionsElement.classList.add("hidden");
    searchSuggestionsElement.innerHTML = "";
  }
  searchAutocompleteWrapElement.classList.remove("open");
}

function selectSearchSuggestion(item) {
  selectedSearchSuggestion = item;
  searchInput.value = item.label;
  searchSuggestedRouteCodes = resolveRouteCodesForSuggestion(item);
  setSearchFeedback("");
  hideSearchSuggestionsDropdown();
  applyFilters();
}

function handleSearchInput() {
  const query = searchInput.value.trim();
  selectedSearchSuggestion = null;
  if (!query) {
    searchSuggestedRouteCodes = [];
    hideSearchSuggestionsDropdown();
    setSearchFeedback("");
    applyFilters();
    return;
  }

  searchSuggestionResults = getSearchSuggestions(query);
  activeSearchSuggestionIndex = searchSuggestionResults.length > 0 ? 0 : -1;
  searchSuggestedRouteCodes = resolveRouteCodesForSuggestions(searchSuggestionResults);
  renderSearchSuggestionsDropdown();
  if (searchSuggestionResults.length === 0) {
    setSearchFeedback("No Cebu route/destination found in database.");
  } else {
    setSearchFeedback("");
  }
  applyFilters();
}

function handleSearchKeyDown(event) {
  if (searchSuggestionResults.length === 0) return;
  if (event.key === "ArrowDown") {
    event.preventDefault();
    activeSearchSuggestionIndex = (activeSearchSuggestionIndex + 1) % searchSuggestionResults.length;
    renderSearchSuggestionsDropdown();
    return;
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeSearchSuggestionIndex = activeSearchSuggestionIndex <= 0
      ? searchSuggestionResults.length - 1
      : activeSearchSuggestionIndex - 1;
    renderSearchSuggestionsDropdown();
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    if (activeSearchSuggestionIndex >= 0) {
      selectSearchSuggestion(searchSuggestionResults[activeSearchSuggestionIndex]);
    }
    return;
  }
  if (event.key === "Escape") {
    hideSearchSuggestionsDropdown();
    return;
  }
}

async function loadSearchDatabase() {
  try {
    const response = await fetch("data/cebu-search-db.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Search DB fetch failed (${response.status})`);
    cebuSearchDatabase = await response.json();
  } catch (error) {
    cebuSearchDatabase = getFallbackSearchDatabase();
    setSearchFeedback("Search database fallback loaded.");
  }
  searchIndex = buildSearchIndex(cebuSearchDatabase);
}

let vehicles = [
  {
    tripId: "TRP-2501",
    routeCode: "JEEP-N8-01",
    routeName: "Fuente -> Mandaue Corridor",
    plateNo: "GAB-1021",
    vehicleType: "jeep",
    status: "fresh",
    etaMinutes: 5,
    etaConfidence: "High",
    lat: 10.3072,
    lng: 123.8915
  },
  {
    tripId: "TRP-2502",
    routeCode: "JEEP-N8-01",
    routeName: "Fuente -> Mandaue Corridor",
    plateNo: "GAB-2240",
    vehicleType: "jeep",
    status: "fresh",
    etaMinutes: 7,
    etaConfidence: "High",
    lat: 10.3196,
    lng: 123.9142
  },
  {
    tripId: "TRP-2503",
    routeCode: "JEEP-N8-02",
    routeName: "Talisay -> Naga South Corridor",
    plateNo: "HKA-4120",
    vehicleType: "jeep",
    status: "fresh",
    etaMinutes: 6,
    etaConfidence: "High",
    lat: 10.2415,
    lng: 123.8486
  },
  {
    tripId: "TRP-2504",
    routeCode: "JEEP-N8-03",
    routeName: "Consolacion -> Danao North Corridor",
    plateNo: "HKA-8472",
    vehicleType: "jeep",
    status: "degraded",
    etaMinutes: 10,
    etaConfidence: "Medium",
    lat: 10.3741,
    lng: 123.9535
  },
  {
    tripId: "TRP-2505",
    routeCode: "BUS-CEB-12",
    routeName: "Cebu South -> Carcar",
    plateNo: "DGT-5520",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 12,
    etaConfidence: "High",
    lat: 10.1962,
    lng: 123.7531
  },
  {
    tripId: "TRP-2506",
    routeCode: "BUS-CEB-12",
    routeName: "Cebu South -> Carcar",
    plateNo: "DGT-6121",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 14,
    etaConfidence: "High",
    lat: 10.1208,
    lng: 123.6506
  },
  {
    tripId: "TRP-2507",
    routeCode: "BUS-CEB-21",
    routeName: "Cebu North -> Danao",
    plateNo: "NVB-1004",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 9,
    etaConfidence: "High",
    lat: 10.4711,
    lng: 123.9874
  },
  {
    tripId: "TRP-2508",
    routeCode: "BUS-CEB-21",
    routeName: "Cebu North -> Danao",
    plateNo: "NVB-2042",
    vehicleType: "bus",
    status: "degraded",
    etaMinutes: 13,
    etaConfidence: "Medium",
    lat: 10.5462,
    lng: 124.0243
  },
  {
    tripId: "TRP-2516",
    routeCode: "BUS-CEB-72",
    routeName: "Consolacion -> IT Park",
    plateNo: "NVB-7211",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 8,
    etaConfidence: "High",
    lat: 10.3651,
    lng: 123.9484
  },
  {
    tripId: "TRP-2517",
    routeCode: "BUS-CEB-72",
    routeName: "Consolacion -> IT Park",
    plateNo: "NVB-7224",
    vehicleType: "bus",
    status: "degraded",
    etaMinutes: 11,
    etaConfidence: "Medium",
    lat: 10.3342,
    lng: 123.9306
  },
  {
    tripId: "TRP-2509",
    routeCode: "BUS-CEB-34",
    routeName: "South Corridor -> Oslob",
    plateNo: "CER-7730",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 18,
    etaConfidence: "High",
    lat: 9.8868,
    lng: 123.6118
  },
  {
    tripId: "TRP-2510",
    routeCode: "BUS-CEB-34",
    routeName: "South Corridor -> Oslob",
    plateNo: "CER-7761",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 22,
    etaConfidence: "High",
    lat: 9.7011,
    lng: 123.5033
  },
  {
    tripId: "TRP-2511",
    routeCode: "BUS-CEB-48",
    routeName: "Southwest Corridor -> Moalboal",
    plateNo: "CER-8802",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 20,
    etaConfidence: "High",
    lat: 10.0441,
    lng: 123.4896
  },
  {
    tripId: "TRP-2512",
    routeCode: "BUS-CEB-48",
    routeName: "Southwest Corridor -> Moalboal",
    plateNo: "CER-8835",
    vehicleType: "bus",
    status: "degraded",
    etaMinutes: 26,
    etaConfidence: "Medium",
    lat: 9.9475,
    lng: 123.4014
  },
  {
    tripId: "TRP-2513",
    routeCode: "BUS-CEB-55",
    routeName: "Cebu North -> Bogo",
    plateNo: "NVB-5510",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 17,
    etaConfidence: "High",
    lat: 10.8624,
    lng: 124.0051
  },
  {
    tripId: "TRP-2514",
    routeCode: "BUS-CEB-55",
    routeName: "Cebu North -> Bogo",
    plateNo: "NVB-5532",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 19,
    etaConfidence: "High",
    lat: 11.0344,
    lng: 124.0102
  },
  {
    tripId: "TRP-2515",
    routeCode: "BUS-CEB-61",
    routeName: "Bogo -> San Remigio",
    plateNo: "REM-6101",
    vehicleType: "bus",
    status: "fresh",
    etaMinutes: 16,
    etaConfidence: "High",
    lat: 11.0704,
    lng: 123.9656
  }
];

function expandModernJeepDemoFleet() {
  const targetJeepCount = 100;
  const currentJeepCount = vehicles.filter((vehicle) => vehicle.vehicleType === "jeep").length;
  const missing = Math.max(0, targetJeepCount - currentJeepCount);
  if (missing === 0) return;

  const nagaLiloanRoute = {
    routeCode: "JEEP-N8-04",
    routeName: "Naga -> Liloan National Highway",
    centerLat: 10.313,
    centerLng: 123.912
  };
  const jeepRoutes = [
    { routeCode: "JEEP-N8-01", routeName: "Fuente -> Mandaue Corridor", centerLat: 10.314, centerLng: 123.902 },
    { routeCode: "JEEP-N8-02", routeName: "Talisay -> Naga South Corridor", centerLat: 10.223, centerLng: 123.812 },
    { routeCode: "JEEP-N8-03", routeName: "Consolacion -> Danao North Corridor", centerLat: 10.436, centerLng: 123.986 },
    nagaLiloanRoute
  ];
  const majorityRouteSequence = [
    nagaLiloanRoute,
    nagaLiloanRoute,
    nagaLiloanRoute,
    nagaLiloanRoute,
    nagaLiloanRoute,
    nagaLiloanRoute,
    nagaLiloanRoute,
    jeepRoutes[0],
    jeepRoutes[1],
    jeepRoutes[2]
  ];

  for (let index = 0; index < missing; index += 1) {
    const route = majorityRouteSequence[index % majorityRouteSequence.length];
    const tripNumber = 2601 + index;
    const latJitter = ((index % 5) - 2) * 0.0042;
    const lngJitter = ((index % 7) - 3) * 0.0034;
    vehicles.push({
      tripId: `TRP-${tripNumber}`,
      routeCode: route.routeCode,
      routeName: route.routeName,
      plateNo: `JEP-${tripNumber.toString().slice(-4)}`,
      vehicleType: "jeep",
      status: index % 4 === 0 ? "degraded" : "fresh",
      etaMinutes: 4 + (index % 9),
      etaConfidence: index % 4 === 0 ? "Medium" : "High",
      headingDeg: (35 + index * 17) % 360,
      lat: Number((route.centerLat + latJitter).toFixed(6)),
      lng: Number((route.centerLng + lngJitter).toFixed(6))
    });
  }
}

expandModernJeepDemoFleet();

function expandBusDemoFleet() {
  const targetBusCount = 30;
  const currentBusCount = vehicles.filter((vehicle) => vehicle.vehicleType === "bus").length;
  const missing = Math.max(0, targetBusCount - currentBusCount);
  if (missing === 0) return;

  const busRoutes = [
    { routeCode: "BUS-CEB-12", routeName: "Cebu South -> Carcar", centerLat: 10.1962, centerLng: 123.7531 },
    { routeCode: "BUS-CEB-21", routeName: "Cebu North -> Danao", centerLat: 10.4711, centerLng: 123.9874 },
    { routeCode: "BUS-CEB-72", routeName: "Consolacion -> IT Park", centerLat: 10.3512, centerLng: 123.9448 },
    { routeCode: "BUS-CEB-34", routeName: "South Corridor -> Oslob", centerLat: 9.8868, centerLng: 123.6118 },
    { routeCode: "BUS-CEB-48", routeName: "Southwest Corridor -> Moalboal", centerLat: 10.0441, centerLng: 123.4896 },
    { routeCode: "BUS-CEB-55", routeName: "Cebu North -> Bogo", centerLat: 10.8624, centerLng: 124.0051 },
    { routeCode: "BUS-CEB-61", routeName: "Bogo -> San Remigio", centerLat: 11.0704, centerLng: 123.9656 }
  ];

  for (let index = 0; index < missing; index += 1) {
    const route = busRoutes[index % busRoutes.length];
    const tripNumber = 3201 + index;
    const latJitter = ((index % 6) - 3) * 0.0036;
    const lngJitter = ((index % 8) - 4) * 0.003;
    vehicles.push({
      tripId: `TRP-${tripNumber}`,
      routeCode: route.routeCode,
      routeName: route.routeName,
      plateNo: `BUS-${tripNumber.toString().slice(-4)}`,
      vehicleType: "bus",
      status: index % 5 === 0 ? "degraded" : "fresh",
      etaMinutes: 6 + (index % 14),
      etaConfidence: index % 5 === 0 ? "Medium" : "High",
      headingDeg: (20 + index * 14) % 360,
      lat: Number((route.centerLat + latJitter).toFixed(6)),
      lng: Number((route.centerLng + lngJitter).toFixed(6))
    });
  }
}

expandBusDemoFleet();

const BUS_SEAT_CAPACITY = 41;

function getAllBusSeatCodes() {
  const seats = ["F1"];
  for (let row = 1; row <= 10; row += 1) {
    seats.push(`${row}A`, `${row}B`, `${row}C`, `${row}D`);
  }
  return seats;
}

const demoAllBusSeatCodes = getAllBusSeatCodes();

function createBusSeatSeed(count, offset = 0, step = 1) {
  const safeCount = clamp(count, 0, demoAllBusSeatCodes.length);
  const total = demoAllBusSeatCodes.length;
  const used = new Set();
  const seeded = [];
  let cursor = offset;
  while (seeded.length < safeCount) {
    const index = ((cursor % total) + total) % total;
    const seat = demoAllBusSeatCodes[index];
    if (!used.has(seat)) {
      used.add(seat);
      seeded.push(seat);
    }
    cursor += step;
  }
  return seeded;
}

const demoBusSeatSeedConfig = {
  "BUS-CEB-12": { count: 19, offset: 1, step: 3 },
  "BUS-CEB-21": { count: 31, offset: 4, step: 5 },
  "BUS-CEB-34": { count: 25, offset: 2, step: 7 },
  "BUS-CEB-48": { count: 14, offset: 6, step: 3 },
  "BUS-CEB-55": { count: 34, offset: 3, step: 4 },
  "BUS-CEB-61": { count: 11, offset: 5, step: 6 }
};

const demoBusBookedSeatsByRouteCode = Object.fromEntries(
  Object.entries(demoBusSeatSeedConfig).map(([routeCode, cfg]) => [
    routeCode,
    createBusSeatSeed(cfg.count, cfg.offset, cfg.step)
  ])
);

const jeepLoadCycle = ["available", "nearly_full", "standing_only", "available", "nearly_full"];

function initializeDemoVehicleOccupancy() {
  let jeepIndex = 0;
  vehicles = vehicles.map((vehicle) => {
    if (vehicle.vehicleType === "bus") {
      const seededSeats = demoBusBookedSeatsByRouteCode[vehicle.routeCode] ?? createBusSeatSeed(16, 0, 3);
      const digit = Number(vehicle.tripId.replace(/\D/g, "").slice(-1) || "0");
      const jitter = (digit % 3) - 1;
      const seatsTaken = clamp(seededSeats.length + jitter, 5, BUS_SEAT_CAPACITY - 1);
      return {
        ...vehicle,
        seatCapacity: BUS_SEAT_CAPACITY,
        seatsTaken
      };
    }

    const loadState = vehicle.loadState || jeepLoadCycle[jeepIndex % jeepLoadCycle.length];
    jeepIndex += 1;
    return {
      ...vehicle,
      loadState
    };
  });
}

initializeDemoVehicleOccupancy();

let bookingMode = "";
let selectedRouteKey = "";
let selectedVehicleTripId = "";
const selectedSeats = new Set();
const bookedSeatMap = new Map();
let selectedTripId = "";

const tripHistory = [
  {
    id: "TRIP-DEMO-3001",
    transactionId: "TXN-301122",
    routeCode: "BUS-CEB-12",
    pickup: "Cebu South Bus Terminal (N. Bacalso Ave)",
    destination: "Carcar City",
    mode: "bus",
    seats: ["4A"],
    paymentType: "digital",
    paymentNote: "Linked to GCash",
    fare: 180,
    status: "upcoming",
    gpsRidingDetected: false,
    bookedAt: "Mar 05, 2026, 08:30 AM"
  },
  {
    id: "TRIP-DEMO-3002",
    transactionId: "TXN-301123",
    routeCode: "BUS-CEB-21",
    pickup: "Cebu North Bus Terminal (SM City Cebu)",
    destination: "Danao City",
    mode: "bus",
    seats: ["2B"],
    paymentType: "cash",
    paymentNote: "Payment to bus conductor",
    fare: 165,
    status: "ongoing",
    gpsRidingDetected: true,
    bookedAt: "Mar 06, 2026, 06:10 AM"
  },
  {
    id: "TRIP-DEMO-3003",
    transactionId: "TXN-301124",
    routeCode: "JEEP-N8-01",
    pickup: "Cebu City - Fuente Osmena (N8)",
    destination: "Mandaue City",
    mode: "jeep",
    seats: ["L2"],
    paymentType: "cash",
    paymentNote: "Payment to bus conductor",
    fare: 35,
    status: "completed",
    gpsRidingDetected: true,
    bookedAt: "Mar 03, 2026, 07:40 AM"
  }
];

const transactionHistory = [
  { title: "BUS-CEB-05", subtitle: "PHP 170 | digital | paid", amount: 170 },
  { title: "JEEP-ITP-01", subtitle: "PHP 35 | cash | paid", amount: 35 }
];

let liveMap = null;
let trackingPopupMap = null;
let fullMap = null;
let seatRouteMap = null;
let seatRoutePolyline = null;
let seatRouteStartMarker = null;
let seatRouteEndMarker = null;
let ticketLiveMap = null;
let ticketBusMarker = null;
let ticketUserMarker = null;
let ticketGuideLine = null;
let homeActiveBusMarker = null;
let homeActiveUserMarker = null;
let homeActiveGuideLine = null;
let homeActiveRouteLine = null;
let tripDetailRouteMap = null;
let tripDetailRouteLine = null;
let tripDetailRouteStart = null;
let tripDetailRouteEnd = null;
let liveMapUserMarker = null;
let liveMapUserHalo = null;
let trackingPopupUserMarker = null;
let trackingPopupUserHalo = null;
let fullMapUserMarker = null;
let fullMapUserHalo = null;
const vehicleMarkers = new Map();
const trailPolylines = new Map();
const vehicleTrails = new Map();
const trackingPopupMarkers = new Map();
const trackingPopupTrailPolylines = new Map();
const trackingPopupVehicleTrails = new Map();
const fullMapMarkers = new Map();
const fullMapVehicleMarkers = new Map();
let selectedMapPlace = "";
let mapSelectionMode = "destination";
let selectedMapPickupPoint = null;
let mapPickupPinMarker = null;
let fullMapLastCenter = null;
let mapOverlayOpen = false;
let mapOverlayReturnPage = "home";
let selectedWallet = "";
let pendingDigitalBooking = null;
let currentTheme = "light";
let trackingCategory = "bus";
let seatQuickBooking = false;
let trackingHighlightedRouteLine = null;
let trackingHeadingMarker = null;
let trackingActiveRideRouteLine = null;
let trackingActiveRideBusMarker = null;
let trackingActiveRideUserMarker = null;
let heroCollapseCurrent = 0;
let heroCollapseTarget = 0;
let heroCollapseRaf = null;
let homeMapParallaxCurrent = 0;
let homeMapParallaxTarget = 0;
let homeMapParallaxRaf = null;
let homeIslandObserver = null;
let trackingAnimationRaf = null;
let trackingAnimationLastTs = 0;
let trackingLastMapRenderTs = 0;
let trackingLastListRenderTs = 0;
const APP_BUILD_ID = "20260309-02";
const cebuBounds = [
  [9.35, 123.15],
  [11.25, 124.35]
];
const DEMO_USER_LOCATION = Object.freeze({
  name: "SM Consolacion - Cebu North Road (N810)",
  lat: 10.3764,
  lng: 123.9571
});
const demoTicketUserLocation = {
  name: DEMO_USER_LOCATION.name,
  lat: DEMO_USER_LOCATION.lat,
  lng: DEMO_USER_LOCATION.lng
};

const mapDestinations = [
  { name: "Cebu City", lat: 10.3157, lng: 123.8854 },
  { name: "IT Park, Cebu City", lat: 10.3308, lng: 123.9066 },
  { name: "SM Consolacion - Cebu North Road (N810)", lat: 10.3764, lng: 123.9571 },
  { name: "Mandaue City", lat: 10.3231, lng: 123.9410 },
  { name: "Lapu-Lapu City", lat: 10.3103, lng: 123.9494 },
  { name: "Talisay City", lat: 10.2447, lng: 123.8494 },
  { name: "Naga City", lat: 10.2088, lng: 123.7580 },
  { name: "Carcar City", lat: 10.1073, lng: 123.6407 },
  { name: "Argao", lat: 9.8790, lng: 123.5954 },
  { name: "Dalaguete", lat: 9.7616, lng: 123.5353 },
  { name: "Oslob", lat: 9.5213, lng: 123.4314 },
  { name: "Danao City", lat: 10.5333, lng: 124.0272 },
  { name: "Bogo City", lat: 11.0519, lng: 124.0058 },
  { name: "Toledo City", lat: 10.3775, lng: 123.6389 },
  { name: "Moalboal", lat: 9.9462, lng: 123.3986 }
];

const pickupMapPoints = [
  { name: "Cebu South Bus Terminal (N. Bacalso Ave)", lat: 10.2965, lng: 123.8854 },
  { name: "Cebu North Bus Terminal (SM City Cebu)", lat: 10.3168, lng: 123.9171 },
  { name: "Cebu City - Fuente Osmena (N8)", lat: 10.3157, lng: 123.8854 },
  { name: "Mandaue - M.C. Briones (N8)", lat: 10.3231, lng: 123.9410 },
  { name: "Talisay City - Cebu South Road (N8)", lat: 10.2447, lng: 123.8494 },
  { name: "Minglanilla - Cebu South Road (N8)", lat: 10.2440, lng: 123.7960 },
  { name: "Naga City - Cebu South Road (N8)", lat: 10.2088, lng: 123.7580 },
  { name: "Carcar City Circle (N8/N83)", lat: 10.1073, lng: 123.6407 },
  { name: "Sibonga - Cebu South Road (N8)", lat: 10.0254, lng: 123.6071 },
  { name: "Argao - Cebu South Road (N8)", lat: 9.8790, lng: 123.5954 },
  { name: "Dalaguete - Cebu South Road (N8)", lat: 9.7616, lng: 123.5353 },
  { name: "Oslob - Cebu South Road (N8)", lat: 9.5213, lng: 123.4314 },
  { name: "Consolacion - Cebu North Road (N810)", lat: 10.3764, lng: 123.9571 },
  { name: "Danao City - National Road (N8/N810)", lat: 10.5333, lng: 124.0272 },
  { name: "Bogo City - National Road (N810)", lat: 11.0519, lng: 124.0058 }
];

const southNationalHighwayPath = [
  [10.2965, 123.8854], // Cebu South Bus Terminal
  [10.2447, 123.8494], // Talisay
  [10.2440, 123.7960], // Minglanilla
  [10.2088, 123.7580], // Naga
  [10.1073, 123.6407], // Carcar
  [10.0254, 123.6071], // Sibonga
  [9.8790, 123.5954], // Argao
  [9.7616, 123.5353], // Dalaguete
  [9.5213, 123.4314] // Oslob
];

const northNationalHighwayPath = [
  [10.3168, 123.9171], // Cebu North Bus Terminal
  [10.3764, 123.9571], // Consolacion
  [10.4370, 123.9720],
  [10.5333, 124.0272], // Danao
  [10.7376, 124.0211],
  [10.9198, 124.0085],
  [11.0519, 124.0058], // Bogo
  [11.0842, 123.9921],
  [11.1248, 123.9514],
  [11.1798, 123.8850] // San Remigio
];

const westNationalHighwayPath = [
  [10.2965, 123.8854], // Cebu South Bus Terminal
  [10.2447, 123.8494],
  [10.2088, 123.7580],
  [10.1073, 123.6407], // Carcar
  [10.0568, 123.5719], // Barili corridor
  [9.9997, 123.5038], // Ronda corridor
  [9.9462, 123.3986] // Moalboal
];

const routePathByCode = {
  "JEEP-N8-01": [
    [10.3157, 123.8854], // Fuente (N8)
    [10.3231, 123.9410] // Mandaue
  ],
  "JEEP-N8-02": [
    [10.2447, 123.8494], // Talisay (N8)
    [10.2088, 123.7580] // Naga
  ],
  "JEEP-N8-03": [
    [10.3764, 123.9571], // Consolacion
    [10.5333, 124.0272] // Danao
  ],
  "JEEP-N8-04": [
    [10.2088, 123.7580], // Naga (N8)
    [10.2440, 123.7960], // Minglanilla (N8)
    [10.2447, 123.8494], // Talisay (N8)
    [10.3157, 123.8854], // Fuente (N8)
    [10.3231, 123.9410], // Mandaue (N8)
    [10.3764, 123.9571], // Consolacion (N810)
    [10.3986, 123.9992] // Liloan (N810)
  ],
  "BUS-CEB-12": southNationalHighwayPath.slice(0, 5), // South terminal to Carcar via N8
  "BUS-CEB-21": northNationalHighwayPath.slice(0, 4), // North terminal to Danao via N810
  "BUS-CEB-72": [
    [10.3764, 123.9571], // SM Consolacion (N810)
    [10.3512, 123.9448], // Mandaue northbound corridor
    [10.3342, 123.9306], // A.C. Cortes / M.C. Briones corridor
    [10.3228, 123.9192], // near Cebu North Bus Terminal area
    [10.3308, 123.9066] // IT Park
  ],
  "BUS-CEB-34": southNationalHighwayPath,
  "BUS-CEB-48": [
    [10.2965, 123.8854], // Cebu South terminal
    [10.2447, 123.8494], // Talisay
    [10.2440, 123.7960], // Minglanilla
    [10.2088, 123.7580], // Naga
    [10.1073, 123.6407], // Carcar
    [9.9462, 123.3986] // Moalboal
  ],
  "BUS-CEB-55": northNationalHighwayPath.slice(0, 7), // North terminal to Bogo
  "BUS-CEB-61": northNationalHighwayPath.slice(6)
};

const resolvedRoutePathByCode = {};

function getRoutePath(routeCode) {
  return resolvedRoutePathByCode[routeCode] || routePathByCode[routeCode] || [];
}

async function fetchRoadSnappedRoute(routeCode) {
  const waypointPath = routePathByCode[routeCode];
  if (!waypointPath || waypointPath.length < 2) return;
  const coordinateSeries = waypointPath
    .map(([lat, lng]) => `${lng},${lat}`)
    .join(";");
  const url = `https://router.project-osrm.org/route/v1/driving/${coordinateSeries}?overview=full&geometries=geojson&steps=false`;
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`route fetch failed (${response.status})`);
    const payload = await response.json();
    const geometry = payload?.routes?.[0]?.geometry?.coordinates;
    if (!Array.isArray(geometry) || geometry.length < 2) throw new Error("missing geometry");
    resolvedRoutePathByCode[routeCode] = geometry.map(([lng, lat]) => [
      Number(lat.toFixed(6)),
      Number(lng.toFixed(6))
    ]);
  } catch (error) {
    // Fallback to waypoint route when routing API is unavailable.
    resolvedRoutePathByCode[routeCode] = waypointPath;
  }
}

async function hydrateRoadSnappedRoutes() {
  const routeCodes = Object.keys(routePathByCode);
  await Promise.all(routeCodes.map((routeCode) => fetchRoadSnappedRoute(routeCode)));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function interpolateRoutePoint(path, progress) {
  if (!path || path.length === 0) return [DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng];
  if (path.length === 1) return path[0];
  const p = clamp(progress, 0, 1);
  const scaled = p * (path.length - 1);
  const index = Math.floor(scaled);
  const nextIndex = Math.min(index + 1, path.length - 1);
  const t = scaled - index;
  const from = path[index];
  const to = path[nextIndex];
  const lat = from[0] + (to[0] - from[0]) * t;
  const lng = from[1] + (to[1] - from[1]) * t;
  return [Number(lat.toFixed(6)), Number(lng.toFixed(6))];
}

function headingFromPoints(from, to) {
  const dy = to[0] - from[0];
  const dx = to[1] - from[1];
  const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
  return (angle + 90 + 360) % 360;
}

function hashSeedFromText(value = "") {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) - hash) + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getVehicleProgressSpeedPerSecond(vehicle) {
  const seed = hashSeedFromText(`${vehicle.tripId}|${vehicle.routeCode}`);
  const noise = (seed % 1000) / 1000;
  const minSpeed = vehicle.vehicleType === "bus" ? 0.0026 : 0.0034;
  const maxSpeed = vehicle.vehicleType === "bus" ? 0.0054 : 0.0076;
  return Number((minSpeed + (maxSpeed - minSpeed) * noise).toFixed(6));
}

function upsertStaticUserMarker(mapRef, markerRef, haloRef) {
  if (!mapRef || !window.L) return;
  const point = [DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng];

  let nextHalo = haloRef;
  if (!nextHalo) {
    nextHalo = window.L.circle(point, {
      radius: 120,
      color: "#2c6ccf",
      weight: 1,
      fillColor: "#4f9fff",
      fillOpacity: 0.14,
      interactive: false
    }).addTo(mapRef);
  } else {
    nextHalo.setLatLng(point);
  }

  let nextMarker = markerRef;
  if (!nextMarker) {
    nextMarker = window.L.circleMarker(point, {
      radius: 7,
      color: "#ffffff",
      weight: 2,
      fillColor: "#1f64d9",
      fillOpacity: 0.98
    }).addTo(mapRef).bindPopup(`Your location: ${DEMO_USER_LOCATION.name}`);
    nextMarker.bindTooltip("SM Consolacion", {
      permanent: true,
      direction: "top",
      offset: [0, -8],
      className: "user-location-tag"
    });
  } else {
    nextMarker.setLatLng(point);
  }
  return { marker: nextMarker, halo: nextHalo };
}

function renderDemoUserLocationMarkers() {
  const homePins = upsertStaticUserMarker(liveMap, liveMapUserMarker, liveMapUserHalo);
  if (homePins) {
    liveMapUserMarker = homePins.marker;
    liveMapUserHalo = homePins.halo;
  }

  const fullPins = upsertStaticUserMarker(fullMap, fullMapUserMarker, fullMapUserHalo);
  if (fullPins) {
    fullMapUserMarker = fullPins.marker;
    fullMapUserHalo = fullPins.halo;
  }

  const hasOngoing = tripHistory.some((trip) => trip.status === "ongoing");
  if (hasOngoing) {
    if (trackingPopupUserMarker && trackingPopupMap) {
      trackingPopupMap.removeLayer(trackingPopupUserMarker);
      trackingPopupUserMarker = null;
    }
    if (trackingPopupUserHalo && trackingPopupMap) {
      trackingPopupMap.removeLayer(trackingPopupUserHalo);
      trackingPopupUserHalo = null;
    }
    return;
  }
  const trackingPins = upsertStaticUserMarker(trackingPopupMap, trackingPopupUserMarker, trackingPopupUserHalo);
  if (trackingPins) {
    trackingPopupUserMarker = trackingPins.marker;
    trackingPopupUserHalo = trackingPins.halo;
  }
}

function placeVehicleOnRoute(vehicle, seedProgress = Math.random()) {
  const path = getRoutePath(vehicle.routeCode);
  if (!path || path.length < 2) return vehicle;
  const progress = clamp(seedProgress, 0, 1);
  const direction = vehicle.routeDirection === -1 ? -1 : 1;
  const currentPoint = interpolateRoutePoint(path, progress);
  const lookAheadProgress = clamp(progress + 0.015 * direction, 0, 1);
  const lookAheadPoint = interpolateRoutePoint(path, lookAheadProgress);
  return {
    ...vehicle,
    routeSpeed: typeof vehicle.routeSpeed === "number"
      ? vehicle.routeSpeed
      : getVehicleProgressSpeedPerSecond(vehicle),
    routeProgress: progress,
    routeDirection: direction,
    lat: currentPoint[0],
    lng: currentPoint[1],
    headingDeg: headingFromPoints(currentPoint, lookAheadPoint)
  };
}

// Initialize demo vehicles on their route corridors only after route definitions are ready.
vehicles = vehicles.map((vehicle) => placeVehicleOnRoute(vehicle));

function initHomeIslandAnimations() {
  const islands = [
    document.querySelector(".home-search-card"),
    homeRideNoticeElement,
    document.getElementById("live-vehicles-section"),
    document.getElementById("commercial-section")
  ].filter(Boolean);

  islands.forEach((element, index) => {
    element.classList.add("island-scroll");
    if (!element.style.getPropertyValue("--island-delay")) {
      element.style.setProperty("--island-delay", `${index * 44}ms`);
    }
  });

  if (!("IntersectionObserver" in window)) {
    islands.forEach((element) => element.classList.add("in-view"));
    return;
  }

  if (!homeIslandObserver) {
    homeIslandObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else if (window.scrollY < 8) {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px"
      }
    );
  }

  islands.forEach((element) => {
    if (element.dataset.islandObserved === "true") return;
    homeIslandObserver.observe(element);
    element.dataset.islandObserved = "true";
  });
}

function setPage(pageKey) {
  currentPageKey = pageKey;
  pageKeys.forEach((key) => {
    const pageElement = key === "home"
      ? pageHome
      : key === "seat"
        ? pageSeat
        : key === "activity"
          ? pageActivity
          : key === "user"
            ? pageUser
            : pageMap;
    const isActive = key === pageKey;
    pageElement.classList.toggle("active", isActive);
    pageElement.classList.toggle("hidden", !isActive);
    // Hard guard: force only one visible page even if a CSS rule regresses.
    if (isActive) {
      pageElement.style.display = key === "home" ? "flex" : "block";
    } else {
      pageElement.style.display = "none";
    }
  });

  navHome.classList.toggle("active", pageKey === "home");
  navActivity.classList.toggle("active", pageKey === "activity");
  navUser.classList.toggle("active", pageKey === "user");
  bottomNav.classList.toggle("hidden", pageKey === "map");
  if (pageKey === "map") {
    if (navIdleTimer) {
      clearTimeout(navIdleTimer);
      navIdleTimer = null;
    }
    bottomNav.classList.remove("is-idle");
  } else {
    scheduleBottomNavIdle();
  }
  if (pageKey !== "map") {
    setTimeout(() => handleBottomNavViewportResize(), 40);
  }

  if (pageKey === "map" && fullMap) {
    setTimeout(() => fullMap.invalidateSize(), 100);
  }
  if (pageKey === "home" && liveMap) {
    setTimeout(() => liveMap.invalidateSize(), 100);
  }
  if (pageKey === "seat") {
    setTimeout(() => {
      if (seatRouteMap) seatRouteMap.invalidateSize();
      renderSeatRouteHighlight();
    }, 100);
  }
  if (pageKey === "home") {
    updateHomeRideNotice();
    initHomeIslandAnimations();
  }
  if (pageKey === "seat" || pageKey === "activity" || pageKey === "user" || pageKey === "map") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  toggleCompactTopbar();
  if (guidedTutorialActive) {
    setTimeout(() => renderGuidedTutorialStep(), 130);
  }
}

function getBottomNavDockFromPointer(clientX) {
  const bounds = getBottomNavDragBounds();
  const dockZone = Math.min(NAV_SIDE_SNAP_ZONE, Math.max(48, Math.floor((bounds.right - bounds.left) * 0.24)));
  if (clientX <= bounds.left + dockZone) return "left";
  if (clientX >= bounds.right - dockZone) return "right";
  return "bottom";
}

function getBottomNavDragBounds() {
  const fallback = {
    left: NAV_DOCK_MARGIN,
    right: window.innerWidth - NAV_DOCK_MARGIN,
    top: NAV_DOCK_MARGIN,
    bottom: window.innerHeight - NAV_DOCK_MARGIN
  };

  if (!appShell || appShell.classList.contains("hidden")) return fallback;
  const rect = appShell.getBoundingClientRect();
  if (!rect || rect.width <= 0 || rect.height <= 0) return fallback;
  const visibleLeft = Math.max(0, rect.left);
  const visibleRight = Math.min(window.innerWidth, rect.right);
  const visibleTop = Math.max(0, rect.top);
  const visibleBottom = Math.min(window.innerHeight, rect.bottom);
  if (visibleRight - visibleLeft < 80 || visibleBottom - visibleTop < 80) return fallback;
  return {
    left: visibleLeft + NAV_DOCK_MARGIN,
    right: visibleRight - NAV_DOCK_MARGIN,
    top: visibleTop + NAV_DOCK_MARGIN,
    bottom: visibleBottom - NAV_DOCK_MARGIN
  };
}

function applyBottomNavLayout(dock = "bottom", left = null, top = null, save = true) {
  if (!bottomNav) return;

  const normalizedDock = dock === "left" || dock === "right" ? dock : "bottom";
  bottomNav.classList.toggle("vertical", normalizedDock !== "bottom");

  const bounds = getBottomNavDragBounds();
  const rect = bottomNav.getBoundingClientRect();
  const width = rect.width || bottomNav.offsetWidth || 236;
  const height = rect.height || bottomNav.offsetHeight || 52;
  const maxLeft = Math.max(bounds.left, bounds.right - width);
  const maxTop = Math.max(bounds.top, bounds.bottom - height);

  let nextLeft = 0;
  let nextTop = 0;

  if (normalizedDock === "left") {
    nextLeft = bounds.left;
    const fallbackTop = navLayoutState.top || (bounds.top + ((bounds.bottom - bounds.top - height) / 2));
    nextTop = clamp(typeof top === "number" ? top : fallbackTop, bounds.top, maxTop);
  } else if (normalizedDock === "right") {
    nextLeft = maxLeft;
    const fallbackTop = navLayoutState.top || (bounds.top + ((bounds.bottom - bounds.top - height) / 2));
    nextTop = clamp(typeof top === "number" ? top : fallbackTop, bounds.top, maxTop);
  } else {
    nextLeft = clamp(bounds.left + ((bounds.right - bounds.left - width) / 2), bounds.left, maxLeft);
    nextTop = maxTop;
  }

  bottomNav.style.left = `${Math.round(nextLeft)}px`;
  bottomNav.style.top = `${Math.round(nextTop)}px`;
  bottomNav.style.right = "auto";
  bottomNav.style.bottom = "auto";
  bottomNav.style.transform = "none";

  navLayoutState = { dock: normalizedDock, left: nextLeft, top: nextTop };
  if (save) localStorage.setItem(NAV_LAYOUT_STORAGE_KEY, JSON.stringify(navLayoutState));
}

function restoreBottomNavLayout() {
  if (!bottomNav) return;
  let stored = null;
  try {
    stored = JSON.parse(localStorage.getItem(NAV_LAYOUT_STORAGE_KEY) || "null");
  } catch (error) {
    stored = null;
  }

  if (!stored || (stored.dock !== "bottom" && stored.dock !== "left" && stored.dock !== "right")) {
    applyBottomNavLayout("bottom", null, null, false);
    return;
  }

  const left = Number.isFinite(stored.left) ? Number(stored.left) : null;
  const top = Number.isFinite(stored.top) ? Number(stored.top) : null;
  if (stored.dock === "bottom") {
    applyBottomNavLayout("bottom", null, null, false);
    return;
  }
  applyBottomNavLayout(stored.dock, left, top, false);
}

function handleBottomNavPointerDown(event) {
  if (!bottomNav) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  const rect = bottomNav.getBoundingClientRect();
  navDragState.active = true;
  navDragState.pointerId = event.pointerId;
  navDragState.startX = event.clientX;
  navDragState.startY = event.clientY;
  navDragState.offsetX = event.clientX - rect.left;
  navDragState.offsetY = event.clientY - rect.top;
  navDragState.moved = false;
  navDragState.suppressClick = false;
  navDragState.hasCapture = false;
  bottomNav.classList.add("dragging");
  bottomNav.classList.remove("is-idle");
}

function handleBottomNavPointerMove(event) {
  if (!bottomNav || !navDragState.active || navDragState.pointerId !== event.pointerId) return;
  const dx = event.clientX - navDragState.startX;
  const dy = event.clientY - navDragState.startY;
  if (!navDragState.moved && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
    navDragState.moved = true;
    if (!navDragState.hasCapture) {
      bottomNav.setPointerCapture?.(event.pointerId);
      navDragState.hasCapture = true;
    }
  }
  if (!navDragState.moved) return;

  event.preventDefault();
  const bounds = getBottomNavDragBounds();
  bottomNav.classList.remove("is-idle");
  const dock = getBottomNavDockFromPointer(event.clientX);
  bottomNav.classList.toggle("vertical", dock !== "bottom");

  const rect = bottomNav.getBoundingClientRect();
  const width = rect.width || bottomNav.offsetWidth || 236;
  const height = rect.height || bottomNav.offsetHeight || 52;
  const maxLeft = Math.max(bounds.left, bounds.right - width);
  const maxTop = Math.max(bounds.top, bounds.bottom - height);
  const offsetX = clamp(navDragState.offsetX, 8, Math.max(8, width - 8));
  const offsetY = clamp(navDragState.offsetY, 8, Math.max(8, height - 8));

  let left = 0;
  let top = 0;
  if (dock === "left") {
    left = bounds.left;
    top = clamp(event.clientY - offsetY, bounds.top, maxTop);
  } else if (dock === "right") {
    left = maxLeft;
    top = clamp(event.clientY - offsetY, bounds.top, maxTop);
  } else {
    left = clamp(bounds.left + ((bounds.right - bounds.left - width) / 2), bounds.left, maxLeft);
    top = maxTop;
  }

  bottomNav.style.left = `${Math.round(left)}px`;
  bottomNav.style.top = `${Math.round(top)}px`;
  bottomNav.style.right = "auto";
  bottomNav.style.bottom = "auto";
  bottomNav.style.transform = "none";
  navLayoutState = { dock, left, top };
}

function handleBottomNavPointerEnd(event) {
  if (!bottomNav || !navDragState.active || navDragState.pointerId !== event.pointerId) return;
  if (navDragState.hasCapture) {
    bottomNav.releasePointerCapture?.(event.pointerId);
  }
  bottomNav.classList.remove("dragging");

  if (navDragState.moved) {
    navDragState.suppressClick = true;
    applyBottomNavLayout(navLayoutState.dock, navLayoutState.left, navLayoutState.top, true);
    setTimeout(() => {
      navDragState.suppressClick = false;
    }, 220);
  }

  navDragState.active = false;
  navDragState.pointerId = null;
  navDragState.hasCapture = false;
  scheduleBottomNavIdle();
}

function handleBottomNavClickCapture(event) {
  if (!navDragState.suppressClick) return;
  event.preventDefault();
  event.stopPropagation();
}

function handleBottomNavViewportResize() {
  if (!bottomNav || bottomNav.classList.contains("hidden")) return;
  applyBottomNavLayout(navLayoutState.dock, navLayoutState.left, navLayoutState.top, false);
  scheduleBottomNavIdle();
}

function setBottomNavIdleState(isIdle) {
  if (!bottomNav || bottomNav.classList.contains("hidden")) return;
  if (navDragState.active) {
    bottomNav.classList.remove("is-idle");
    return;
  }
  bottomNav.classList.toggle("is-idle", isIdle);
}

function scheduleBottomNavIdle() {
  if (navIdleTimer) {
    clearTimeout(navIdleTimer);
    navIdleTimer = null;
  }
  if (!bottomNav || bottomNav.classList.contains("hidden")) return;
  setBottomNavIdleState(false);
  navIdleTimer = setTimeout(() => {
    if (!bottomNav || bottomNav.classList.contains("hidden")) return;
    setBottomNavIdleState(true);
  }, NAV_IDLE_DELAY_MS);
}

function showOnboarding() {
  if (guidedTutorialActive) closeGuidedTutorial(false);
  clearScheduledIntroPromos();
  if (navIdleTimer) {
    clearTimeout(navIdleTimer);
    navIdleTimer = null;
  }
  onboardingScreen.classList.remove("hidden");
  authScreen.classList.add("hidden");
  appShell.classList.add("hidden");
  bottomNav.classList.add("hidden");
  bottomNav.classList.remove("is-idle");
  compactTopbar.classList.remove("interactive");
  heroCollapseCurrent = 0;
  heroCollapseTarget = 0;
  document.documentElement.style.setProperty("--hero-collapse", "0");
  homeMapParallaxCurrent = 0;
  homeMapParallaxTarget = 0;
  applyHomeMapParallax(0);
}

function showAuthScreen() {
  if (guidedTutorialActive) closeGuidedTutorial(false);
  clearScheduledIntroPromos();
  if (navIdleTimer) {
    clearTimeout(navIdleTimer);
    navIdleTimer = null;
  }
  onboardingScreen.classList.add("hidden");
  authScreen.classList.remove("hidden");
  appShell.classList.add("hidden");
  bottomNav.classList.add("hidden");
  bottomNav.classList.remove("is-idle");
  compactTopbar.classList.remove("interactive");
  heroCollapseCurrent = 0;
  heroCollapseTarget = 0;
  document.documentElement.style.setProperty("--hero-collapse", "0");
  homeMapParallaxCurrent = 0;
  homeMapParallaxTarget = 0;
  applyHomeMapParallax(0);
  setAuthMode("signin");
}

function showApp() {
  applyUserNameLabels();
  onboardingScreen.classList.add("hidden");
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  bottomNav.classList.remove("hidden");
  setTimeout(() => applyBottomNavLayout("bottom", null, null, true), 40);
  scheduleBottomNavIdle();
  setPage("home");
  if (liveMap) {
    setTimeout(() => liveMap.invalidateSize(), 120);
  }
  if (!introPromoQueued) {
    introPromoQueued = true;
    if (shouldShowPostSignupTutorial || guidedTutorialActive) {
      deferPromoUntilTutorialEnds = true;
    } else {
      scheduleIntroPromos();
    }
  }
  syncHeroCollapseTarget();
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.body.classList.toggle("dark-theme", currentTheme === "dark");
  localStorage.setItem("bussin_theme", currentTheme);
  if (themeToggleButton) {
    themeToggleButton.textContent = currentTheme === "dark"
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  }
}

function initializeTheme() {
  const storedTheme = localStorage.getItem("bussin_theme");
  applyTheme(storedTheme === "dark" ? "dark" : "light");
}

function applyHeroCollapse(progress) {
  const clamped = Math.max(0, Math.min(1, progress));
  document.documentElement.style.setProperty("--hero-collapse", clamped.toFixed(3));
  const appVisible = !appShell.classList.contains("hidden");
  const inHome = currentPageKey === "home";
  compactTopbar.classList.toggle("interactive", clamped > 0.78 && appVisible && inHome);
}

function applyHomeMapParallax(offsetPx) {
  const clamped = Math.max(0, Math.min(18, offsetPx));
  document.documentElement.style.setProperty("--home-map-parallax", `${clamped.toFixed(2)}px`);
}

function syncHomeMapParallaxTarget() {
  const appVisible = !appShell.classList.contains("hidden");
  const inHome = currentPageKey === "home";
  const scrollTop = Math.max(0, window.scrollY || 0);
  // Subtle delayed map movement on first scroll range.
  homeMapParallaxTarget = appVisible && inHome ? Math.min(18, scrollTop * 0.18) : 0;
  startHomeMapParallaxAnimation();
}

function startHomeMapParallaxAnimation() {
  if (homeMapParallaxRaf) return;
  const animate = () => {
    const diff = homeMapParallaxTarget - homeMapParallaxCurrent;
    if (Math.abs(diff) < 0.15) {
      homeMapParallaxCurrent = homeMapParallaxTarget;
      applyHomeMapParallax(homeMapParallaxCurrent);
      homeMapParallaxRaf = null;
      return;
    }
    homeMapParallaxCurrent += diff * 0.16;
    applyHomeMapParallax(homeMapParallaxCurrent);
    homeMapParallaxRaf = window.requestAnimationFrame(animate);
  };
  homeMapParallaxRaf = window.requestAnimationFrame(animate);
}

function syncHeroCollapseTarget() {
  const appVisible = !appShell.classList.contains("hidden");
  const inHome = currentPageKey === "home";
  const raw = (window.scrollY - 10) / 170;
  heroCollapseTarget = appVisible && inHome ? Math.max(0, Math.min(1, raw)) : 0;
  startHeroCollapseAnimation();
  syncHomeMapParallaxTarget();
}

function startHeroCollapseAnimation() {
  if (heroCollapseRaf) return;
  const animate = () => {
    const diff = heroCollapseTarget - heroCollapseCurrent;
    if (Math.abs(diff) < 0.002) {
      heroCollapseCurrent = heroCollapseTarget;
      applyHeroCollapse(heroCollapseCurrent);
      heroCollapseRaf = null;
      return;
    }

    // Eased interpolation for smooth "liquid" collapse similar to iOS UI motion.
    heroCollapseCurrent += diff * 0.14;
    applyHeroCollapse(heroCollapseCurrent);
    heroCollapseRaf = window.requestAnimationFrame(animate);
  };
  heroCollapseRaf = window.requestAnimationFrame(animate);
}

function toggleCompactTopbar() {
  syncHeroCollapseTarget();
}

function ensureSeatPageReadyForTutorial() {
  if (currentPageKey !== "home") setPage("home");
  if (bookingMode !== "bus") setBookingMode("bus");
  if (!pickupStopElement.value) pickupStopElement.value = "Cebu South Bus Terminal (N. Bacalso Ave)";
  if (!destinationStopElement.value) destinationStopElement.value = "Carcar City";
  updatePlanCTAState();
  if (!selectedRouteKey) findBestRoute();
  if (currentPageKey !== "seat") setPage("seat");
  if (!selectedRouteKey) {
    selectedRouteKey = "bus:BUS-CEB-12";
    selectedRouteSummaryElement.textContent = "BUS-CEB-12 | Cebu South Bus Terminal (N. Bacalso Ave) -> Carcar City | Starts at PHP 180";
    renderSeatGrid();
    updateSeatBookingSummary();
  }
}

function initializeGuidedTutorialUI() {
  if (guidedTutorialRoot) return;
  guidedTutorialRoot = document.createElement("div");
  guidedTutorialRoot.id = "guided-tour";
  guidedTutorialRoot.className = "guided-tour hidden";
  guidedTutorialRoot.innerHTML = `
    <div class="guided-tour-backdrop"></div>
    <div class="guided-tour-highlight hidden"></div>
    <section class="guided-tour-card" role="dialog" aria-modal="true" aria-label="Bussin guided tutorial">
      <p class="guided-tour-tag">How To Book A Bus Ride</p>
      <h3 class="guided-tour-title"></h3>
      <p class="guided-tour-copy"></p>
      <p class="guided-tour-progress"></p>
      <div class="guided-tour-actions">
        <button id="guided-tour-skip" class="secondary-action" type="button">Skip</button>
        <button id="guided-tour-back" class="secondary-action" type="button">Back</button>
        <button id="guided-tour-next" class="primary-action" type="button">Next</button>
      </div>
    </section>
  `;
  document.body.appendChild(guidedTutorialRoot);
  guidedTutorialBackdrop = guidedTutorialRoot.querySelector(".guided-tour-backdrop");
  guidedTutorialHighlight = guidedTutorialRoot.querySelector(".guided-tour-highlight");
  guidedTutorialCard = guidedTutorialRoot.querySelector(".guided-tour-card");
  guidedTutorialTitle = guidedTutorialRoot.querySelector(".guided-tour-title");
  guidedTutorialCopy = guidedTutorialRoot.querySelector(".guided-tour-copy");
  guidedTutorialProgress = guidedTutorialRoot.querySelector(".guided-tour-progress");
  guidedTutorialBack = guidedTutorialRoot.querySelector("#guided-tour-back");
  guidedTutorialNext = guidedTutorialRoot.querySelector("#guided-tour-next");
  guidedTutorialSkip = guidedTutorialRoot.querySelector("#guided-tour-skip");

  guidedTutorialSkip.addEventListener("click", () => closeGuidedTutorial({ markCompleted: true, returnHome: false }));
  guidedTutorialBack.addEventListener("click", () => {
    if (!guidedTutorialActive || tutorialStepIndex === 0) return;
    tutorialStepIndex -= 1;
    renderGuidedTutorialStep();
  });
  guidedTutorialNext.addEventListener("click", () => {
    if (!guidedTutorialActive) return;
    if (tutorialStepIndex >= guidedTutorialSteps.length - 1) {
      closeGuidedTutorial({ markCompleted: true, returnHome: true });
      return;
    }
    tutorialStepIndex += 1;
    renderGuidedTutorialStep();
  });
}

function setGuidedTutorialTarget(target) {
  if (guidedTutorialCurrentTarget === (target || null)) return;
  if (guidedTutorialCurrentTarget && guidedTutorialCurrentTarget !== target) {
    guidedTutorialCurrentTarget.classList.remove("tour-target-active");
  }
  guidedTutorialCurrentTarget = target || null;
  if (guidedTutorialCurrentTarget) {
    guidedTutorialCurrentTarget.classList.add("tour-target-active");
    guidedTutorialCurrentTarget.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  }
}

function positionGuidedTutorialElements(target) {
  if (!guidedTutorialCard || !guidedTutorialHighlight) return;

  const cardWidth = Math.min(340, window.innerWidth - 24);
  guidedTutorialCard.style.width = `${cardWidth}px`;

  if (!target) {
    guidedTutorialRoot?.classList.remove("has-target");
    guidedTutorialHighlight.classList.add("hidden");
    const centeredLeft = clamp((window.innerWidth - cardWidth) / 2, 12, Math.max(12, window.innerWidth - cardWidth - 12));
    guidedTutorialCard.style.left = `${centeredLeft}px`;
    guidedTutorialCard.style.top = `${Math.max(86, window.innerHeight * 0.22)}px`;
    return;
  }

  guidedTutorialRoot?.classList.add("has-target");
  const rect = target.getBoundingClientRect();
  const pad = 8;
  const top = clamp(rect.top - pad, 6, window.innerHeight - 16);
  const left = clamp(rect.left - pad, 6, window.innerWidth - 16);
  const width = clamp(rect.width + (pad * 2), 24, window.innerWidth - 12);
  const height = clamp(rect.height + (pad * 2), 24, window.innerHeight - 12);

  guidedTutorialHighlight.style.top = `${top}px`;
  guidedTutorialHighlight.style.left = `${left}px`;
  guidedTutorialHighlight.style.width = `${width}px`;
  guidedTutorialHighlight.style.height = `${height}px`;
  guidedTutorialHighlight.classList.remove("hidden");

  const cardHeight = guidedTutorialCard.offsetHeight || 200;
  let cardTop = top + height + 14;
  if (cardTop + cardHeight > window.innerHeight - 10) {
    cardTop = Math.max(10, top - cardHeight - 14);
  }
  let cardLeft = left + (width / 2) - (cardWidth / 2);
  cardLeft = clamp(cardLeft, 12, Math.max(12, window.innerWidth - cardWidth - 12));

  guidedTutorialCard.style.left = `${cardLeft}px`;
  guidedTutorialCard.style.top = `${cardTop}px`;
}

function resolveGuidedTutorialTarget(step) {
  if (!step || typeof step.getTarget !== "function") return null;
  const candidate = step.getTarget();
  if (!candidate || !(candidate instanceof Element)) return null;
  if (candidate.offsetParent === null && candidate !== document.activeElement) return null;
  return candidate;
}

function renderGuidedTutorialStep() {
  if (!guidedTutorialActive || !guidedTutorialRoot) return;
  const step = guidedTutorialSteps[tutorialStepIndex];
  if (!step) return;
  if (typeof step.beforeEnter === "function") step.beforeEnter();

  guidedTutorialTitle.textContent = step.title;
  guidedTutorialCopy.textContent = step.copy;
  guidedTutorialProgress.textContent = `Step ${tutorialStepIndex + 1} of ${guidedTutorialSteps.length}`;
  guidedTutorialBack.disabled = tutorialStepIndex === 0;
  guidedTutorialNext.textContent = tutorialStepIndex >= guidedTutorialSteps.length - 1 ? "Finish" : "Next";

  const target = resolveGuidedTutorialTarget(step);
  setGuidedTutorialTarget(target);
  positionGuidedTutorialElements(target);

  // Recompute once again after page animations/layout settle.
  setTimeout(() => {
    if (!guidedTutorialActive) return;
    const refreshedTarget = resolveGuidedTutorialTarget(guidedTutorialSteps[tutorialStepIndex]);
    setGuidedTutorialTarget(refreshedTarget);
    positionGuidedTutorialElements(refreshedTarget);
  }, 180);
}

function handleGuidedTutorialDocumentClick(event) {
  if (!guidedTutorialActive) return;
  if (guidedTutorialCard?.contains(event.target)) return;

  const step = guidedTutorialSteps[tutorialStepIndex];
  const target = guidedTutorialCurrentTarget;
  const clickOnTarget = !!target && (event.target === target || target.contains(event.target));

  if (clickOnTarget) {
    if (step?.advanceOn === "click") {
      const delay = typeof step.advanceDelayMs === "number" ? step.advanceDelayMs : 120;
      setTimeout(() => {
        if (!guidedTutorialActive) return;
        if (typeof step.isComplete === "function" && !step.isComplete()) return;
        if (tutorialStepIndex >= guidedTutorialSteps.length - 1) {
          closeGuidedTutorial({ markCompleted: true, returnHome: true });
        }
        else {
          tutorialStepIndex += 1;
          renderGuidedTutorialStep();
        }
      }, delay);
    }
    return;
  }

  event.preventDefault();
  event.stopPropagation();
}

function handleGuidedTutorialDocumentChange(event) {
  if (!guidedTutorialActive) return;
  const step = guidedTutorialSteps[tutorialStepIndex];
  const target = guidedTutorialCurrentTarget;
  if (!step || step.advanceOn !== "change" || !target) return;
  if (event.target !== target) return;
  if (typeof step.isComplete === "function" && !step.isComplete()) return;

  setTimeout(() => {
    if (!guidedTutorialActive) return;
    if (tutorialStepIndex >= guidedTutorialSteps.length - 1) {
      closeGuidedTutorial({ markCompleted: true, returnHome: true });
    }
    else {
      tutorialStepIndex += 1;
      renderGuidedTutorialStep();
    }
  }, 120);
}

function handleGuidedTutorialViewportChange() {
  if (!guidedTutorialActive) return;
  const step = guidedTutorialSteps[tutorialStepIndex];
  const target = resolveGuidedTutorialTarget(step);
  setGuidedTutorialTarget(target);
  positionGuidedTutorialElements(target);
}

function openTutorial() {
  if (localStorage.getItem("bussin_guided_tutorial_done") === "true") return;
  initializeGuidedTutorialUI();
  deferPromoUntilTutorialEnds = true;
  clearScheduledIntroPromos();
  hidePromoModal();
  quickAdToastElement?.classList.add("hidden");
  tutorialModal?.classList.add("hidden");
  guidedTutorialActive = true;
  tutorialStepIndex = 0;
  guidedTutorialRoot.classList.remove("hidden");
  document.body.classList.add("guided-tour-open");
  document.addEventListener("click", handleGuidedTutorialDocumentClick, true);
  document.addEventListener("change", handleGuidedTutorialDocumentChange, true);
  window.addEventListener("resize", handleGuidedTutorialViewportChange);
  window.addEventListener("scroll", handleGuidedTutorialViewportChange, true);
  renderGuidedTutorialStep();
}

function closeGuidedTutorial(options = { markCompleted: true, returnHome: false }) {
  const normalized = typeof options === "boolean"
    ? { markCompleted: options, returnHome: false }
    : {
      markCompleted: options?.markCompleted !== false,
      returnHome: options?.returnHome === true
    };
  if (guidedTutorialCurrentTarget) {
    guidedTutorialCurrentTarget.classList.remove("tour-target-active");
    guidedTutorialCurrentTarget = null;
  }
  guidedTutorialActive = false;
  document.body.classList.remove("guided-tour-open");
  guidedTutorialRoot?.classList.add("hidden");
  document.removeEventListener("click", handleGuidedTutorialDocumentClick, true);
  document.removeEventListener("change", handleGuidedTutorialDocumentChange, true);
  window.removeEventListener("resize", handleGuidedTutorialViewportChange);
  window.removeEventListener("scroll", handleGuidedTutorialViewportChange, true);
  if (normalized.markCompleted) localStorage.setItem("bussin_guided_tutorial_done", "true");
  if (deferPromoUntilTutorialEnds) {
    deferPromoUntilTutorialEnds = false;
    if (introPromoQueued) scheduleIntroPromos();
  }
  if (normalized.returnHome && !appShell.classList.contains("hidden")) {
    setPage("home");
  }
}

function renderTutorialStep() {
  renderGuidedTutorialStep();
}

function closeTutorial() {
  closeGuidedTutorial({ markCompleted: true, returnHome: false });
}

function showWelcomePopup(isCreate, name) {
  const safeName = name && name.trim().length > 0 ? name.trim() : "Commuter";
  welcomeTitle.textContent = isCreate ? `Welcome, ${safeName}!` : `Welcome back, ${safeName}!`;
  welcomeCopy.textContent = isCreate
    ? "Your account is ready. Let us get your first trip moving."
    : "Great to see you again. Your trip tools are ready.";
  welcomeModal.classList.remove("hidden");
}

function applyUserNameLabels() {
  const storedName = (localStorage.getItem("bussin_name") || "").trim();
  const safeName = storedName.length > 0 ? storedName : "User";
  if (navUser) {
    navUser.setAttribute("aria-label", "Dashboard");
    navUser.setAttribute("title", "Dashboard");
  }
  if (userDashboardTitleElement) {
    userDashboardTitleElement.textContent = `${safeName}'s Dashboard`;
  }
}

function setAuthMode(mode) {
  authMode = mode;
  authSignInButton.classList.toggle("active", mode === "signin");
  authCreateButton.classList.toggle("active", mode === "create");
  authTitleElement.textContent = mode === "signin" ? "Sign In" : "Create Account";
  authSubtitleElement.textContent = mode === "signin"
    ? "Continue using Google or your phone number."
    : "Create your Bussin account with Google or phone number.";
  googleAuthButton.textContent = mode === "signin" ? "Sign in with Google" : "Create account with Google";
  phoneAuthButton.textContent = mode === "signin" ? "Sign in with Phone" : "Create account with Phone";
  authResultElement.textContent = "";
  verifySection.classList.add("hidden");
  verificationCodeInput.value = "";
  pendingAuthProvider = "";
}

function beginVerification(provider) {
  pendingAuthProvider = provider;
  verifySection.classList.remove("hidden");
  verificationCodeInput.value = "";
  authResultElement.textContent = `Verification sent via ${provider}. Use code 000000 for demo.`;
}

function handleGoogleAuth() {
  beginVerification("google");
  verificationCodeInput.value = "000000";
  verifyAndContinue();
}

function handlePhoneAuth() {
  const phone = phoneNumberInput.value.trim();
  beginVerification("phone");
  if (!phone || phone.length < 8) {
    authResultElement.textContent = "No valid phone entered. Continuing in demo mode.";
  }
  verificationCodeInput.value = "000000";
  verifyAndContinue();
}

function verifyAndContinue() {
  if (!pendingAuthProvider) pendingAuthProvider = "demo";

  if (verificationCodeInput.value.trim() !== "000000") {
    authResultElement.textContent = "Invalid verification code. Please try again.";
    return;
  }

  authResultElement.textContent = authMode === "signin"
    ? "Verification successful. Signing in..."
    : "Verification successful. Creating account...";
  const existingName = localStorage.getItem("bussin_name") || "";
  const enteredName = authNameInput.value.trim() || existingName || "Commuter";
  localStorage.setItem("bussin_name", enteredName);
  localStorage.setItem("bussin_auth", "true");
  applyUserNameLabels();
  if (authMode === "create") {
    localStorage.removeItem("bussin_guided_tutorial_done");
  }
  shouldShowPostSignupTutorial = authMode === "create";
  setTimeout(() => {
    showWelcomePopup(authMode === "create", enteredName);
  }, 300);
  // Fallback: if modal transition is blocked in browser, still enter app.
  setTimeout(() => {
    if (!authScreen.classList.contains("hidden")) {
      showApp();
    }
  }, 1400);
}

function statusLabel(status) {
  if (status === "fresh") return "Live";
  if (status === "degraded") return "Signal Weak";
  return "Location Unavailable";
}

function statusColor(status) {
  if (status === "fresh") return "#2e7d32";
  if (status === "degraded") return "#b7791f";
  return "#b42318";
}

function modeLabel(mode) {
  return mode === "bus" ? "Bus" : "Modern Jeep";
}

function normalizeJeepLoadState(state) {
  if (state === "nearly_full" || state === "standing_only" || state === "available") return state;
  return "available";
}

function getJeepLoadMeta(vehicle) {
  const loadState = normalizeJeepLoadState(vehicle.loadState);
  if (loadState === "standing_only") {
    return { state: loadState, label: "Standing Only" };
  }
  if (loadState === "nearly_full") {
    return { state: loadState, label: "Nearly Full" };
  }
  return { state: "available", label: "Available" };
}

function routeCodeFromRouteKey(routeKey) {
  if (!routeKey || !routeKey.includes(":")) return "";
  return routeKey.split(":")[1] || "";
}

function getBusSeatStats(vehicle) {
  const capacity = Number.isFinite(vehicle.seatCapacity) ? vehicle.seatCapacity : BUS_SEAT_CAPACITY;
  let taken = Number.isFinite(vehicle.seatsTaken) ? Number(vehicle.seatsTaken) : null;

  const routeKey = `bus:${vehicle.routeCode}`;
  if (bookedSeatMap.has(routeKey)) {
    taken = bookedSeatMap.get(routeKey).size;
  }
  if (taken === null) {
    const seeded = demoBusBookedSeatsByRouteCode[vehicle.routeCode] ?? [];
    taken = seeded.length;
  }

  const safeTaken = clamp(Math.round(taken), 0, capacity);
  const available = Math.max(0, capacity - safeTaken);
  return {
    capacity,
    taken: safeTaken,
    available
  };
}

function syncVehicleBusOccupancyFromSeatMap(routeCode = "") {
  if (!routeCode) return;
  const routeKey = `bus:${routeCode}`;
  if (!bookedSeatMap.has(routeKey)) return;
  const taken = bookedSeatMap.get(routeKey).size;
  vehicles = vehicles.map((vehicle) => {
    if (vehicle.vehicleType !== "bus" || vehicle.routeCode !== routeCode) return vehicle;
    return {
      ...vehicle,
      seatCapacity: BUS_SEAT_CAPACITY,
      seatsTaken: clamp(taken, 0, BUS_SEAT_CAPACITY)
    };
  });
}

function trackingCategoryLabel() {
  return trackingCategory === "jeep" ? "Modern Jeeps" : "Buses";
}

function updateMapOverlayTrackLabel() {
  if (!mapOverlayTextElement) return;
  mapOverlayTextElement.textContent = trackingCategory === "jeep"
    ? "Showing modern jeep tracking"
    : "Showing bus tracking";
}

function getRouteDestination(vehicle) {
  const route = routeCatalog.find((item) => item.routeCode === vehicle.routeCode);
  if (route?.destination) return route.destination;
  if (vehicle.routeName.includes("->")) {
    return vehicle.routeName.split("->")[1].trim();
  }
  return "Destination updating";
}

function clearTrackingRouteHighlight() {
  if (!trackingPopupMap) return;
  if (trackingHighlightedRouteLine) {
    trackingPopupMap.removeLayer(trackingHighlightedRouteLine);
    trackingHighlightedRouteLine = null;
  }
  if (trackingHeadingMarker) {
    trackingPopupMap.removeLayer(trackingHeadingMarker);
    trackingHeadingMarker = null;
  }
}

function clearTrackingActiveRideOverlay() {
  if (!trackingPopupMap) return;
  if (trackingActiveRideRouteLine) {
    trackingPopupMap.removeLayer(trackingActiveRideRouteLine);
    trackingActiveRideRouteLine = null;
  }
  if (trackingActiveRideBusMarker) {
    trackingPopupMap.removeLayer(trackingActiveRideBusMarker);
    trackingActiveRideBusMarker = null;
  }
  if (trackingActiveRideUserMarker) {
    trackingPopupMap.removeLayer(trackingActiveRideUserMarker);
    trackingActiveRideUserMarker = null;
  }
}

function renderTrackingActiveRideOverlay() {
  if (!trackingPopupMap) return;
  renderDemoUserLocationMarkers();
  const modalOpen = trackingModal && !trackingModal.classList.contains("hidden");
  if (!modalOpen) {
    clearTrackingActiveRideOverlay();
    return;
  }

  const activeTrip = tripHistory.find((trip) => trip.status === "ongoing") || null;
  if (!activeTrip) {
    if (trackingPanelNoteElement) {
      trackingPanelNoteElement.textContent = `User pin fixed at ${DEMO_USER_LOCATION.name}. Tap a vehicle circle to view route and plate details.`;
    }
    clearTrackingActiveRideOverlay();
    return;
  }

  const routePath = getRoutePath(activeTrip.routeCode) || [];
  const liveVehicle = getBestLiveVehicleByRoute(activeTrip.routeCode);
  const defaultPoint = routePath[0] || [DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng];
  const busLat = liveVehicle?.lat ?? defaultPoint[0];
  const busLng = liveVehicle?.lng ?? defaultPoint[1];
  const userLat = DEMO_USER_LOCATION.lat;
  const userLng = DEMO_USER_LOCATION.lng;

  if (routePath.length > 1) {
    if (!trackingActiveRideRouteLine) {
      trackingActiveRideRouteLine = window.L.polyline(routePath, {
        color: "#124f96",
        weight: 5,
        opacity: 0.76
      }).addTo(trackingPopupMap);
    } else {
      trackingActiveRideRouteLine.setLatLngs(routePath);
    }
  } else if (trackingActiveRideRouteLine) {
    trackingPopupMap.removeLayer(trackingActiveRideRouteLine);
    trackingActiveRideRouteLine = null;
  }

  if (!trackingActiveRideBusMarker) {
    trackingActiveRideBusMarker = window.L.circleMarker([busLat, busLng], {
      radius: 7,
      color: "#ffffff",
      weight: 2,
      fillColor: "#ff6b00",
      fillOpacity: 0.98
    }).addTo(trackingPopupMap).bindTooltip("Current bus", { direction: "top" });
  } else {
    trackingActiveRideBusMarker.setLatLng([busLat, busLng]);
  }

  if (!trackingActiveRideUserMarker) {
    trackingActiveRideUserMarker = window.L.circleMarker([userLat, userLng], {
      radius: 7,
      color: "#ffffff",
      weight: 2,
      fillColor: "#124f96",
      fillOpacity: 0.98
    }).addTo(trackingPopupMap).bindTooltip(`Your location: ${DEMO_USER_LOCATION.name}`, { direction: "bottom" });
  } else {
    trackingActiveRideUserMarker.setLatLng([userLat, userLng]);
  }

  if (trackingPanelNoteElement) {
    trackingPanelNoteElement.textContent = `Ongoing ride: ${activeTrip.routeCode} to ${activeTrip.destination}. Your demo location is fixed at ${DEMO_USER_LOCATION.name}.`;
  }

  trackingPopupMap.setView([busLat, busLng], 13, { animate: true, duration: 0.35 });
}

function highlightVehicleRouteInTracking(vehicle) {
  if (!trackingPopupMap) return;
  clearTrackingRouteHighlight();
  const routePath = getRoutePath(vehicle.routeCode);
  if (!routePath || routePath.length < 2) return;

  trackingHighlightedRouteLine = window.L.polyline(routePath, {
    color: "#124f96",
    weight: 6,
    opacity: 0.92
  }).addTo(trackingPopupMap);

  const headingTo = getRouteDestination(vehicle);
  const endPoint = routePath[routePath.length - 1];
  trackingHeadingMarker = window.L.circleMarker(endPoint, {
    radius: 7,
    color: "#ffffff",
    weight: 2,
    fillColor: "#124f96",
    fillOpacity: 0.98
  }).addTo(trackingPopupMap);
  trackingHeadingMarker.bindTooltip(`Heading to ${headingTo}`, {
    permanent: true,
    direction: "top",
    className: "route-heading-tooltip"
  }).openTooltip();
}

function initializeMap() {
  if (!window.L) {
    mapElement.outerHTML = '<div class="live-map-fallback">Live map needs internet for map tiles. Vehicle cards still show true tracking status.</div>';
    return;
  }

  liveMap = window.L.map("live-map", {
    zoomControl: false,
    maxBounds: cebuBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 9,
    dragging: true,
    scrollWheelZoom: false,
    doubleClickZoom: true,
    boxZoom: false,
    keyboard: true,
    tap: true,
    touchZoom: true
  }).setView([DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng], 12);
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(liveMap);

  // Keep map draggable, but allow a normal tap/click to open full live tracking popup.
  liveMap.on("click", () => {
    openTrackingModal();
  });
  renderDemoUserLocationMarkers();
}

function initializeTrackingPopupMap() {
  if (!window.L || trackingPopupMap) return;
  trackingPopupMap = window.L.map("tracking-popup-map", {
    zoomControl: true,
    maxBounds: cebuBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 9
  }).setView([DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng], 11);
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(trackingPopupMap);
  renderDemoUserLocationMarkers();
}

function openTrackingModal() {
  if (!window.L) return;
  trackingModal.classList.remove("hidden");
  initializeTrackingPopupMap();
  setTimeout(() => {
    if (trackingPopupMap) trackingPopupMap.invalidateSize();
    const ongoingTrip = tripHistory.find((trip) => trip.status === "ongoing");
    if (ongoingTrip) {
      setTrackingCategory(ongoingTrip.mode === "jeep" ? "jeep" : "bus");
    } else {
      applyFilters();
      renderTrackingActiveRideOverlay();
    }
  }, 120);
}

function closeTrackingModal() {
  clearTrackingRouteHighlight();
  clearTrackingActiveRideOverlay();
  trackingModal.classList.add("hidden");
}

function initializeFullMap() {
  if (!window.L || fullMap) return;

  fullMap = window.L.map("full-map", {
    zoomControl: true,
    maxBounds: cebuBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 8
  }).setView([DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng], 10);
  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(fullMap);

  mapDestinations.forEach((destination) => {
    const marker = window.L.circleMarker([destination.lat, destination.lng], {
      radius: 7,
      color: "#ffffff",
      weight: 2,
      fillColor: "#ff6b00",
      fillOpacity: 0.95
    }).addTo(fullMap);

    marker.bindPopup(destination.name);
    marker.on("click", () => {
      if (mapSelectionMode === "pickup") {
        placePickupPinOnMap(destination.lat, destination.lng);
        return;
      }
      selectDestinationFromMap(destination.name);
    });
    fullMapMarkers.set(destination.name, marker);
  });

  fullMap.on("click", (event) => {
    if (mapSelectionMode !== "pickup") return;
    placePickupPinOnMap(event.latlng.lat, event.latlng.lng);
  });
  fullMap.on("movestart", () => {
    const center = fullMap.getCenter();
    if (!center) return;
    fullMapLastCenter = { lat: center.lat, lng: center.lng };
  });
  fullMap.on("move", updateMapDirectionIndicator);
  fullMap.on("moveend", updateMapDirectionIndicator);
  renderDemoUserLocationMarkers();
}

function bearingFromPoints(from, to) {
  const lat1 = (from.lat * Math.PI) / 180;
  const lat2 = (to.lat * Math.PI) / 180;
  const deltaLng = ((to.lng - from.lng) * Math.PI) / 180;
  const y = Math.sin(deltaLng) * Math.cos(lat2);
  const x = (Math.cos(lat1) * Math.sin(lat2)) - (Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng));
  const bearing = (Math.atan2(y, x) * 180) / Math.PI;
  return (bearing + 360) % 360;
}

function cardinalFromBearing(bearing) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(bearing / 45) % directions.length;
  return directions[index];
}

function updateMapDirectionIndicator() {
  if (!fullMap || !mapDirectionIndicator || !mapDirectionArrow || !mapDirectionText) return;
  if (mapSelectionMode !== "pickup") {
    mapDirectionIndicator.classList.add("hidden");
    return;
  }

  mapDirectionIndicator.classList.remove("hidden");
  const center = fullMap.getCenter();
  if (!center) return;
  const current = { lat: center.lat, lng: center.lng };

  if (!fullMapLastCenter) {
    fullMapLastCenter = current;
    mapDirectionArrow.style.transform = "rotate(0deg)";
    mapDirectionText.textContent = "N";
    return;
  }

  const distance = Math.abs(current.lat - fullMapLastCenter.lat) + Math.abs(current.lng - fullMapLastCenter.lng);
  if (distance < 0.00001) return;

  const bearing = bearingFromPoints(fullMapLastCenter, current);
  mapDirectionArrow.style.transform = `rotate(${bearing}deg)`;
  mapDirectionText.textContent = cardinalFromBearing(bearing);
  fullMapLastCenter = current;
}

function clearFullMapVehicleMarkers() {
  if (!fullMap) return;
  Array.from(fullMapVehicleMarkers.values()).forEach((marker) => {
    fullMap.removeLayer(marker);
  });
  fullMapVehicleMarkers.clear();
}

function renderFullMapVehicleMarkers() {
  if (!fullMap || !window.L || mapSelectionMode !== "pickup") return;
  const visibleTripIds = new Set();

  vehicles.forEach((vehicle) => {
    if (vehicle.status === "stale") return;
    visibleTripIds.add(vehicle.tripId);

    let marker = fullMapVehicleMarkers.get(vehicle.tripId);
    const heading = vehicle.headingDeg ?? 0;
    const markerIcon = window.L.divIcon({
      className: "",
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      html: `<div class="vehicle-pin ${vehicle.vehicleType}" style="transform: rotate(${heading}deg)"></div>`
    });
    if (!marker) {
      marker = window.L.marker([vehicle.lat, vehicle.lng], {
        icon: markerIcon,
        bubblingMouseEvents: false
      }).addTo(fullMap);
      marker.bindPopup("");
      fullMapVehicleMarkers.set(vehicle.tripId, marker);
    }

    marker.setLatLng([vehicle.lat, vehicle.lng]);
    marker.setIcon(markerIcon);

    const headingTo = getRouteDestination(vehicle);
    const occupancyLine = vehicle.vehicleType === "bus"
      ? (() => {
        const seatStats = getBusSeatStats(vehicle);
        return `Seats: ${seatStats.taken} taken | ${seatStats.available} available`;
      })()
      : (() => {
        const jeepLoad = getJeepLoadMeta(vehicle);
        return `Load: ${jeepLoad.label}`;
      })();
    marker.setPopupContent(
      `<strong>${vehicle.routeCode}</strong><br>${vehicle.plateNo}<br>${modeLabel(vehicle.vehicleType)}<br>${statusLabel(vehicle.status)}<br>${occupancyLine}<br>Heading to: ${headingTo}`
    );
    marker.off("click");
    marker.on("click", (event) => {
      if (window.L?.DomEvent) {
        window.L.DomEvent.stopPropagation(event);
      }
      marker.openPopup();
    });
  });

  Array.from(fullMapVehicleMarkers.keys()).forEach((tripId) => {
    if (visibleTripIds.has(tripId)) return;
    const marker = fullMapVehicleMarkers.get(tripId);
    if (marker) fullMap.removeLayer(marker);
    fullMapVehicleMarkers.delete(tripId);
  });
}

function renderMapDestinationList(filter = "") {
  mapPlaceList.innerHTML = "";
  if (mapSelectionMode === "pickup") {
    renderMapPickupList(filter);
    return;
  }
  const normalized = filter.trim().toLowerCase();
  if (!normalized) {
    mapPlaceList.classList.add("hidden");
    return;
  }
  const filtered = mapDestinations.filter((place) => place.name.toLowerCase().includes(normalized));
  mapPlaceList.classList.remove("hidden");
  if (filtered.length === 0) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "map-place-btn";
    btn.type = "button";
    btn.textContent = "No matching destination";
    btn.disabled = true;
    li.appendChild(btn);
    mapPlaceList.appendChild(li);
    return;
  }

  filtered.forEach((place) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "map-place-btn";
    btn.type = "button";
    btn.textContent = place.name;
    btn.addEventListener("click", () => {
      selectDestinationFromMap(place.name);
      if (fullMap) fullMap.setView([place.lat, place.lng], 12, { animate: true });
    });
    li.appendChild(btn);
    mapPlaceList.appendChild(li);
  });
}

function renderMapPickupList(filter = "") {
  mapPlaceList.innerHTML = "";
  const normalized = filter.trim().toLowerCase();
  if (!normalized) {
    mapPlaceList.classList.add("hidden");
    return;
  }
  const filtered = pickupMapPoints.filter((point) => point.name.toLowerCase().includes(normalized));
  mapPlaceList.classList.remove("hidden");
  if (filtered.length === 0) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "map-place-btn";
    btn.type = "button";
    btn.textContent = "No matching pickup area";
    btn.disabled = true;
    li.appendChild(btn);
    mapPlaceList.appendChild(li);
    return;
  }

  filtered.forEach((point) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "map-place-btn";
    btn.type = "button";
    btn.textContent = point.name;
    btn.addEventListener("click", () => {
      mapSearchInput.value = point.name;
      placePickupPinOnMap(point.lat, point.lng);
      if (fullMap) fullMap.setView([point.lat, point.lng], 13, { animate: true });
      mapPlaceList.classList.add("hidden");
    });
    li.appendChild(btn);
    mapPlaceList.appendChild(li);
  });
}

function selectDestinationFromMap(placeName) {
  selectedMapPlace = placeName;
  mapSearchInput.value = placeName;
  destinationStopElement.value = placeName;
  mapSelectedLabel.textContent = `Selected destination: ${placeName}`;
  mapConfirmSheet.classList.remove("hidden");
  mapPlaceList.classList.add("hidden");
}

function setMapSelectionMode(mode = "destination") {
  mapSelectionMode = mode === "pickup" ? "pickup" : "destination";
  mapSearchInput.placeholder = mapSelectionMode === "pickup"
    ? "Search pickup corridor or tap road on map"
    : "Search destination on map";
  mapConfirmBookingButton.textContent = mapSelectionMode === "pickup"
    ? "Confirm pickup point"
    : "Confirm Booking";
  mapSelectedLabel.textContent = mapSelectionMode === "pickup"
    ? "Tap on a road to place your pickup pin."
    : "Selected destination:";

  if (mapSelectionMode !== "pickup") {
    selectedMapPickupPoint = null;
    if (fullMap && mapPickupPinMarker) {
      fullMap.removeLayer(mapPickupPinMarker);
      mapPickupPinMarker = null;
    }
    clearFullMapVehicleMarkers();
    if (mapDirectionIndicator) mapDirectionIndicator.classList.add("hidden");
  } else {
    renderFullMapVehicleMarkers();
    if (mapDirectionIndicator) mapDirectionIndicator.classList.remove("hidden");
    fullMapLastCenter = null;
    updateMapDirectionIndicator();
  }
}

function findNearestPickupPoint(lat, lng) {
  if (!pickupMapPoints.length) return null;
  let nearest = pickupMapPoints[0];
  let nearestScore = Number.POSITIVE_INFINITY;
  pickupMapPoints.forEach((point) => {
    const score = ((point.lat - lat) ** 2) + ((point.lng - lng) ** 2);
    if (score < nearestScore) {
      nearest = point;
      nearestScore = score;
    }
  });
  return nearest;
}

function placePickupPinOnMap(lat, lng) {
  if (!fullMap || !window.L) return;
  const nearest = findNearestPickupPoint(lat, lng);
  selectedMapPickupPoint = { lat, lng, nearest };

  if (!mapPickupPinMarker) {
    mapPickupPinMarker = window.L.marker([lat, lng]).addTo(fullMap);
  } else {
    mapPickupPinMarker.setLatLng([lat, lng]);
  }

  const nearestName = nearest?.name || "selected road point";
  mapSelectedLabel.textContent = `Pickup pin placed near: ${nearestName}`;
  mapConfirmBookingButton.disabled = false;
  mapConfirmSheet.classList.remove("hidden");
  mapPlaceList.classList.add("hidden");
}

function closeMapSelectionOverlay(nextPage = mapOverlayReturnPage || "home") {
  mapOverlayOpen = false;
  clearFullMapVehicleMarkers();
  if (mapDirectionIndicator) mapDirectionIndicator.classList.add("hidden");
  pageMap.classList.add("hidden");
  pageMap.classList.remove("map-overlay-open", "active");
  pageMap.style.display = "none";
  mapConfirmSheet.classList.add("hidden");
  setPage(nextPage === "map" ? "home" : nextPage);
}

function openMapSelectionPage(mode = "destination") {
  initializeFullMap();
  setMapSelectionMode(mode);
  renderMapDestinationList();
  mapSearchInput.value = "";
  mapPlaceList.classList.add("hidden");
  selectedMapPlace = "";
  if (mode === "pickup") {
    selectedMapPickupPoint = null;
    if (fullMap && mapPickupPinMarker) {
      fullMap.removeLayer(mapPickupPinMarker);
      mapPickupPinMarker = null;
    }
    mapConfirmBookingButton.disabled = true;
    mapSelectedLabel.textContent = "Tap on a road to place your pickup pin.";
  } else {
    mapConfirmBookingButton.disabled = false;
  }
  mapConfirmSheet.classList.add("hidden");
  mapOverlayReturnPage = currentPageKey || "home";
  mapOverlayOpen = true;
  pageMap.classList.remove("hidden");
  pageMap.classList.add("map-overlay-open", "active");
  pageMap.style.display = "block";
  bottomNav.classList.add("hidden");
  setTimeout(() => {
    if (fullMap) {
      fullMap.invalidateSize();
      if (mapSelectionMode === "pickup") {
        renderFullMapVehicleMarkers();
        updateMapDirectionIndicator();
      }
    }
  }, 90);
}

function initializeSeatRouteMap() {
  if (!window.L || seatRouteMap || !seatRouteMapElement) return;
  seatRouteMap = window.L.map("seat-route-map", {
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false
  }).setView([DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng], 11);

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(seatRouteMap);
}

function renderSeatRouteHighlight() {
  if (!seatRoutePanelElement) return;
  const route = routeCatalog.find((item) => item.key === selectedRouteKey);
  if (!route) {
    seatRoutePanelElement.classList.add("hidden");
    return;
  }

  const routePath = getRoutePath(route.routeCode);
  if (!routePath || routePath.length < 2) {
    seatRoutePanelElement.classList.add("hidden");
    return;
  }

  seatRoutePanelElement.classList.remove("hidden");
  seatRouteTagElement.textContent = seatQuickBooking ? "Quick Booking" : "Route Preview";
  seatRouteCaptionElement.textContent = `${route.routeCode} road path: ${route.pickup} -> ${route.destination}`;

  if (!window.L) {
    seatRouteMapElement.innerHTML = '<div class="live-map-fallback">Route map needs internet for map tiles.</div>';
    return;
  }

  initializeSeatRouteMap();
  if (!seatRouteMap) return;

  if (seatRoutePolyline) {
    seatRouteMap.removeLayer(seatRoutePolyline);
    seatRoutePolyline = null;
  }
  if (seatRouteStartMarker) {
    seatRouteMap.removeLayer(seatRouteStartMarker);
    seatRouteStartMarker = null;
  }
  if (seatRouteEndMarker) {
    seatRouteMap.removeLayer(seatRouteEndMarker);
    seatRouteEndMarker = null;
  }

  seatRoutePolyline = window.L.polyline(routePath, {
    color: "#124f96",
    weight: 5,
    opacity: 0.9
  }).addTo(seatRouteMap);

  const startPoint = routePath[0];
  const endPoint = routePath[routePath.length - 1];
  seatRouteStartMarker = window.L.circleMarker(startPoint, {
    radius: 5,
    color: "#ffffff",
    weight: 2,
    fillColor: "#ff6b00",
    fillOpacity: 1
  }).addTo(seatRouteMap).bindTooltip("Pickup", { direction: "top" });
  seatRouteEndMarker = window.L.circleMarker(endPoint, {
    radius: 5,
    color: "#ffffff",
    weight: 2,
    fillColor: "#2e7d32",
    fillOpacity: 1
  }).addTo(seatRouteMap).bindTooltip(`Destination: ${route.destination}`, { direction: "top" });

  seatRouteMap.fitBounds(seatRoutePolyline.getBounds(), {
    padding: [14, 14],
    maxZoom: 12
  });
  setTimeout(() => seatRouteMap.invalidateSize(), 80);
}

function renderMapMarkersOnMap(mapRef, markerStore, trailStore, polylineStore, filteredVehicles) {
  if (!mapRef) return;
  const visibleTripIds = new Set();

  filteredVehicles.forEach((vehicle) => {
    if (vehicle.status === "stale") return;
    visibleTripIds.add(vehicle.tripId);

    let marker = markerStore.get(vehicle.tripId);
    const heading = vehicle.headingDeg ?? 0;
    const markerIcon = window.L.divIcon({
      className: "",
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      html: `<div class="vehicle-pin ${vehicle.vehicleType}" style="transform: rotate(${heading}deg)"></div>`
    });
    if (!marker) {
      marker = window.L.marker([vehicle.lat, vehicle.lng], { icon: markerIcon }).addTo(mapRef);
      marker.bindPopup("");
      markerStore.set(vehicle.tripId, marker);
      trailStore.set(vehicle.tripId, []);
    }

    marker.setLatLng([vehicle.lat, vehicle.lng]);
    marker.setIcon(markerIcon);
    const headingTo = getRouteDestination(vehicle);
    const occupancyLine = vehicle.vehicleType === "bus"
      ? (() => {
        const seatStats = getBusSeatStats(vehicle);
        return `Seats: ${seatStats.taken} taken | ${seatStats.available} available`;
      })()
      : (() => {
        const jeepLoad = getJeepLoadMeta(vehicle);
        return `Load: ${jeepLoad.label}`;
      })();
    marker.setPopupContent(
      `<strong>${vehicle.routeCode}</strong><br>${vehicle.plateNo}<br>${modeLabel(vehicle.vehicleType)}<br>${statusLabel(vehicle.status)}<br>${occupancyLine}<br>Heading to: ${headingTo}`
    );
    marker.off("click");
    marker.on("click", () => {
      if (mapRef === trackingPopupMap) {
        highlightVehicleRouteInTracking(vehicle);
      }
      marker.openPopup();
    });

    const trail = trailStore.get(vehicle.tripId) ?? [];
    trail.push([vehicle.lat, vehicle.lng]);
    if (trail.length > 8) trail.shift();
    trailStore.set(vehicle.tripId, trail);

    let polyline = polylineStore.get(vehicle.tripId);
    if (!polyline) {
      polyline = window.L.polyline(trail, {
        color: statusColor(vehicle.status),
        weight: 3,
        opacity: 0.55
      }).addTo(mapRef);
      polylineStore.set(vehicle.tripId, polyline);
    } else {
      polyline.setLatLngs(trail);
      polyline.setStyle({ color: statusColor(vehicle.status) });
    }
  });

  Array.from(markerStore.keys()).forEach((tripId) => {
    if (visibleTripIds.has(tripId)) return;
    const marker = markerStore.get(tripId);
    if (marker) mapRef.removeLayer(marker);
    markerStore.delete(tripId);

    const polyline = polylineStore.get(tripId);
    if (polyline) mapRef.removeLayer(polyline);
    polylineStore.delete(tripId);
    trailStore.delete(tripId);
  });
}

function renderMapMarkers(filteredVehicles) {
  renderMapMarkersOnMap(liveMap, vehicleMarkers, vehicleTrails, trailPolylines, filteredVehicles);
  renderMapMarkersOnMap(
    trackingPopupMap,
    trackingPopupMarkers,
    trackingPopupVehicleTrails,
    trackingPopupTrailPolylines,
    filteredVehicles
  );
}

function renderVehicleList(filteredVehicles) {
  vehicleListElement.innerHTML = "";
  vehicleCountElement.textContent = `${filteredVehicles.length} active`;
  if (filteredVehicles.length === 0) {
    const li = document.createElement("li");
    li.className = "vehicle-card";
    li.innerHTML = `
      <div class="vehicle-id">No vehicles found</div>
      <div class="route-name">Try another route keyword or tap Refresh.</div>
    `;
    vehicleListElement.appendChild(li);
    return;
  }
  filteredVehicles.forEach((vehicle) => {
    const isJeep = vehicle.vehicleType === "jeep";
    const occupancyChip = isJeep
      ? (() => {
        const jeepLoad = getJeepLoadMeta(vehicle);
        return `<span class="chip occupancy ${jeepLoad.state}">${jeepLoad.label}</span>`;
      })()
      : (() => {
        const seatStats = getBusSeatStats(vehicle);
        return `<span class="chip occupancy">${seatStats.taken} taken | ${seatStats.available} free</span>`;
      })();
    const li = document.createElement("li");
    li.className = `vehicle-card has-photo ${isJeep ? "jeep-card" : "bus-card"}`;
    li.addEventListener("click", () => {
      selectedVehicleTripId = selectedVehicleTripId === vehicle.tripId ? "" : vehicle.tripId;
      renderVehicleList(filteredVehicles);
    });
    const vehicleImage = isJeep ? MODERN_JEEP_CARD_IMAGE : CERES_BUS_CARD_IMAGE;
    const fallbackImage = isJeep ? MODERN_JEEP_CARD_IMAGE_FALLBACK : CERES_BUS_CARD_IMAGE_FALLBACK;
    const vehicleTag = vehicle.vehicleType === "jeep" ? "Modern Jeep" : "Ceres Liner";
    li.innerHTML = `
      <div class="vehicle-bg">
        <img
          class="vehicle-photo ${isJeep ? "vehicle-photo-jeep" : "vehicle-photo-bus"}"
          src="${vehicleImage}"
          data-fallback="${fallbackImage}"
          alt="${vehicleTag} demo vehicle"
          loading="lazy"
          referrerpolicy="no-referrer"
          onerror="if(this.dataset.fallback && this.src!==this.dataset.fallback){this.src=this.dataset.fallback;}else{this.style.display='none';}"
        >
      </div>
      <div class="vehicle-bg-overlay"></div>
      <div class="vehicle-top">
        <div>
          <div class="vehicle-id">${vehicle.routeCode}</div>
          <div class="route-name">${vehicle.routeName}</div>
        </div>
        <div class="vehicle-id">${vehicle.plateNo}</div>
      </div>
      <div class="vehicle-meta">
        <span class="chip ${vehicle.status}">${statusLabel(vehicle.status)}</span>
        ${occupancyChip}
        <span class="chip eta">${vehicle.etaMinutes !== null ? `${vehicle.etaMinutes} min (${vehicle.etaConfidence})` : "ETA unavailable"}</span>
      </div>
    `;

    if (selectedVehicleTripId === vehicle.tripId) {
      const actionWrap = document.createElement("div");
      actionWrap.className = "vehicle-action-wrap";
      const infoBtn = document.createElement("button");
      infoBtn.className = "vehicle-info-btn";
      infoBtn.type = "button";
      infoBtn.textContent = "View more info";
      infoBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        openBookingFromVehicle(vehicle);
      });
      actionWrap.appendChild(infoBtn);
      li.appendChild(actionWrap);
    }

    vehicleListElement.appendChild(li);
  });
}

function openBookingFromVehicle(vehicle) {
  let route = routeCatalog.find((item) => item.routeCode === vehicle.routeCode);
  if (!route) {
    route = routeCatalog.find((item) => item.mode === vehicle.vehicleType);
  }
  if (!route) return;

  seatQuickBooking = true;
  setBookingMode(route.mode);
  selectedRouteKey = route.key;
  selectedSeats.clear();
  selectedRouteSummaryElement.textContent = `${route.routeCode} | ${route.pickup} -> ${route.destination} | Starts at PHP ${route.baseFare}`;
  bookingResultElement.textContent = "";
  renderSeatGrid();
  renderSeatRouteHighlight();
  updateSeatBookingSummary();
  setPage("seat");
}

function renderAdSlots() {
  adSlotsElement.innerHTML = "";
  const slot = commercialSlots[0];
  if (!slot) return;
  const card = document.createElement("article");
  card.className = "ad-card ad-hero";
  card.innerHTML = `
    <div class="ad-hero-top">
      <span class="ad-brand">${slot.brand}</span>
      <span class="ad-pill">Partner Offer</span>
    </div>
    <div class="ad-hero-body">
      <div>
        <div class="ad-title">${slot.title}</div>
        <div class="ad-copy">${slot.copy}</div>
      </div>
      <div class="ad-hero-graphic" aria-hidden="true">
        <div class="ad-hero-badge">J</div>
      </div>
    </div>
    <button class="ad-hero-btn" type="button">${slot.cta}</button>
  `;
  adSlotsElement.appendChild(card);
}

function populateStopSelectors() {
  pickupAreasNationalRoad.forEach((pickupName) => {
    const pickupOption = document.createElement("option");
    pickupOption.value = pickupName;
    pickupOption.textContent = pickupName;
    pickupStopElement.appendChild(pickupOption);
  });

  destinationAreasCebu.forEach((destinationName) => {
    const destinationOption = document.createElement("option");
    destinationOption.value = destinationName;
    destinationOption.textContent = destinationName;
    destinationStopElement.appendChild(destinationOption);
  });
}

function ensureRouteSeatSet(key) {
  if (!bookedSeatMap.has(key)) {
    let seed = [];
    if (key.startsWith("bus:")) {
      const routeCode = routeCodeFromRouteKey(key);
      seed = demoBusBookedSeatsByRouteCode[routeCode] ?? ["1A", "1B", "2D", "3A", "4C"];
    }
    bookedSeatMap.set(key, new Set(seed));
  }
}

function busSeatRows() {
  const rows = [];
  for (let row = 1; row <= 10; row += 1) rows.push([`${row}A`, `${row}B`, `${row}C`, `${row}D`]);
  return rows;
}

function jeepSeatRows() {
  const rows = [];
  for (let row = 1; row <= 8; row += 1) rows.push([`L${row}`, `R${row}`]);
  return rows;
}

function createSeatButton(seatLabelValue, bookedSet) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "seat";
  button.textContent = seatLabelValue;

  if (bookedSet.has(seatLabelValue)) {
    button.classList.add("booked");
    button.disabled = true;
  } else if (selectedSeats.has(seatLabelValue)) {
    button.classList.add("selected");
  }

  button.addEventListener("click", () => {
    if (selectedSeats.has(seatLabelValue)) selectedSeats.delete(seatLabelValue);
    else selectedSeats.add(seatLabelValue);
    renderSeatGrid();
  });
  return button;
}

function createJeepSideSeatButton(seatCode, label, bookedSet) {
  const button = createSeatButton(seatCode, bookedSet);
  button.classList.add("jeep-side-seat");
  button.innerHTML = `<span class="jeep-side-seat-text">${label}</span>`;
  return button;
}

function createJeepCenterAisleMarkers() {
  const center = document.createElement("div");
  center.className = "jeep-center-line";
  for (let markerIndex = 0; markerIndex < 8; markerIndex += 1) {
    const marker = document.createElement("span");
    marker.className = "jeep-center-marker";
    center.appendChild(marker);
  }
  return center;
}

function createDriverSeatBlock() {
  const driver = document.createElement("div");
  driver.className = "driver-seat-box";
  driver.textContent = "Driver";
  return driver;
}

function createFrontSeatRow(frontSeatCode, bookedSet, mode) {
  const row = document.createElement("div");
  row.className = `seat-front-row ${mode}-front-row`;
  row.appendChild(createDriverSeatBlock());
  const frontSeat = createSeatButton(frontSeatCode, bookedSet);
  frontSeat.classList.add("front-seat");
  row.appendChild(frontSeat);
  return row;
}

function renderSeatGrid() {
  seatGridElement.innerHTML = "";
  if (!selectedRouteKey) {
    updateSeatBookingSummary();
    return;
  }

  ensureRouteSeatSet(selectedRouteKey);
  const bookedSet = bookedSeatMap.get(selectedRouteKey);

  if (bookingMode === "bus") {
    seatGridElement.classList.add("bus-layout");
    seatGridElement.classList.remove("jeep-layout");
    seatGridElement.appendChild(createFrontSeatRow("F1", bookedSet, "bus"));
    busSeatRows().forEach((rowSeats) => {
      const row = document.createElement("div");
      row.className = "bus-row";
      row.appendChild(createSeatButton(rowSeats[0], bookedSet));
      row.appendChild(createSeatButton(rowSeats[1], bookedSet));
      const aisle = document.createElement("div");
      aisle.className = "bus-aisle";
      row.appendChild(aisle);
      row.appendChild(createSeatButton(rowSeats[2], bookedSet));
      row.appendChild(createSeatButton(rowSeats[3], bookedSet));
      seatGridElement.appendChild(row);
    });
  } else {
    seatGridElement.classList.add("jeep-layout");
    seatGridElement.classList.remove("bus-layout");
    seatGridElement.appendChild(createFrontSeatRow("J-F", bookedSet, "jeep"));
    const shell = document.createElement("div");
    shell.className = "jeep-layout-shell";
    shell.appendChild(createJeepSideSeatButton("J-L", "Passenger Seat\nLeft", bookedSet));
    shell.appendChild(createJeepCenterAisleMarkers());
    shell.appendChild(createJeepSideSeatButton("J-R", "Passenger Seat\nRight", bookedSet));
    seatGridElement.appendChild(shell);
  }
  updateSeatBookingSummary();
}

function setBookingMode(mode) {
  bookingMode = mode;
  modeJeepButton.classList.toggle("active", mode === "jeep");
  modeBusButton.classList.toggle("active", mode === "bus");
  seatModeBadgeElement.textContent = mode ? modeLabel(mode) : "Select Vehicle";
  tripFieldsWrap.classList.toggle("hidden", !mode);
  planModeHint.textContent = mode
    ? `Great. Now select pickup and destination for your ${modeLabel(mode).toLowerCase()} booking.`
    : "Choose what to book first to continue.";
  updatePlanCTAState();
  updateSeatBookingSummary();
  if (mode === "bus" || mode === "jeep") {
    setTrackingCategory(mode);
  }
}

function updatePlanCTAState() {
  if (!bookingMode) {
    findRouteButton.disabled = true;
    return;
  }
  const pickupReady = pickupStopElement.value.trim().length > 0;
  const destinationReady = destinationStopElement.value.trim().length > 0;
  findRouteButton.disabled = !(pickupReady && destinationReady);
}

function updateSeatBookingSummary() {
  const route = routeCatalog.find((item) => item.key === selectedRouteKey);
  const farePerSeat = route?.baseFare ?? (bookingMode === "bus" ? 180 : 35);
  const selectedCount = selectedSeats.size;
  seatCountSummaryElement.textContent = `Seats selected: ${selectedCount}`;
  seatFareSummaryElement.textContent = `Estimated fare: PHP ${selectedCount * farePerSeat}`;
  bookSeatButton.disabled = !(selectedRouteKey && selectedCount > 0);
}

function findBestRoute() {
  const pickup = pickupStopElement.value;
  const destination = destinationStopElement.value;
  if (!pickup || !destination) {
    tripPlanResultElement.textContent = "Select both pickup and destination.";
    return;
  }
  if (pickup === destination) {
    tripPlanResultElement.textContent = "Pickup and destination cannot be the same.";
    return;
  }

  let match = resolveRouteMatch(pickup, destination);
  if (!match) {
    tripPlanResultElement.textContent = "No direct route found yet for this destination, but Cebu-wide list is available.";
    return;
  }

  seatQuickBooking = false;
  setBookingMode(match.mode);
  selectedRouteKey = match.key;
  selectedSeats.clear();
  selectedRouteSummaryElement.textContent = `${match.routeCode} | ${pickup} -> ${destination} | Starts at PHP ${match.baseFare}`;
  tripPlanResultElement.textContent = `Route matched: ${match.routeCode}. Pickup is restricted to national-road corridors.`;
  bookingResultElement.textContent = "";
  renderSeatGrid();
  renderSeatRouteHighlight();
  updateSeatBookingSummary();
  setPage("seat");
}

function resolveRouteMatch(pickup, destination) {
  let match = routeCatalog.find((route) => route.pickup === pickup && route.destination === destination);
  if (match) return match;

  const southDestinations = new Set([
    "Carcar City", "Carcar Terminal", "Sibonga", "Argao", "Dalaguete", "Alcoy", "Boljoon", "Oslob", "Santander", "Samboan", "Ginatilan", "Malabuyoc"
  ]);
  const northDestinations = new Set([
    "Danao City", "Danao City Terminal", "Compostela", "Liloan", "Consolacion", "Carmen", "Catmon", "Sogod", "Borbon", "Tabogon", "Bogo City", "Medellin", "Daanbantayan", "San Remigio"
  ]);
  const metroDestinations = new Set([
    "IT Park, Cebu City", "IT Park", "Cebu IT Park", "Ayala IT Park"
  ]);
  const westDestinations = new Set([
    "Moalboal", "Barili", "Ronda", "Dumanjug", "Toledo City", "Aloguinsan", "Pinamungajan", "Balamban", "Asturias", "Tuburan", "Tabuelan", "Badian", "Alegria", "Alcantara"
  ]);

  if (southDestinations.has(destination)) {
    return routeCatalog.find((route) => route.key === "bus:BUS-CEB-12");
  }
  if (westDestinations.has(destination)) {
    return routeCatalog.find((route) => route.key === "bus:BUS-CEB-48");
  }
  if (metroDestinations.has(destination)) {
    return routeCatalog.find((route) => route.key === "bus:BUS-CEB-72");
  }
  if (northDestinations.has(destination)) {
    return routeCatalog.find((route) => route.key === "bus:BUS-CEB-21");
  }
  return null;
}

function initializeTicketLiveMap() {
  if (!window.L || ticketLiveMap || !ticketLiveMapElement) return;
  ticketLiveMap = window.L.map("ticket-live-map", {
    zoomControl: false,
    maxBounds: cebuBounds,
    maxBoundsViscosity: 1.0,
    minZoom: 9
  }).setView([demoTicketUserLocation.lat, demoTicketUserLocation.lng], 12);

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(ticketLiveMap);
}

function getTicketBusLocation(routeCode) {
  const liveCandidate = vehicles.find((vehicle) => vehicle.routeCode === routeCode && vehicle.status !== "stale")
    || vehicles.find((vehicle) => vehicle.routeCode === routeCode)
    || null;
  if (liveCandidate) {
    return {
      lat: liveCandidate.lat,
      lng: liveCandidate.lng,
      label: `${liveCandidate.routeCode} (${liveCandidate.plateNo})`
    };
  }

  const routePath = getRoutePath(routeCode);
  if (routePath && routePath.length > 0) {
    const midpoint = routePath[Math.floor(routePath.length / 2)];
    return {
      lat: midpoint[0],
      lng: midpoint[1],
      label: `${routeCode} (Demo position)`
    };
  }

  return {
    lat: DEMO_USER_LOCATION.lat,
    lng: DEMO_USER_LOCATION.lng,
    label: `${routeCode} (${DEMO_USER_LOCATION.name} demo)`
  };
}

function renderTicketLiveTracking(routeCode) {
  if (!window.L) return;
  initializeTicketLiveMap();
  if (!ticketLiveMap) return;

  const busLocation = getTicketBusLocation(routeCode);
  const userLocation = demoTicketUserLocation;

  if (ticketBusMarker) {
    ticketLiveMap.removeLayer(ticketBusMarker);
    ticketBusMarker = null;
  }
  if (ticketUserMarker) {
    ticketLiveMap.removeLayer(ticketUserMarker);
    ticketUserMarker = null;
  }
  if (ticketGuideLine) {
    ticketLiveMap.removeLayer(ticketGuideLine);
    ticketGuideLine = null;
  }

  ticketBusMarker = window.L.circleMarker([busLocation.lat, busLocation.lng], {
    radius: 7,
    color: "#ffffff",
    weight: 2,
    fillColor: "#ff6b00",
    fillOpacity: 0.98
  }).addTo(ticketLiveMap).bindPopup(`Bus live: ${busLocation.label}`);

  ticketUserMarker = window.L.circleMarker([userLocation.lat, userLocation.lng], {
    radius: 7,
    color: "#ffffff",
    weight: 2,
    fillColor: "#124f96",
    fillOpacity: 0.98
  }).addTo(ticketLiveMap).bindPopup(`Your location: ${userLocation.name}`);

  ticketGuideLine = window.L.polyline(
    [[userLocation.lat, userLocation.lng], [busLocation.lat, busLocation.lng]],
    {
      color: "#124f96",
      weight: 3,
      opacity: 0.7,
      dashArray: "6 6"
    }
  ).addTo(ticketLiveMap);

  const bounds = window.L.latLngBounds(
    [userLocation.lat, userLocation.lng],
    [busLocation.lat, busLocation.lng]
  );
  ticketLiveMap.fitBounds(bounds.pad(0.35), { maxZoom: 13 });
  setTimeout(() => ticketLiveMap.invalidateSize(), 80);
}

function initializeTripDetailRouteMap() {
  if (!window.L || tripDetailRouteMap || !tripDetailRouteMapElement) return;
  tripDetailRouteMap = window.L.map("trip-detail-route-map", {
    zoomControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false
  }).setView([DEMO_USER_LOCATION.lat, DEMO_USER_LOCATION.lng], 10);

  window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(tripDetailRouteMap);
}

function renderTripDetailRouteHighlight(routeCode, destination) {
  if (!window.L || !tripDetailRouteMapElement) return;
  const routePath = getRoutePath(routeCode);
  if (!routePath || routePath.length < 2) return;

  initializeTripDetailRouteMap();
  if (!tripDetailRouteMap) return;

  if (tripDetailRouteLine) tripDetailRouteMap.removeLayer(tripDetailRouteLine);
  if (tripDetailRouteStart) tripDetailRouteMap.removeLayer(tripDetailRouteStart);
  if (tripDetailRouteEnd) tripDetailRouteMap.removeLayer(tripDetailRouteEnd);

  tripDetailRouteLine = window.L.polyline(routePath, {
    color: "#124f96",
    weight: 5,
    opacity: 0.92
  }).addTo(tripDetailRouteMap);

  const startPoint = routePath[0];
  const endPoint = routePath[routePath.length - 1];
  tripDetailRouteStart = window.L.circleMarker(startPoint, {
    radius: 5,
    color: "#ffffff",
    weight: 2,
    fillColor: "#ff6b00",
    fillOpacity: 1
  }).addTo(tripDetailRouteMap).bindTooltip("Pickup", { direction: "top" });
  tripDetailRouteEnd = window.L.circleMarker(endPoint, {
    radius: 5,
    color: "#ffffff",
    weight: 2,
    fillColor: "#2e7d32",
    fillOpacity: 1
  }).addTo(tripDetailRouteMap).bindTooltip(`Destination: ${destination || "Route End"}`, { direction: "top" });

  tripDetailRouteMap.fitBounds(tripDetailRouteLine.getBounds(), {
    padding: [12, 12],
    maxZoom: 12
  });
  setTimeout(() => tripDetailRouteMap.invalidateSize(), 80);
}

function openTicketPopup(data) {
  ticketTitle.textContent = "Trip Ticket";
  ticketTransaction.textContent = `TXN: ${data.transactionId}`;
  ticketRoute.textContent = `Route: ${data.routeCode}`;
  ticketFrom.textContent = `From: ${data.pickup}`;
  ticketTo.textContent = `To: ${data.destination}`;
  ticketMode.textContent = `Vehicle: ${data.mode}`;
  ticketPayment.textContent = `Payment: ${data.paymentNote ?? "-"}`;
  ticketFare.textContent = `Fare: PHP ${data.fare}`;
  ticketTime.textContent = `Time: ${data.time}`;
  ticketModal.classList.remove("hidden");
  renderTicketLiveTracking(data.routeCode);
}

function createTripRecord(params) {
  const {
    transactionId,
    routeCode,
    pickup,
    destination,
    mode,
    seats,
    paymentType,
    paymentNote,
    fare,
    timeStamp,
    status = "upcoming",
    gpsRidingDetected = false
  } = params;

  return {
    id: `TRIP-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 90 + 10)}`,
    transactionId,
    routeCode,
    pickup,
    destination,
    mode,
    seats: seats ?? [],
    paymentType,
    paymentNote,
    fare,
    status,
    gpsRidingDetected,
    bookedAt: timeStamp
  };
}

function statusChipClassForTrip(status) {
  if (status === "completed") return "fresh";
  if (status === "ongoing") return "degraded";
  if (status === "cancelled") return "stale";
  return "eta";
}

function canCancelTrip(trip) {
  return trip.status === "upcoming" && !trip.gpsRidingDetected;
}

function getPrimaryActiveTrip() {
  const ongoing = tripHistory.find((trip) => trip.status === "ongoing");
  if (ongoing) return ongoing;
  return tripHistory.find((trip) => trip.status === "upcoming") || null;
}

function getBestLiveVehicleByRoute(routeCode) {
  return vehicles.find((vehicle) => vehicle.routeCode === routeCode && vehicle.status !== "stale")
    || vehicles.find((vehicle) => vehicle.routeCode === routeCode)
    || null;
}

function clearHomeActiveRideMapOverlays() {
  if (!liveMap) return;
  if (homeActiveBusMarker) {
    liveMap.removeLayer(homeActiveBusMarker);
    homeActiveBusMarker = null;
  }
  if (homeActiveUserMarker) {
    liveMap.removeLayer(homeActiveUserMarker);
    homeActiveUserMarker = null;
  }
  if (homeActiveGuideLine) {
    liveMap.removeLayer(homeActiveGuideLine);
    homeActiveGuideLine = null;
  }
  if (homeActiveRouteLine) {
    liveMap.removeLayer(homeActiveRouteLine);
    homeActiveRouteLine = null;
  }
}

function renderHomeActiveRideTracking(trip) {
  if (!liveMap || !trip) return;

  clearHomeActiveRideMapOverlays();
  const busVehicle = getBestLiveVehicleByRoute(trip.routeCode);
  const routePath = getRoutePath(trip.routeCode) || [];

  if (routePath.length > 1) {
    homeActiveRouteLine = window.L.polyline(routePath, {
      color: "#124f96",
      weight: 4,
      opacity: 0.5
    }).addTo(liveMap);
  }

  const busLat = busVehicle?.lat ?? (routePath[0]?.[0] ?? DEMO_USER_LOCATION.lat);
  const busLng = busVehicle?.lng ?? (routePath[0]?.[1] ?? DEMO_USER_LOCATION.lng);
  const userLat = DEMO_USER_LOCATION.lat;
  const userLng = DEMO_USER_LOCATION.lng;

  homeActiveBusMarker = window.L.circleMarker([busLat, busLng], {
    radius: 7,
    color: "#ffffff",
    weight: 2,
    fillColor: "#ff6b00",
    fillOpacity: 0.98
  }).addTo(liveMap).bindPopup(`Bus live: ${trip.routeCode}`);

  homeActiveUserMarker = window.L.circleMarker([userLat, userLng], {
    radius: 7,
    color: "#ffffff",
    weight: 2,
    fillColor: "#124f96",
    fillOpacity: 0.98
  }).addTo(liveMap).bindPopup(`Your location: ${DEMO_USER_LOCATION.name}`);

  if (trip.status !== "ongoing") {
    homeActiveGuideLine = window.L.polyline(
      [[userLat, userLng], [busLat, busLng]],
      { color: "#124f96", weight: 2.5, opacity: 0.7, dashArray: "5 6" }
    ).addTo(liveMap);
  }

  if (trip.status === "ongoing") {
    liveMap.setView([busLat, busLng], 14, { animate: false });
  } else {
    const activeBounds = window.L.latLngBounds([[userLat, userLng], [busLat, busLng]]);
    liveMap.fitBounds(activeBounds.pad(0.35), { maxZoom: 13 });
  }
}

function finalizeSeatBooking(params) {
  const {
    route,
    selected,
    paymentType,
    paymentNote,
    fare,
    timeStamp
  } = params;

  ensureRouteSeatSet(selectedRouteKey);
  const bookedSet = bookedSeatMap.get(selectedRouteKey);
  selected.forEach((seat) => {
    selectedSeats.delete(seat);
    bookedSet.add(seat);
  });
  const routeCodeForSync = route?.routeCode || routeCodeFromRouteKey(selectedRouteKey);
  if ((bookingMode || route?.mode) === "bus" && routeCodeForSync) {
    syncVehicleBusOccupancyFromSeatMap(routeCodeForSync);
  }

  const transactionId = `TXN-${Date.now().toString().slice(-6)}`;
  tripHistory.unshift(createTripRecord({
    transactionId,
    routeCode: route?.routeCode ?? "ROUTE",
    pickup: route?.pickup ?? (pickupStopElement.value || "Pickup"),
    destination: route?.destination ?? (destinationStopElement.value || "Destination"),
    mode: bookingMode || route?.mode || "bus",
    seats: selected,
    paymentType,
    paymentNote,
    fare,
    timeStamp
  }));
  transactionHistory.unshift({
    title: route?.routeCode ?? "ROUTE",
    subtitle: `PHP ${fare} | ${paymentType} | confirmed`,
    amount: fare
  });

  renderSeatGrid();
  updateSeatBookingSummary();
  renderDashboard();
  applyFilters();
  bookingResultElement.textContent = `Booked ${modeLabel(bookingMode)} seats ${selected.join(", ")}. Fare PHP ${fare}.`;
  openTicketPopup({
    transactionId,
    routeCode: route?.routeCode ?? "ROUTE",
    pickup: route?.pickup ?? (pickupStopElement.value || "Pickup"),
    destination: route?.destination ?? (destinationStopElement.value || "Destination"),
    mode: modeLabel(bookingMode || route?.mode || "bus"),
    paymentNote,
    fare,
    time: timeStamp
  });
}

function choosePickupFromMap() {
  openMapSelectionPage("pickup");
  tripPlanResultElement.textContent = "Tap on a road, place a pin, then confirm pickup point.";
  updatePlanCTAState();
}

function openTripDetailModal(tripId) {
  const trip = tripHistory.find((item) => item.id === tripId);
  if (!trip) return;
  selectedTripId = tripId;
  tripDetailTitle.textContent = `${trip.routeCode} Ticket`;
  tripDetailStatus.textContent = `Status: ${trip.status}`;
  tripDetailRoute.textContent = `Route: ${trip.routeCode}`;
  tripDetailFrom.textContent = `From: ${trip.pickup}`;
  tripDetailTo.textContent = `To: ${trip.destination}`;
  tripDetailMode.textContent = `Vehicle: ${modeLabel(trip.mode)}`;
  tripDetailSeats.textContent = `Seats: ${trip.seats.length > 0 ? trip.seats.join(", ") : "Not seat-assigned"}`;
  tripDetailPayment.textContent = `Payment: ${trip.paymentNote || trip.paymentType || "-"}`;
  tripDetailFare.textContent = `Fare: PHP ${trip.fare}`;
  tripDetailTime.textContent = `Booked: ${trip.bookedAt}`;
  tripDetailGps.textContent = `Ride GPS: ${trip.gpsRidingDetected ? "Onboard detected" : "Not onboard yet"}`;
  const allowStandardCancel = canCancelTrip(trip);
  const allowDemoOngoingCancel = trip.status === "ongoing";
  const canShowCancel = allowStandardCancel || allowDemoOngoingCancel;
  tripCancelButton.classList.toggle("hidden", !canShowCancel);
  tripCancelButton.classList.toggle("tiny-demo", allowDemoOngoingCancel && !allowStandardCancel);
  tripCancelButton.dataset.action = allowDemoOngoingCancel && !allowStandardCancel ? "hide" : "cancel";
  tripCancelButton.textContent = allowDemoOngoingCancel && !allowStandardCancel
    ? "Hide Ticket"
    : "Cancel Ride";
  tripDetailModal.classList.remove("hidden");
  renderTripDetailRouteHighlight(trip.routeCode, trip.destination);
}

function renderTripCategory(listElement, status, emptyMessage) {
  listElement.innerHTML = "";
  const items = tripHistory.filter((trip) => trip.status === status).slice(0, 8);
  if (items.length === 0) {
    const li = document.createElement("li");
    li.className = "dashboard-item";
    li.innerHTML = `<div class="dashboard-item-sub">${emptyMessage}</div>`;
    listElement.appendChild(li);
    return;
  }

  items.forEach((trip) => {
    const li = document.createElement("li");
    li.className = "dashboard-item trip-clickable";
    li.innerHTML = `
      <div class="dashboard-item-top">
        <span class="dashboard-item-title">${trip.routeCode} | ${trip.pickup} -> ${trip.destination}</span>
        <span class="chip ${statusChipClassForTrip(trip.status)}">${trip.status}</span>
      </div>
      <div class="dashboard-item-sub">${modeLabel(trip.mode)} | ${trip.bookedAt}</div>
    `;
    li.addEventListener("click", () => openTripDetailModal(trip.id));
    listElement.appendChild(li);
  });
}

function updateHomeRideNotice() {
  if (!homeRideNoticeElement) return;
  const ongoingTrips = tripHistory.filter((trip) => trip.status === "ongoing");
  const upcomingTrips = tripHistory.filter((trip) => trip.status === "upcoming");
  const activeCount = ongoingTrips.length + upcomingTrips.length;
  const primaryTrip = getPrimaryActiveTrip();

  if (activeCount === 0) {
    homeRideNoticeElement.classList.remove("hidden");
    homeRideNoticeElement.dataset.tripId = "";
    clearHomeActiveRideMapOverlays();
    homeRideNoticeTitleElement.textContent = "No active ride";
    homeRideNoticeBadgeElement.textContent = "Idle";
    homeRideNoticeCopyElement.textContent = "Plan your next trip below.";
    trackingStatusElement.textContent = `Demo Tracking: ON (${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}) | Showing: ${trackingCategoryLabel()}`;
    return;
  }

  renderHomeActiveRideTracking(primaryTrip);

  const isOngoing = primaryTrip.status === "ongoing";
  homeRideNoticeElement.classList.remove("hidden");
  homeRideNoticeElement.dataset.tripId = primaryTrip.id;
  homeRideNoticeTitleElement.textContent = isOngoing
    ? "You have an ongoing ride"
    : "You have an upcoming ride";
  homeRideNoticeBadgeElement.textContent = isOngoing ? "Ongoing" : "Upcoming";
  homeRideNoticeBadgeElement.classList.toggle("fresh", isOngoing);
  homeRideNoticeBadgeElement.classList.toggle("degraded", !isOngoing);
  homeRideNoticeCopyElement.textContent = activeCount > 1
    ? `${activeCount} active rides found. Latest: ${primaryTrip.routeCode} to ${primaryTrip.destination}.`
    : `${primaryTrip.routeCode} from ${primaryTrip.pickup} to ${primaryTrip.destination}. Check Activity for details.`;
  trackingStatusElement.textContent = isOngoing
    ? `Ride Tracking: Ongoing | User pin fixed at SM Consolacion | Showing: ${trackingCategoryLabel()}`
    : `Ride Tracking: Upcoming | Bus location is live for ${primaryTrip.routeCode} | Showing: ${trackingCategoryLabel()}`;
}

function renderDashboard() {
  const activeTrips = tripHistory.filter((trip) => trip.status === "upcoming" || trip.status === "ongoing").length;
  const completedTrips = tripHistory.filter((trip) => trip.status === "completed").length;
  metricActiveTripsElement.textContent = String(activeTrips);
  metricCompletedTripsElement.textContent = String(completedTrips);
  metricTransactionsElement.textContent = String(transactionHistory.length);

  renderTripCategory(tripUpcomingListElement, "upcoming", "No upcoming trips yet.");
  renderTripCategory(tripOngoingListElement, "ongoing", "No ongoing trips right now.");
  renderTripCategory(tripCompletedListElement, "completed", "No completed trips yet.");
  renderTripCategory(tripCancelledListElement, "cancelled", "No cancelled bookings yet.");

  transactionListElement.innerHTML = "";
  transactionHistory.slice(0, 8).forEach((txn) => {
    const li = document.createElement("li");
    li.className = "dashboard-item";
    li.innerHTML = `
      <div class="dashboard-item-top">
        <span class="dashboard-item-title">${txn.title}</span>
        <span class="dashboard-item-title">PHP ${txn.amount}</span>
      </div>
      <div class="dashboard-item-sub">${txn.subtitle}</div>
    `;
    transactionListElement.appendChild(li);
  });

  updateHomeRideNotice();
}

async function bookSeats() {
  if (!selectedRouteKey) {
    bookingResultElement.textContent = "Pick a destination and route first.";
    return;
  }
  if (selectedSeats.size === 0) {
    bookingResultElement.textContent = "Select at least one seat first.";
    return;
  }

  const route = routeCatalog.find((item) => item.key === selectedRouteKey);
  const selected = Array.from(selectedSeats);
  const paymentType = paymentMethodElement.value;
  const farePerSeat = route?.baseFare ?? (bookingMode === "bus" ? 180 : 35);
  const fare = selected.length * farePerSeat;
  const timeStamp = new Date().toLocaleString();

  bookingResultElement.textContent = `Booking ${selected.join(", ")}...`;
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (paymentType === "cash") {
    finalizeSeatBooking({
      route,
      selected,
      paymentType,
      paymentNote: "Payment to bus conductor",
      fare,
      timeStamp
    });
    return;
  }

  pendingDigitalBooking = {
    route,
    selected,
    paymentType,
    fare,
    timeStamp
  };
  selectedWallet = "";
  walletLinkingNote.textContent = "";
  walletContinueButton.disabled = true;
  walletModal.classList.remove("hidden");
}

function applyFilters() {
  const filtered = getFilteredVehicles();
  renderMapMarkers(filtered);
  renderDemoUserLocationMarkers();
  renderVehicleList(filtered);
  renderTrackingActiveRideOverlay();
  updateHomeRideNotice();
}

function getFilteredVehicles() {
  const hasActiveRide = Boolean(getPrimaryActiveTrip());
  const keyword = searchInput.value.trim().toLowerCase();
  const normalizedKeyword = normalizeSearchText(keyword);
  return vehicles.filter((vehicle) => {
    if (trackingCategory && vehicle.vehicleType !== trackingCategory) return false;
    if (hasActiveRide) return true;
    if (!keyword) return true;

    if (selectedSearchSuggestion) {
      const selectedRouteCodes = resolveRouteCodesForSuggestion(selectedSearchSuggestion);
      return selectedRouteCodes.includes(vehicle.routeCode);
    }

    if (searchSuggestedRouteCodes.length > 0) {
      return searchSuggestedRouteCodes.includes(vehicle.routeCode);
    }

    const routeText = normalizeSearchText(`${vehicle.routeCode} ${vehicle.routeName}`);
    return routeText.includes(normalizedKeyword);
  });
}

function setTrackingCategory(category) {
  trackingCategory = category;
  trackBusButton.classList.toggle("active", category === "bus");
  trackJeepButton.classList.toggle("active", category === "jeep");
  liveBusButton.classList.toggle("active", category === "bus");
  liveJeepButton.classList.toggle("active", category === "jeep");
  popupTrackBusButton.classList.toggle("active", category === "bus");
  popupTrackJeepButton.classList.toggle("active", category === "jeep");
  updateMapOverlayTrackLabel();
  applyFilters();
}

function updateTripLifecycleFromDemoGps() {
  let updated = false;
  tripHistory.forEach((trip) => {
    if (trip.status === "upcoming" && !trip.gpsRidingDetected && Math.random() < 0.02) {
      trip.gpsRidingDetected = true;
      trip.status = "ongoing";
      updated = true;
    } else if (trip.status === "ongoing" && Math.random() < 0.015) {
      trip.status = "completed";
      updated = true;
    }
  });
  if (updated) renderDashboard();
}

function refreshVehicleTelemetry() {
  vehicles = vehicles.map((vehicle) => {
    const roll = Math.random();
    let status = vehicle.status;
    if (roll < 0.08) status = "stale";
    else if (roll < 0.28) status = "degraded";
    else status = "fresh";

    return {
      ...vehicle,
      status,
      etaMinutes: status === "stale" ? null : Math.floor(Math.random() * 12) + 3,
      etaConfidence: status === "degraded" ? "Medium" : "High",
      routeSpeed: clamp(
        (typeof vehicle.routeSpeed === "number" ? vehicle.routeSpeed : getVehicleProgressSpeedPerSecond(vehicle))
        * (0.94 + Math.random() * 0.12),
        vehicle.vehicleType === "bus" ? 0.0022 : 0.0030,
        vehicle.vehicleType === "bus" ? 0.0060 : 0.0082
      )
    };
  });
  updatedAtElement.textContent = `Updated ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  if (trackingStatusElement) {
    trackingStatusElement.textContent = `Demo Tracking: ON (${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}) | Showing: ${trackingCategoryLabel()}`;
  }
  updateTripLifecycleFromDemoGps();
  applyFilters();
  if (mapOverlayOpen && mapSelectionMode === "pickup") {
    renderFullMapVehicleMarkers();
  }
}

function stepVehiclesSmooth(deltaSeconds) {
  if (!Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return;
  vehicles = vehicles.map((vehicle) => {
    const path = getRoutePath(vehicle.routeCode);
    const hasRoutePath = Array.isArray(path) && path.length > 1;
    if (!hasRoutePath) return vehicle;

    const speed = typeof vehicle.routeSpeed === "number"
      ? vehicle.routeSpeed
      : getVehicleProgressSpeedPerSecond(vehicle);
    let routeDirection = vehicle.routeDirection === -1 ? -1 : 1;
    let routeProgress = typeof vehicle.routeProgress === "number"
      ? vehicle.routeProgress
      : Math.random();

    routeProgress += speed * deltaSeconds * routeDirection;
    if (routeProgress >= 1) {
      routeProgress = 1;
      routeDirection = -1;
    } else if (routeProgress <= 0) {
      routeProgress = 0;
      routeDirection = 1;
    }

    const currentPoint = interpolateRoutePoint(path, routeProgress);
    const lookAheadPoint = interpolateRoutePoint(path, clamp(routeProgress + 0.012 * routeDirection, 0, 1));
    return {
      ...vehicle,
      routeProgress,
      routeDirection,
      lat: currentPoint[0],
      lng: currentPoint[1],
      headingDeg: headingFromPoints(currentPoint, lookAheadPoint)
    };
  });
}

function runTrackingFrame(nowTs = 0) {
  if (!trackingAnimationLastTs) {
    trackingAnimationLastTs = nowTs;
  }
  const deltaSeconds = Math.min(0.08, Math.max(0.008, (nowTs - trackingAnimationLastTs) / 1000));
  trackingAnimationLastTs = nowTs;

  stepVehiclesSmooth(deltaSeconds);

  const filtered = getFilteredVehicles();
  if ((nowTs - trackingLastMapRenderTs) >= 33) {
    renderMapMarkers(filtered);
    renderDemoUserLocationMarkers();
    renderTrackingActiveRideOverlay();
    if (mapOverlayOpen && mapSelectionMode === "pickup") {
      renderFullMapVehicleMarkers();
    }
    trackingLastMapRenderTs = nowTs;
  }

  if ((nowTs - trackingLastListRenderTs) >= 1200) {
    renderVehicleList(filtered);
    updateHomeRideNotice();
    trackingLastListRenderTs = nowTs;
  }

  trackingAnimationRaf = window.requestAnimationFrame(runTrackingFrame);
}

function startSmoothTracking() {
  if (trackingAnimationRaf) return;
  trackingAnimationLastTs = 0;
  trackingLastMapRenderTs = 0;
  trackingLastListRenderTs = 0;
  trackingAnimationRaf = window.requestAnimationFrame(runTrackingFrame);
}

function tickDemoTracking() {
  // Manual refresh hook from refresh button.
  refreshVehicleTelemetry();
}

function showPromoModal() {
  if (guidedTutorialActive) return;
  const randomPromo = promoMessages[Math.floor(Math.random() * promoMessages.length)];
  promoTitleElement.textContent = randomPromo.title;
  promoCopyElement.textContent = randomPromo.copy;
  promoModalElement.classList.remove("hidden");
}

function hidePromoModal() {
  promoModalElement.classList.add("hidden");
}

function showQuickAdToast() {
  if (guidedTutorialActive) return;
  const ad = commercialSlots[Math.floor(Math.random() * commercialSlots.length)];
  quickAdToastElement.textContent = `Partner promo: ${ad.title}`;
  quickAdToastElement.classList.remove("hidden");
  setTimeout(() => quickAdToastElement.classList.add("hidden"), 2600);
}

function clearScheduledIntroPromos() {
  if (promoModalTimeoutId) {
    clearTimeout(promoModalTimeoutId);
    promoModalTimeoutId = null;
  }
  if (quickAdToastTimeoutId) {
    clearTimeout(quickAdToastTimeoutId);
    quickAdToastTimeoutId = null;
  }
}

function scheduleIntroPromos() {
  clearScheduledIntroPromos();
  promoModalTimeoutId = setTimeout(() => {
    promoModalTimeoutId = null;
    showPromoModal();
  }, 900);
  quickAdToastTimeoutId = setTimeout(() => {
    quickAdToastTimeoutId = null;
    showQuickAdToast();
  }, 2500);
}

function closeTripDetailModal() {
  tripDetailModal.classList.add("hidden");
  selectedTripId = "";
}

function cancelSelectedTrip() {
  if (!selectedTripId) return;
  const index = tripHistory.findIndex((trip) => trip.id === selectedTripId);
  if (index < 0) return;
  const trip = tripHistory[index];
  if (tripCancelButton?.dataset.action === "hide") {
    activityResultElement.textContent = "Ticket hidden. Ride is still active.";
    closeTripDetailModal();
    return;
  }
  if (!canCancelTrip(trip) && trip.status !== "ongoing") return;
  trip.status = "cancelled";
  trip.gpsRidingDetected = false;
  trip.cancelledAt = new Date().toLocaleString();
  transactionHistory.unshift({
    title: trip.routeCode,
    subtitle: `Booking cancelled | ${trip.cancelledAt}`,
    amount: 0
  });
  activityResultElement.textContent = `${trip.routeCode} booking moved to Cancelled.`;
  closeTripDetailModal();
  renderDashboard();
  applyFilters();
}

// Bind onboarding/auth flow first so it always works even if later UI listeners fail.
if (continueButton) continueButton.addEventListener("click", showAuthScreen);
if (authSignInButton) authSignInButton.addEventListener("click", () => setAuthMode("signin"));
if (authCreateButton) authCreateButton.addEventListener("click", () => setAuthMode("create"));
if (googleAuthButton) googleAuthButton.addEventListener("click", handleGoogleAuth);
if (phoneAuthButton) phoneAuthButton.addEventListener("click", handlePhoneAuth);
if (verifyButton) verifyButton.addEventListener("click", verifyAndContinue);

searchInput?.addEventListener("input", handleSearchInput);
searchInput?.addEventListener("keydown", handleSearchKeyDown);
refreshButton?.addEventListener("click", tickDemoTracking);
bookSeatButton?.addEventListener("click", bookSeats);
findRouteButton?.addEventListener("click", findBestRoute);
chooseMapPickupButton?.addEventListener("click", choosePickupFromMap);
modeJeepButton?.addEventListener("click", () => {
  setBookingMode(bookingMode === "jeep" ? "" : "jeep");
});
modeBusButton?.addEventListener("click", () => {
  setBookingMode(bookingMode === "bus" ? "" : "bus");
});
pickupStopElement?.addEventListener("change", updatePlanCTAState);
destinationStopElement?.addEventListener("change", updatePlanCTAState);
mapBackButton?.addEventListener("click", () => closeMapSelectionOverlay());
mapBackHomeButton?.addEventListener("click", () => closeMapSelectionOverlay("home"));
mapConfirmBookingButton?.addEventListener("click", () => {
  if (mapSelectionMode === "pickup") {
    if (!selectedMapPickupPoint?.nearest?.name) return;
    pickupStopElement.value = selectedMapPickupPoint.nearest.name;
    tripPlanResultElement.textContent = `Pickup confirmed: ${selectedMapPickupPoint.nearest.name}. Now select destination.`;
    mapConfirmSheet.classList.add("hidden");
    closeMapSelectionOverlay("home");
    updatePlanCTAState();
    return;
  }

  if (!selectedMapPlace) return;
  const pickup = pickupStopElement.value || "Cebu City - Fuente Osmena (N8)";
  const destination = selectedMapPlace;
  const route = resolveRouteMatch(pickup, destination);
  const effectiveMode = route?.mode ?? (bookingMode || "bus");
  const routeCode = route?.routeCode ?? "BUS-CEB-DEMO";
  const fare = route?.baseFare ?? 180;
  const transactionId = `TXN-${Date.now().toString().slice(-6)}`;
  const timeText = new Date().toLocaleString();

  setBookingMode(effectiveMode);
  selectedRouteKey = route?.key ?? "";
  destinationStopElement.value = destination;
  tripPlanResultElement.textContent = `Booking confirmed for ${destination}. Ticket generated.`;
  updatePlanCTAState();

  tripHistory.unshift(createTripRecord({
    transactionId,
    routeCode,
    pickup,
    destination,
    mode: effectiveMode,
    seats: [],
    paymentType: "cash",
    paymentNote: "Payment to bus conductor",
    fare,
    timeStamp: timeText
  }));
  transactionHistory.unshift({
    title: routeCode,
    subtitle: `PHP ${fare} | ${effectiveMode} | confirmed`,
    amount: fare
  });
  renderDashboard();

  openTicketPopup({
    transactionId,
    routeCode,
    pickup,
    destination,
    mode: modeLabel(effectiveMode),
    fare,
    time: timeText
  });
  closeMapSelectionOverlay("home");
});
mapSearchInput?.addEventListener("input", (event) => {
  renderMapDestinationList(event.target.value);
});
mapSearchInput?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const keyword = mapSearchInput.value.trim().toLowerCase();
  if (!keyword) {
    mapPlaceList.classList.add("hidden");
    return;
  }
  if (mapSelectionMode === "pickup") {
    const match = pickupMapPoints.find((point) => point.name.toLowerCase().includes(keyword));
    if (!match) return;
    placePickupPinOnMap(match.lat, match.lng);
    if (fullMap) fullMap.setView([match.lat, match.lng], 13, { animate: true });
    return;
  }

  const destination = mapDestinations.find((place) => place.name.toLowerCase().includes(keyword));
  if (!destination) return;
  selectDestinationFromMap(destination.name);
  if (fullMap) fullMap.setView([destination.lat, destination.lng], 12, { animate: true });
});
document.addEventListener("click", (event) => {
  if (!searchAutocompleteWrapElement) return;
  if (!searchAutocompleteWrapElement.contains(event.target)) {
    hideSearchSuggestionsDropdown();
  }
});
trackBusButton?.addEventListener("click", () => setTrackingCategory("bus"));
trackJeepButton?.addEventListener("click", () => setTrackingCategory("jeep"));
liveBusButton?.addEventListener("click", () => setTrackingCategory("bus"));
liveJeepButton?.addEventListener("click", () => setTrackingCategory("jeep"));
popupTrackBusButton?.addEventListener("click", () => setTrackingCategory("bus"));
popupTrackJeepButton?.addEventListener("click", () => setTrackingCategory("jeep"));
trackingCloseButton?.addEventListener("click", closeTrackingModal);
trackingModal?.addEventListener("click", (event) => {
  if (event.target === trackingModal) closeTrackingModal();
});
compactSearchButton?.addEventListener("click", () => {
  setPage("home");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => searchInput?.focus(), 220);
});

navHome?.addEventListener("click", () => setPage("home"));
navActivity?.addEventListener("click", () => setPage("activity"));
navUser?.addEventListener("click", () => setPage("user"));
backHomeButton?.addEventListener("click", () => setPage("home"));
bottomNav?.addEventListener("pointerdown", handleBottomNavPointerDown);
bottomNav?.addEventListener("pointermove", handleBottomNavPointerMove);
bottomNav?.addEventListener("pointerup", handleBottomNavPointerEnd);
bottomNav?.addEventListener("pointercancel", handleBottomNavPointerEnd);
bottomNav?.addEventListener("click", handleBottomNavClickCapture, true);
bottomNav?.addEventListener("focusin", scheduleBottomNavIdle);
bottomNav?.addEventListener("mouseenter", scheduleBottomNavIdle);

bottomNav?.addEventListener("click", (event) => {
  scheduleBottomNavIdle();
  const tapped = event.target.closest(".nav-btn");
  if (!tapped) return;
  if (tapped.id === "nav-home") setPage("home");
  if (tapped.id === "nav-activity") setPage("activity");
  if (tapped.id === "nav-user") setPage("user");
});

promoCloseButton.addEventListener("click", hidePromoModal);
promoCtaButton.addEventListener("click", hidePromoModal);
promoModalElement.addEventListener("click", (event) => {
  if (event.target === promoModalElement) hidePromoModal();
});

epaymentLinkButton.addEventListener("click", () => {
  userActionResultElement.textContent = "Opening E-Payment options (cards, wallets, and payment links).";
});

languageButton.addEventListener("click", () => {
  userActionResultElement.textContent = "Language settings opened. Current language: English.";
});

savedPlacesButton.addEventListener("click", () => {
  userActionResultElement.textContent = "Saved Places opened. Add home, work, and favorite terminals.";
});

themeToggleButton?.addEventListener("click", () => {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  userActionResultElement.textContent = `Theme changed to ${nextTheme} mode.`;
});

supportCenterButton.addEventListener("click", () => {
  userActionResultElement.textContent = "Support Center opened. Choose Help, Report Issue, or Contact Us.";
});

homeRideNoticeElement.addEventListener("click", () => {
  const tripId = homeRideNoticeElement.dataset.tripId || "";
  if (!tripId) return;
  openTripDetailModal(tripId);
});
homeRideNoticeElement.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  const tripId = homeRideNoticeElement.dataset.tripId || "";
  if (!tripId) return;
  openTripDetailModal(tripId);
});

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("bussin_auth");
  localStorage.removeItem("bussin_name");
  authNameInput.value = "";
  phoneNumberInput.value = "";
  authResultElement.textContent = "";
  userActionResultElement.textContent = "";
  showAuthScreen();
});

welcomeContinueButton.addEventListener("click", () => {
  welcomeModal.classList.add("hidden");
  showApp();
  if (shouldShowPostSignupTutorial) {
    shouldShowPostSignupTutorial = false;
    openTutorial();
  }
});
ticketCloseButton.addEventListener("click", () => {
  ticketModal.classList.add("hidden");
});
ticketActivityButton.addEventListener("click", () => {
  ticketModal.classList.add("hidden");
  setPage("activity");
});
tripDetailCloseButton.addEventListener("click", closeTripDetailModal);
tripCancelButton.addEventListener("click", cancelSelectedTrip);
tripDetailModal.addEventListener("click", (event) => {
  if (event.target === tripDetailModal) closeTripDetailModal();
});
tutorialSkipButton.addEventListener("click", closeTutorial);
tutorialBackButton.addEventListener("click", () => {
  if (guidedTutorialActive && tutorialStepIndex > 0) {
    tutorialStepIndex -= 1;
    renderTutorialStep();
    return;
  }
  closeTutorial();
});
tutorialNextButton.addEventListener("click", () => {
  if (guidedTutorialActive && tutorialStepIndex < guidedTutorialSteps.length - 1) {
    tutorialStepIndex += 1;
    renderTutorialStep();
    return;
  }
  if (!guidedTutorialActive) {
    openTutorial();
    return;
  }
  if (tutorialStepIndex >= guidedTutorialSteps.length - 1) {
    closeGuidedTutorial({ markCompleted: true, returnHome: true });
    return;
  }
});
walletButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedWallet = button.dataset.wallet || "";
    walletLinkingNote.textContent = `Linking notice: Connecting to ${selectedWallet}...`;
    walletContinueButton.disabled = !selectedWallet;
  });
});
walletCancelButton.addEventListener("click", () => {
  walletModal.classList.add("hidden");
  pendingDigitalBooking = null;
  walletLinkingNote.textContent = "";
  selectedWallet = "";
});
walletContinueButton.addEventListener("click", () => {
  if (!pendingDigitalBooking || !selectedWallet) return;
  walletModal.classList.add("hidden");
  finalizeSeatBooking({
    ...pendingDigitalBooking,
    paymentNote: `Linking notice to ${selectedWallet}`
  });
  pendingDigitalBooking = null;
  walletLinkingNote.textContent = "";
  selectedWallet = "";
});

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try {
    const registration = await navigator.serviceWorker.register("./sw.js?v=20260309-02", { scope: "./" });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (window.__bussinSwReloaded) return;
      window.__bussinSwReloaded = true;
      window.location.reload();
    });
    if (registration.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
    }
    registration.update();
  } catch (error) {
    console.warn("Service worker registration failed:", error);
  }
}

async function enforceBuildRefresh() {
  const previousBuild = localStorage.getItem("bussin_build_id");
  if (previousBuild === APP_BUILD_ID) return;
  localStorage.setItem("bussin_build_id", APP_BUILD_ID);
  if (!previousBuild) return;
  try {
    if ("caches" in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter((name) => name.startsWith("bussin-shell-"))
          .map((name) => caches.delete(name))
      );
    }
  } catch (error) {
    console.warn("Build cache refresh failed:", error);
  }
  window.location.reload();
}

async function initializeApp() {
  await enforceBuildRefresh();
  initializeTheme();
  initializeGuidedTutorialUI();
  await registerServiceWorker();
  initializeMap();
  await hydrateRoadSnappedRoutes();
  vehicles = vehicles.map((vehicle) => placeVehicleOnRoute(vehicle, vehicle.routeProgress ?? Math.random()));
  renderAdSlots();
  populateStopSelectors();
  await loadSearchDatabase();
  setBookingMode("");
  setTrackingCategory("bus");
  renderDashboard();
  applyFilters();
  setAuthMode("signin");
  updatePlanCTAState();
  updateSeatBookingSummary();

  if (localStorage.getItem("bussin_auth") === "true") showApp();
  else showOnboarding();

  startSmoothTracking();
  refreshVehicleTelemetry();
  setInterval(refreshVehicleTelemetry, 5000);
  window.addEventListener("scroll", () => {
    toggleCompactTopbar();
    handleBottomNavViewportResize();
  }, { passive: true });
  window.addEventListener("resize", () => {
    syncHeroCollapseTarget();
    handleBottomNavViewportResize();
  });
}

initializeApp();
