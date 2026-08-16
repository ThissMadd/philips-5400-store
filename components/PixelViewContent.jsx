"use client";

import { useEffect } from "react";

export default function PixelViewContent() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.fbq) return;
    window.fbq("track", "ViewContent", {
      content_name: "Philips 5400 Series LatteGo",
      content_type: "product",
      content_ids: ["philips-5400-series"],
      value: 74.99,
      currency: "EUR",
    });
  }, []);

  return null;
}
