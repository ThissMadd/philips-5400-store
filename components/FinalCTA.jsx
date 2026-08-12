export default function FinalCTA() {
  return (
    <section className="final-cta" id="kaufen">
      <div className="wrap">
        <div className="final-cta-box reveal">
          <p className="eyebrow">Nur noch begrenzt verfügbar</p>
          <h2 style={{ marginTop: ".6rem" }}>Hol dir dein Kaffeehaus nach Hause.</h2>
          <div className="price-block">
            <span className="price-new">64,95&nbsp;€</span>
            <span className="price-old">UVP 499,99&nbsp;€</span>
            <span className="price-badge">&minus;87% sparen</span>
          </div>
          <div className="buy-row">
            <a href="https://buy.stripe.com/bJecN81rAgTf4dDcBKgMw03" className="btn btn-primary">Jetzt kaufen</a>
          </div>
          <p className="hero-sub-note">Kostenloser Versand ab 50&nbsp;€ · 14 Tage Rückgaberecht · 2 Jahre Garantie</p>
        </div>
      </div>
    </section>
  );
}
