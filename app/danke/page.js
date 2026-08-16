"use client";

import { useEffect } from "react";

export default function DankePage() {
  useEffect(() => {
    if (typeof window === "undefined" || !window.fbq) return;
    window.fbq("track", "Purchase", {
      currency: "EUR",
    });
  }, []);

  return (
    <main className="danke-page">
      <div className="wrap">
        <div className="danke-box">
          <div className="danke-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <p className="eyebrow">Bestellung bestätigt</p>
          <h2>Vielen Dank für deine Bestellung!</h2>
          <p className="muted">
            Wir haben deine Zahlung erhalten und bereiten deine Lieferung vor. Du erhältst in
            Kürze eine Bestätigung per E&#8209;Mail mit allen Details.
          </p>

          <div className="danke-steps">
            <div className="trust-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <strong>E-Mail-Bestätigung</strong>
              <span>Rechnung &amp; Details per Mail</span>
            </div>
            <div className="trust-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="1" y="7" width="14" height="10" rx="1.5" />
                <path d="M15 10h4l3 3v4h-7z" />
                <circle cx="6" cy="19" r="1.6" />
                <circle cx="18" cy="19" r="1.6" />
              </svg>
              <strong>Schnelle Lieferung</strong>
              <span>2–3 Werktage</span>
            </div>
            <div className="trust-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5" />
                <path d="M12 17h.01" />
              </svg>
              <strong>Fragen?</strong>
              <span>Support schnell erreichbar</span>
            </div>
          </div>

          <a href="/" className="btn btn-primary">
            Zurück zum Shop
          </a>
        </div>
      </div>
    </main>
  );
}
