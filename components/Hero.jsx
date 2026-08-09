import ProductGallery from "./ProductGallery";
import BuyPanel from "./BuyPanel";

const IMAGES = [
  { src: "/images/clean-front.webp", alt: "Philips 5400 Series LatteGo Kaffeevollautomat, schwarz, mit Latte Macchiato, Frontansicht" },
  { src: "/images/clean-angle.webp", alt: "Philips 5400 Series LatteGo, seitliche Ansicht mit Latte Macchiato" },
  { src: "/images/hero.webp", alt: "Philips 5400 Series LatteGo Kaffeevollautomat, schwarz, mit Latte Macchiato" },
  { src: "/images/front.webp", alt: "Frontansicht mit Touch-Display und Bohnenbehälter" },
  { src: "/images/pour.webp", alt: "Nahaufnahme: LatteGo Milchsystem beim Aufschäumen" },
  { src: "/images/lifestyle.webp", alt: "Philips 5400 Series mit verschiedenen Kaffeespezialitäten" },
];

export default function Hero() {
  return (
    <section className="hero" id="produkt">
      <div className="wrap">
        <div className="hero-text">
          <p className="eyebrow">Kaffeevollautomat mit LatteGo</p>
          <h1 style={{ fontSize: "clamp(2.6rem, 5vw + 1rem, 5rem)", lineHeight: 0.98 }}>
            Philips
            <br />
            5400&nbsp;Series
          </h1>
          <p className="muted" style={{ marginTop: "1.1rem", fontSize: "1.05rem", maxWidth: "46ch" }}>
            Zwölf Kaffeespezialitäten aus frisch gemahlenen Bohnen, das leicht zu reinigende
            LatteGo&#8209;Milchsystem und persönliche Profile – alles auf Knopfdruck.
          </p>

          <div className="rating-badge">
            <span className="stars">★★★★★</span>
            <strong>4,8</strong>
            <span className="muted">· 214 Bewertungen</span>
          </div>
          {/* Platzhalter-Bewertungswerte: durch reale, überprüfbare Zahlen ersetzen, sobald Kundenbewertungen vorliegen. */}

          <BuyPanel />

          <div className="pay-badges">
            <span className="pay-badge">VISA</span>
            <span className="pay-badge">Mastercard</span>
            <span className="pay-badge">AMEX</span>
            <span className="pay-badge">PayPal</span>
            <span className="pay-badge">Klarna</span>
            <span className="pay-badge">Sicher bezahlen</span>
          </div>

          <div className="trust-boxes">
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
                <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />
              </svg>
              <strong>2 Jahre Garantie</strong>
              <span>Herstellergarantie</span>
            </div>
            <div className="trust-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.7-2.5 2-2.5 3.5" />
                <path d="M12 17h.01" />
              </svg>
              <strong>Kundenservice</strong>
              <span>Schnell erreichbar</span>
            </div>
          </div>

          <div className="spec-chips">
            <div className="spec-chip"><strong>12</strong><span>Spezialitäten</span></div>
            <div className="spec-chip"><strong>1,8&nbsp;L</strong><span>Wassertank</span></div>
            <div className="spec-chip"><strong>275&nbsp;g</strong><span>Bohnenbehälter</span></div>
            <div className="spec-chip"><strong>4</strong><span>Nutzerprofile</span></div>
          </div>
        </div>

        <div className="hero-media">
          <ProductGallery images={IMAGES} />
        </div>
      </div>
    </section>
  );
}
