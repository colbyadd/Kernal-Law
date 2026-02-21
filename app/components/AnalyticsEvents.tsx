"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { derivePageType, trackEvent } from "@/lib/analytics";

function isMapUrl(url: string) {
  return (
    url.includes("maps.google.") ||
    url.includes("google.com/maps") ||
    url.includes("google.com/maps/") ||
    url.includes("maps.app.goo.gl")
  );
}

export function AnalyticsEvents() {
  const pathname = usePathname();
  const pageType = derivePageType(pathname);

  useEffect(() => {
    trackEvent("page_view", {
      page_path: pathname,
      page_type: pageType,
    });
  }, [pathname, pageType]);

  useEffect(() => {
    let hasTracked50 = false;
    let hasTracked90 = false;

    const onScrollDepth = () => {
      const doc = document.documentElement;
      const scrollableHeight = doc.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const depth = (window.scrollY / scrollableHeight) * 100;

      if (!hasTracked50 && depth >= 50) {
        hasTracked50 = true;
        trackEvent("scroll_50", {
          page_path: pathname,
          page_type: pageType,
        });
      }

      if (!hasTracked90 && depth >= 90) {
        hasTracked90 = true;
        trackEvent("scroll_90", {
          page_path: pathname,
          page_type: pageType,
        });
      }
    };

    onScrollDepth();
    window.addEventListener("scroll", onScrollDepth, { passive: true });
    return () => window.removeEventListener("scroll", onScrollDepth);
  }, [pathname, pageType]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const ctaElement = target.closest<HTMLElement>("[data-cta]");
      if (ctaElement) {
        trackEvent("cta_click", {
          cta_name: ctaElement.dataset.cta ?? "unknown_cta",
          page_path: pathname,
          page_type: pageType,
        });
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("click_to_call", {
          page_path: pathname,
          page_type: pageType,
          destination: href.replace("tel:", ""),
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("click_email", {
          page_path: pathname,
          page_type: pageType,
          destination: href.replace("mailto:", ""),
        });
        return;
      }

      if (isMapUrl(href)) {
        trackEvent("map_click", {
          page_path: pathname,
          page_type: pageType,
          destination: href,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, pageType]);

  return null;
}
