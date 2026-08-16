"use client";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="kaufen">
      <div className="wrap">
        <div className="final-cta-box reveal">
          <p className="eyebrow">Nur noch begrenzt verfügbar</p>
          <h2 style={{ marginTop: ".6rem" }}>Hol dir dein Kaffeehaus nach Hause.</h2>
          <div className="price-block">
            <span className="price-new">74,99&nbsp;€</span>
            <span className="price-old">UVP 499,99&nbsp;€</span>
            <span className="price-badge">&minus;87% sparen</span>
          </div>
          <div className="buy-row">
            <a
              href="https://buy.stripe.com/6oU4gC8U2auRdOd9pygMw04?locale=de"
              className="btn btn-primary"
              onClick={() => {
                if (typeof window !== "undefined" && window.fbq) {
                  window.fbq("track", "InitiateCheckout", {
                    content_type: "product",
                    content_ids: ["philips-5400-series"],
                    value: 74.99,
                    currency: "EUR",
                    num_items: 1,
                  });
                }
              }}
            >
              Jetzt kaufen
            </a>
          </div>
          <p className="hero-sub-note">Kostenloser Versand ab 50&nbsp;€ · 14 Tage Rückgaberecht · 2 Jahre Garantie</p>
        </div>
      </div>
    </section>
  );
}
