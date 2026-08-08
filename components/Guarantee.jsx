const ITEMS = [
  {
    title: "2 Jahre Herstellergarantie",
    text: "Volle Absicherung nach EU-Standard.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" />
      </svg>
    ),
  },
  {
    title: "14 Tage Rückgaberecht",
    text: "Gesetzliches Widerrufsrecht in der EU.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12a9 9 0 1 0 9-9" />
        <path d="M3 3v6h6" />
      </svg>
    ),
  },
  {
    title: "Versand aus der EU",
    text: "Lieferung nach Deutschland in 2–3 Werktagen.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 3v8M8 3v8" />
      </svg>
    ),
  },
  {
    title: "Sichere Zahlung",
    text: "Verschlüsselte SSL-Verbindung beim Checkout.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
];

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="wrap">
        {ITEMS.map((item) => (
          <div className="g-item reveal" key={item.title}>
            {item.icon}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
