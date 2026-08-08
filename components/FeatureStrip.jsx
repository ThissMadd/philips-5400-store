const ITEMS = [
  {
    title: "LatteGo in Sekunden sauber",
    text: "Zwei Teile, kein Schlauch, spülmaschinenfest.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 10h13a3 3 0 0 1 0 6H8" />
        <path d="M3 10v6a3 3 0 0 0 3 3h5" />
        <path d="M6 3v3M10 3v3M14 3v3" />
      </svg>
    ),
  },
  {
    title: "Intuitives Touch-Display",
    text: "12 Kaffeespezialitäten, ein Fingertipp entfernt.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    title: "Bis zu 5.000 Tassen ohne Entkalken",
    text: "Dank AquaClean Wasserfilter-System.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2v6M6 8h12l-1 6a5 5 0 0 1-10 0Z" />
        <path d="M9 22h6M12 16v6" />
      </svg>
    ),
  },
];

export default function FeatureStrip() {
  return (
    <section className="strip">
      <div className="wrap">
        {ITEMS.map((item) => (
          <div className="strip-item reveal" key={item.title}>
            {item.icon}
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
