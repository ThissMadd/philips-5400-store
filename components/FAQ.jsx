const ITEMS = [
  {
    q: "Warum ist der Preis so günstig?",
    a: "Das Angebot stammt aus einem begrenzten Restposten. Dadurch können wir den Preis deutlich unter dem üblichen Handelspreis anbieten – die Stückzahl ist entsprechend limitiert.",
    // Wichtig: Diese Antwort muss die tatsächliche Herkunft/den tatsächlichen Zustand der
    // Ware wahrheitsgemäß beschreiben (z. B. Restposten, B-Ware, Grosshandelsauflösung).
    // Bitte an die reale Situation anpassen, bevor die Seite veröffentlicht wird.
    open: true,
  },
  {
    q: "Ist die Maschine neu und originalverpackt?",
    a: "Ja, du erhältst ein neues, originalverpacktes Gerät inklusive Herstellergarantie und allen mitgelieferten Zubehörteilen.",
  },
  {
    q: "Welche Milch kann ich mit dem LatteGo-System verwenden?",
    a: "Kuh-, Hafer-, Mandel- und Sojamilch funktionieren mit dem LatteGo-System – für optimalen Schaum empfiehlt Philips gekühlte Milch.",
  },
  {
    q: "Wie oft muss ich entkalken?",
    a: "Mit dem AquaClean-Wasserfilter musst du bei korrekter Anwendung bis zu 5.000 Tassen lang nicht entkalken. Ohne Filter richtet sich das Intervall nach der eingestellten Wasserhärte.",
  },
  {
    q: "Wie laut ist die Maschine im Betrieb?",
    a: "Die Keramikmahlwerke sind auf einen leisen Betrieb ausgelegt und deutlich ruhiger als viele klassische Kegelmahlwerke.",
  },
  {
    q: "Wie lange dauert der Versand nach Deutschland?",
    a: "In der Regel 2–3 Werktage ab Zahlungseingang. Du erhältst eine Sendungsverfolgung per E-Mail, sobald das Paket versendet wurde.",
  },
  {
    q: "Gibt es Garantie und Rückgaberecht?",
    a: "Ja – 2 Jahre Herstellergarantie sowie das gesetzliche 14-tägige Widerrufsrecht innerhalb der EU.",
  },
];

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq-head reveal">
          <p className="eyebrow">Häufige Fragen</p>
          <h2>Bevor du bestellst</h2>
        </div>
        <div className="faq-list reveal">
          {ITEMS.map((item) => (
            <details className="faq-item" key={item.q} open={item.open}>
              <summary>
                {item.q}
                <span className="plus" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
