type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "click_to_call"
  | "click_email"
  | "map_click"
  | "form_submit_start"
  | "form_submit_success"
  | "form_submit_blocked"
  | "lead_source_captured"
  | "thank_you_view"
  | "scroll_50"
  | "scroll_90";

type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;
const analyticsEnabled = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js",
      eventNameOrId: string | Date,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

function sanitizeParams(params: AnalyticsParams) {
  return Object.entries(params).reduce<Record<string, string | number | boolean>>((acc, [key, value]) => {
    if (value === null || value === undefined) {
      return acc;
    }

    acc[key] = value;
    return acc;
  }, {});
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !analyticsEnabled) {
    return;
  }

  if (typeof window.gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function queuedGtag() {
      // Match Google's queueing snippet, which intentionally stores the function arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  window.gtag("event", eventName, sanitizeParams(params));
}

export function derivePageType(pathname: string) {
  if (pathname === "/") {
    return "home";
  }

  const segments = pathname.split("/").filter(Boolean);
  const rootSegment = segments[0] ?? "";
  const secondSegment = segments[1] ?? "";
  const isMarketSubpillar =
    segments.length === 2 &&
    (secondSegment === "criminal-defense" || secondSegment === "personal-injury") &&
    !["practice", "criminal-defense", "personal-injury", "resources"].includes(rootSegment);

  if (isMarketSubpillar) {
    return "location_service";
  }

  if (pathname.startsWith("/practice/criminal-defense")) {
    return "service_criminal";
  }

  if (pathname.startsWith("/criminal-defense")) {
    return "service_criminal";
  }

  if (pathname.startsWith("/practice/personal-injury")) {
    return "service_personal_injury";
  }

  if (pathname.startsWith("/personal-injury")) {
    return "service_personal_injury";
  }

  if (pathname.startsWith("/practice")) {
    return "practice_hub";
  }

  if (pathname === "/contact") {
    return "contact";
  }

  if (pathname === "/attorney") {
    return "attorney";
  }

  if (pathname === "/case-results" || pathname === "/client-reviews" || pathname === "/fees") {
    return "trust";
  }

  if (pathname === "/locations") {
    return "location_hub";
  }

  if (pathname.startsWith("/resources")) {
    return "resource";
  }

  if (
    pathname === "/oklahoma-city" ||
    pathname === "/norman" ||
    pathname === "/moore" ||
    pathname === "/edmond" ||
    pathname === "/midwest-city" ||
    pathname === "/del-city" ||
    pathname === "/yukon" ||
    pathname === "/mustang"
  ) {
    return "location";
  }

  if (pathname === "/privacy" || pathname === "/terms") {
    return "legal";
  }

  if (pathname === "/success") {
    return "conversion_success";
  }

  return "other";
}
