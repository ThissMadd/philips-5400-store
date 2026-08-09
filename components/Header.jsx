"use client";

import { useState } from "react";

const LINKS = [
  { href: "#produkt", label: "Produkt" },
  { href: "#ausstattung", label: "Ausstattung" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site">
        <div className="wrap">
          <div className="logo">
            Philips 5400 Series
            <span>LatteGo Vollautomat</span>
          </div>

          <nav className="primary">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="#jetzt-kaufen"
              className="btn btn-primary header-cta"
              style={{ padding: ".7rem 1.3rem", fontSize: ".88rem" }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("jetzt-kaufen");
                target?.scrollIntoView({ behavior: "smooth", block: "end" });
                const buyButton = target?.querySelector(".btn-primary");
                if (buyButton) {
                  buyButton.classList.remove("cta-pulse");
                  // eslint-disable-next-line no-unused-expressions
                  void buyButton.offsetWidth;
                  buyButton.classList.add("cta-pulse");
                  setTimeout(() => buyButton.classList.remove("cta-pulse"), 1800);
                }
              }}
            >
              Jetzt sichern
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-label="Menü öffnen"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <div className="wrap">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
