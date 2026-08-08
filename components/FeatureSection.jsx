const CHECK = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export default function FeatureSection({ id, reverse, image, imageAlt, eyebrow, title, lead, bullets }) {
  return (
    <section className={`feature${reverse ? " reverse" : ""}`} id={id}>
      <div className="wrap">
        <div className="f-media reveal">
          <div className="f-media-inner">
            <img src={image} alt={imageAlt} />
          </div>
        </div>
        <div className="f-text reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="lead">{lead}</p>
          <ul>
            {bullets.map((b) => (
              <li key={b}>
                {CHECK}
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
