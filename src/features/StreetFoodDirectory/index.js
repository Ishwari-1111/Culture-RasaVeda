import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import "./styles.css";

export default function StreetFoodDirectory() {

  // ─── State ───────────────────────────────────────────
  const [items, setItems]           = useState([]);
  const [loading, setLoading]       = useState(true);
  const [search, setSearch]         = useState("");
  const [activeRegion, setActiveRegion] = useState("All");
  const [activeCity, setActiveCity] = useState("All");
  const [selected, setSelected]     = useState(null);
  const [bannerIdx, setBannerIdx]   = useState(0);
  const bannerTimer                 = useRef(null);

  // ─── Fetch ───────────────────────────────────────────
  useEffect(() => {
    api.get("/street-food")
      .then(res => setItems(res.data || []))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // ─── Banner auto-advance ──────────────────────────────
  const featured = items.filter(i => i.featured);
  useEffect(() => {
    if (!featured.length) return;
    bannerTimer.current = setInterval(() =>
      setBannerIdx(i => (i + 1) % featured.length), 4000);
    return () => clearInterval(bannerTimer.current);
  }, [featured.length]);

  // ─── Filter options ───────────────────────────────────
  const regions = ["All", ...new Set(items.map(i => i.region))];
  const cities  = ["All", ...new Set(
    items
      .filter(i => activeRegion === "All" || i.region === activeRegion)
      .map(i => i.city)
  )];

  // ─── Filtered list ────────────────────────────────────
  const filtered = items.filter(item => {
    const q = search.toLowerCase();
    const matchSearch =
      item.name.toLowerCase().includes(q) ||
      item.city.toLowerCase().includes(q) ||
      item.region.toLowerCase().includes(q);
    const matchRegion = activeRegion === "All" || item.region === activeRegion;
    const matchCity   = activeCity   === "All" || item.city   === activeCity;
    return matchSearch && matchRegion && matchCity;
  });

  // ─── Helpers ─────────────────────────────────────────
  const setRegion = r => { setActiveRegion(r); setActiveCity("All"); };

  const curBanner = featured[bannerIdx] ?? null;

  // ─── Render ───────────────────────────────────────────
  return (
    <div className="sfd-page">

      {/* ── Back ── */}
      <Link to="/" className="sfd-back">← Back to Home</Link>

      {/* ── Header ── */}
      <div className="sfd-header">
        <h1 className="sfd-title">Street Food Directory</h1>
        <p className="sfd-sub">Discover iconic Indian street foods from every city and region.</p>
      </div>

      {/* ── Featured Banner ── */}
      {!loading && curBanner && (
        <div
          className="sfd-banner"
          style={{ background: `linear-gradient(135deg, ${curBanner.photoGrad[0]}, ${curBanner.photoGrad[1]})` }}
          onClick={() => setSelected(curBanner)}
        >
          <div className="sfd-banner-badge">⭐ Featured</div>
          <div className="sfd-banner-icon">{curBanner.icon}</div>
          <div className="sfd-banner-info">
            <h2 className="sfd-banner-name">{curBanner.name}</h2>
            <p className="sfd-banner-desc">{curBanner.description}</p>
            <div className="sfd-banner-meta">
              <span>📍 {curBanner.city}</span>
              <span className="sfd-tag">{curBanner.tag}</span>
              <span className="sfd-price">{curBanner.price}</span>
            </div>
          </div>
          {/* dots */}
          <div className="sfd-banner-dots">
            {featured.map((_, i) => (
              <button
                key={i}
                className={`sfd-dot ${i === bannerIdx ? "active" : ""}`}
                onClick={e => { e.stopPropagation(); setBannerIdx(i); }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Search + Count ── */}
      <div className="sfd-search-row">
        <div className="sfd-search-wrap">
          <span className="sfd-search-icon">🔍</span>
          <input
            className="sfd-search"
            placeholder="Search by name, city, or region…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="sfd-clear" onClick={() => setSearch("")}>×</button>
          )}
        </div>
        <span className="sfd-count">{filtered.length} items</span>
      </div>

      {/* ── Region chips ── */}
      <div className="sfd-chips">
        {regions.map(r => (
          <button
            key={r}
            className={`sfd-chip ${activeRegion === r ? "active" : ""}`}
            onClick={() => setRegion(r)}
          >{r}</button>
        ))}
      </div>

      {/* ── City chips (secondary — only when a region is chosen) ── */}
      {activeRegion !== "All" && (
        <div className="sfd-chips sfd-chips-sm">
          {cities.map(c => (
            <button
              key={c}
              className={`sfd-chip sfd-chip-sm ${activeCity === c ? "active" : ""}`}
              onClick={() => setActiveCity(c)}
            >{c}</button>
          ))}
        </div>
      )}

      {/* ── Grid ── */}
      {loading ? (
        <p className="sfd-state">Loading street food…</p>
      ) : filtered.length === 0 ? (
        <p className="sfd-state">No results found for "<strong>{search}</strong>"</p>
      ) : (
        <div className="sfd-grid">
          {filtered.map(item => (
            <div
              key={item.id}
              className="sfd-card"
              onClick={() => setSelected(item)}
            >
              {/* Photo placeholder */}
              <div
                className="sfd-card-photo"
                style={{ background: `linear-gradient(135deg, ${item.photoGrad[0]}, ${item.photoGrad[1]})` }}
              >
                <span className="sfd-card-emoji">{item.icon}</span>
                {item.seasonal && <span className="sfd-seasonal-badge">🌿 Seasonal</span>}
              </div>

              <div className="sfd-card-body">
                <div className="sfd-card-name">{item.name}</div>
                <div className="sfd-card-city">📍 {item.city} · {item.region}</div>
                <p className="sfd-card-desc">{item.description}</p>
                <div className="sfd-card-footer">
                  <span className="sfd-tag">{item.tag}</span>
                  <span className="sfd-price">{item.price}</span>
                </div>
                <div className="sfd-card-cta">Tap to explore →</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Detail Modal ── */}
      {selected && (
        <div className="sfd-overlay" onClick={() => setSelected(null)}>
          <div className="sfd-modal" onClick={e => e.stopPropagation()}>
            {/* Modal header photo */}
            <div
              className="sfd-modal-photo"
              style={{ background: `linear-gradient(135deg, ${selected.photoGrad[0]}, ${selected.photoGrad[1]})` }}
            >
              <span className="sfd-modal-emoji">{selected.icon}</span>
              <button className="sfd-modal-close" onClick={() => setSelected(null)}>×</button>
            </div>

            <div className="sfd-modal-body">
              <h2 className="sfd-modal-title">{selected.name}</h2>
              <div className="sfd-modal-meta">
                <span>📍 {selected.city} · {selected.region}</span>
                <span className="sfd-tag">{selected.tag}</span>
                <span className="sfd-price">{selected.price}</span>
              </div>
              <p className="sfd-modal-desc">{selected.description}</p>

              <div className="sfd-modal-section">
                <h3>🧂 Ingredients</h3>
                <ul className="sfd-modal-list">
                  {selected.ingredients?.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
              </div>

              <div className="sfd-modal-section">
                <h3>📍 Best Places to Find It</h3>
                <ul className="sfd-modal-list places">
                  {selected.bestPlaces?.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div className="sfd-modal-section">
                <h3>✨ Fun Facts</h3>
                <ul className="sfd-modal-list facts">
                  {selected.funFacts?.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
