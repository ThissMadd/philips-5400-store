const SPECS = [
  { label: "Milchsystem", value: "LatteGo, 2-teilig, spülmaschinenfest" },
  { label: "Mahlwerk", value: "Keramik, geräuscharm, 12 Mahlgrad-Stufen" },
  { label: "Kaffeespezialitäten", value: "12, u. a. Espresso, Americano, Cappuccino, Latte Macchiato, Café au Lait" },
  { label: "Nutzerprofile", value: "4 Profile, 8 gespeicherte Lieblingsgetränke (My Coffee Choice)" },
  { label: "Wassertank", value: "1,8 Liter, herausnehmbar" },
  { label: "Bohnenbehälter", value: "275 g" },
  { label: "Wasserfilter", value: "AquaClean, bis zu 5.000 Tassen ohne Entkalken" },
  { label: "Bedienung", value: "Touch-Display" },
  { label: "Reinigung", value: "Automatische Spülung + herausnehmbare Brühgruppe" },
  { label: "Farbe", value: "Schwarz" },
];

export default function SpecSheet() {
  return (
    <section className="spec" id="technische-daten">
      <div className="wrap">
        <div className="spec-head reveal">
          <span className="spec-label">Technische Daten</span>
          <h2>Alles, was in der Maschine steckt.</h2>
        </div>
        <dl className="spec-table reveal">
          {SPECS.map((s) => (
            <div className="spec-row" key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="spec-foot">
          Technische Daten laut Hersteller Philips. Verbindlich sind die Angaben auf Originalverpackung und Herstellerseite.
        </p>
      </div>
    </section>
  );
}
