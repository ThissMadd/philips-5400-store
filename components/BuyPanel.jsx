const UNIT_PRICE = 64.95;
const UNIT_OLD_PRICE = 499.99;

function formatEUR(value) {
  return (
    value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €"
  );
}

export default function BuyPanel() {
  return (
    <>
      <div className="price-block">
        <span className="price-new">{formatEUR(UNIT_PRICE)}</span>
        <span className="price-old">UVP {formatEUR(UNIT_OLD_PRICE)}</span>
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
        <a href="https://buy.stripe.com/bJecN81rAgTf4dDcBKgMw03" className="btn btn-primary">
          Jetzt kaufen
        </a>
      </div>
      <p className="hero-sub-note">Lieferung in 2–3 Werktagen nach Deutschland · 14 Tage Rückgaberecht</p>
    </>
  );
}
