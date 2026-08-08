"use client";

import { useState } from "react";

export default function ProductGallery({ images }) {
  const [index, setIndex] = useState(0);

  const step = (dir) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  const current = images[index];

  return (
    <div className="gallery-card">
      <div className="gallery-main">
        <button type="button" className="gallery-arrow prev" aria-label="Vorheriges Bild" onClick={() => step(-1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <img src={current.src} alt={current.alt} />

        <button type="button" className="gallery-arrow next" aria-label="Nächstes Bild" onClick={() => step(1)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <span className="gallery-counter">
          {index + 1} / {images.length}
        </span>
      </div>

      <div className="gallery-thumbs">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`thumb${i === index ? " active" : ""}`}
            aria-label={`Produktansicht ${i + 1} von ${images.length}`}
            onClick={() => setIndex(i)}
          >
            <img src={img.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
