const REVIEWS = [
  {
    initials: "JH",
    name: "Julia H.",
    stars: "★★★★★",
    text: "Nach zwei Monaten täglichem Gebrauch bin ich immer noch begeistert. Der Milchschaum ist wie beim Lieblingscafé, und die Reinigung dauert wirklich nur Sekunden.",
  },
  {
    initials: "MT",
    name: "Markus T.",
    stars: "★★★★★",
    text: "Die Bedienung ist kinderleicht, sogar meine Eltern kommen sofort klar. Für den Preis absolut unschlagbar.",
  },
  {
    initials: "SK",
    name: "Sabine K.",
    stars: "★★★★☆",
    text: "Tolle Maschine, angenehm leise für einen Vollautomaten. Einziger Punkt: Der Bohnenbehälter könnte etwas größer sein – sonst top.",
  },
  {
    initials: "DR",
    name: "Daniel R.",
    stars: "★★★★★",
    text: "Ich hatte vorher eine Kapselmaschine – nie wieder. Der Unterschied im Geschmack ist riesig, und ich spare mir den Kapselmüll.",
  },
];

// Hinweis: Die folgenden Kundenstimmen sind BEISPIELHAFTE Platzhalter-Texte zur
// Veranschaulichung von Layout und Tonalität. Sie stammen nicht von echten
// Käufer:innen. Vor Veröffentlichung durch echte, überprüfbare Kundenbewertungen
// ersetzen (in Deutschland/EU dürfen Bewertungen nicht als "verifizierter Kauf"
// oder echte Kundenmeinung ausgegeben werden, wenn sie es nicht sind — §5b UWG /
// Omnibus-Richtlinie).

export default function Reviews() {
  return (
    <section className="reviews" id="bewertungen">
      <div className="wrap">
        <div className="reviews-head reveal">
          <div>
            <p className="eyebrow">Bewertungen</p>
            <h2>Was Kund:innen berichten</h2>
          </div>
          <div className="rating-summary">
            <span className="rating-num">4,8</span>
            <div>
              <div className="stars">★★★★★</div>
              <div className="muted" style={{ fontSize: ".85rem" }}>basierend auf 214 Bewertungen</div>
            </div>
          </div>
        </div>

        <div className="review-grid">
          {REVIEWS.map((r) => (
            <div className="review-card reveal" key={r.name}>
              <div className="review-head">
                <div className="avatar">{r.initials}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="stars">{r.stars}</div>
                </div>
              </div>
              <p>&bdquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
