const CHECK = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

const ITEMS = [
  "Philips 5400 Series LatteGo Kaffeevollautomat",
  "LatteGo Milchbehälter (2-teilig)",
  "AquaClean Wasserfilter",
  "Reinigungsbürste & Teststreifen für Wasserhärte",
  "Bedienungsanleitung (deutsch)",
];

export default function Includes() {
  return (
    <section className="includes">
      <div className="wrap">
        <div className="includes-box reveal">
          <span className="spec-label">Lieferumfang</span>
          <h3>Alles dabei, um direkt loszulegen.</h3>
          <ul className="includes-list">
            {ITEMS.map((item) => (
              <li key={item}>
                {CHECK}
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <p className="eyebrow">Im Karton</p>
          <h2>Kein Zubehör nachkaufen — startklar direkt nach dem Auspacken.</h2>
          <p className="muted" style={{ marginTop: "1rem", maxWidth: "48ch" }}>
            Neu, originalverpackt und mit allem ausgestattet, was du für den ersten Cappuccino am nächsten Morgen brauchst.
          </p>
        </div>
      </div>
    </section>
  );
}
