const OK = <span className="cell-ok">✓</span>;
const NO = <span className="cell-no">✗</span>;

const ROWS = [
  { label: "Kosten pro Tasse*", philips: "ca. 0,15–0,25 €", kapsel: "ca. 0,30–0,45 €", einsteiger: "ca. 0,15–0,25 €" },
  {
    label: "Frisch gemahlen",
    philips: <>{OK}Direkt vor der Zubereitung</>,
    kapsel: <>{NO}Nein, vorportioniert</>,
    einsteiger: <>{OK}Ja</>,
  },
  {
    label: "Personalisierung",
    philips: <>{OK}4 Nutzerprofile</>,
    kapsel: <>{NO}Nein</>,
    einsteiger: <>{NO}Selten vorhanden</>,
  },
  {
    label: "Milchschaum-Reinigung",
    philips: <>{OK}Sekunden (LatteGo)</>,
    kapsel: "Meist manuell",
    einsteiger: "Oft aufwendige Schläuche",
  },
  {
    label: "Verpackungsmüll",
    philips: <>{OK}Kein Kapselmüll</>,
    kapsel: <>{NO}Kapsel bei jeder Tasse</>,
    einsteiger: <>{OK}Kein Kapselmüll</>,
  },
];

export default function CompareTable() {
  return (
    <section className="compare">
      <div className="wrap">
        <div className="compare-head reveal">
          <p className="eyebrow">Der Vergleich</p>
          <h2>Warum sich ein Vollautomat langfristig lohnt</h2>
        </div>
        <div className="compare-scroll reveal">
          <table className="compare-table">
            <thead>
              <tr>
                <th></th>
                <th className="hi">Philips 5400 LatteGo</th>
                <th>Kapselmaschine</th>
                <th>Einsteiger-Vollautomat</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  <td className="hi">{row.philips}</td>
                  <td>{row.kapsel}</td>
                  <td>{row.einsteiger}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="spec-foot">
          *Richtwerte auf Basis marktüblicher Bohnen- bzw. Kapselpreise, gerundet. Tatsächliche Kosten variieren je nach Produkt und Anbieter.
        </p>
      </div>
    </section>
  );
}
