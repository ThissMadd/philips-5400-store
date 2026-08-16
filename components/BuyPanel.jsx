"use client";

import { useState } from "react";

const UNIT_PRICE = 74.99;
const UNIT_OLD_PRICE = 499.99;
const MAX_QTY = 5;

const CHECKOUT_LINKS = {
  1: "https://buy.stripe.com/6oU4gC8U2auRdOd9pygMw04?locale=de",
  2: "https://buy.stripe.com/3cI4gC1rA6eBdOdgS0gMw05?locale=de",
  3: "https://buy.stripe.com/aFa3cyfiq5ax7pPatCgMw06?locale=de",
  4: "https://buy.stripe.com/cNi8wSb2a7iF39z6dmgMw07?locale=de",
  5: "https://buy.stripe.com/00w14q4DM32p11reJSgMw08?locale=de",
};

function formatEUR(value) {
  return (
    value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"
  );
}

export default function BuyPanel() {
  const [qty, setQty] = useState(1);

  return (
    <>
      <div className="price-block">
        <span className="price-new">{formatEUR(UNIT_PRICE * qty)}</span>
        <span className="price-old">UVP {formatEUR(UNIT_OLD_PRICE * qty)}</span>
        <span className="price-badge">&minus;87% sparen</span>
      </div>
      <p className="price-note">inkl. MwSt. · zzgl. Versandkosten · Restposten, solange der Vorrat reicht</p>
      {/* Preisvergleich (UVP/Rabatt) vor Veröffentlichung mit dem tatsächlichen, nachweisbaren Referenzpreis abgleichen (Preisangabenrecht). */}

      {/* Platzhalter-Lagerbestand: durch echte, aktuelle Bestandszahlen ersetzen — keine fiktive Verknappung anzeigen. */}
      <div className="stock-meter">
        <div className="stock-meter-bar">
          <div className="stock-meter-fill" />
        </div>
        <div className="stock-meter-label">
          <span>Nur noch 14 von 60 Stück verfügbar</span>
          <span>23%</span>
        </div>
      </div>

      <div className="color-row">
        <span>Farbe</span>
        <span className="muted" style={{ fontWeight: 600 }}>Schwarz</span>
      </div>
      <div className="color-swatches">
        <span className="swatch" title="Schwarz — ausgewählt" aria-label="Farbe Schwarz, ausgewählt">
          <span />
        </span>
      </div>

      {/* Hinweis: Zahlungsart-Hinweis vor Veröffentlichung mit den tatsächlich im Checkout verfügbaren Anbietern abgleichen. */}
      <div className="finance-banner">
        <span className="fb-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18" />
          </svg>
        </span>
        <div>
          <strong>Ratenzahlung &amp; Rechnungskauf möglich</strong>
          <p>Wähle deine bevorzugte Zahlungsart im Checkout aus.</p>
        </div>
      </div>

      <div className="buy-row" id="jetzt-kaufen">
        <div className="qty-stepper">
          <button
            type="button"
            aria-label="Menge verringern"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            &minus;
          </button>
          <span>{qty}</span>
          <button
            type="button"
            aria-label="Menge erhöhen"
            onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))}
          >
            +
          </button>
        </div>
        <a
          href={CHECKOUT_LINKS[qty]}
          className="btn btn-primary"
          onClick={() => {
            if (typeof window !== "undefined" && window.fbq) {
              window.fbq("track", "InitiateCheckout", {
                content_type: "product",
                content_ids: ["philips-5400-series"],
                value: UNIT_PRICE * qty,
                currency: "EUR",
                num_items: qty,
              });
            }
          }}
        >
          Jetzt kaufen
        </a>
      </div>
      <p className="hero-sub-note">Lieferung in 2–3 Werktagen nach Deutschland · 14 Tage Rückgaberecht</p>
    </>
  );
}
