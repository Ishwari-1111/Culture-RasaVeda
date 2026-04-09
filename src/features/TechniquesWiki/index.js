import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function TechniquesWiki() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // 📚 Static dataset
  const techniques = [
    {
      id: 1,
      title: "Dum",
      description: "Slow cooking in a sealed pot using steam.",
      cookware: "Handi",
      regions: ["North India", "Hyderabad"],
      recipes: ["Biryani", "Dum Aloo"],
      difficulty: "Medium",
      steps: ["Seal pot", "Cook on low heat", "Let steam build"],
    },

    {
      id: 2,
      title: "Tadka",
      description: "Tempering spices in hot oil or ghee to enhance flavor.",
      cookware: "Pan / Tadka ladle",
      regions: ["All India", "North India", "West India"],
      recipes: ["Dal Tadka", "Jeera Rice", "Khichdi"],
      difficulty: "Easy",
      steps: ["Heat oil or ghee", "Add spices", "Pour over dish"],
    },

    {
      id: 3,
      title: "Bhuna",
      description:
        "Cooking spices and ingredients in oil until aromatic and well blended.",
      cookware: "Kadai",
      regions: ["North India", "Pakistan", "Bangladesh"],
      recipes: ["Chicken Bhuna", "Bhuna Gosht", "Paneer Bhurji"],
      difficulty: "Medium",
      steps: [
        "Heat oil",
        "Add spices",
        "Cook until fragrant and oil separates",
      ],
    },
  ];

  // 🔍 Filter logic
  const filtered = techniques.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()),
  );

  // 📄 DETAIL VIEW
  if (selected) {
    return (
      <div className="page">
        <button className="page-back" onClick={() => setSelected(null)}>
          ← Back
        </button>

        <h1 className="page-title">{selected.title}</h1>
        <p className="page-sub">{selected.description}</p>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Cookware</h3>
          <p>{selected.cookware}</p>

          <h3>Regions</h3>
          <ul>
            {(selected.regions || []).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h3>Recipes Using This Technique</h3>
          <ul>
            {(selected.recipes || []).map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <h3>Steps</h3>
          <div style={{ marginTop: "10px" }}>
            {selected.steps.map((s, i) => (
              <div
                key={i}
                style={{ display: "flex", gap: 10, marginBottom: 8 }}
              >
                <span
                  style={{
                    background: "#ff9933",
                    borderRadius: "50%",
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#000",
                  }}
                >
                  {i + 1}
                </span>
                <p>{s}</p>
              </div>
            ))}
          </div>

          <h3>Difficulty</h3>
          <span className="tag">{selected.difficulty}</span>
        </div>
      </div>
    );
  }

  // 📋 LIST VIEW
  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="page-back">
          ← Back to Home
        </Link>
        <h1 className="page-title">Cooking Techniques Wiki</h1>
        <p className="page-sub">Wiki-style listing + detail view</p>
      </div>

      {/* 🔍 SEARCH */}
      <input
        placeholder="Search techniques..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          marginBottom: "1.5rem",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,153,51,0.15)",
          borderRadius: 999,
          padding: "8px 16px",
          fontSize: "0.82rem",
          color: "#f5e6cc",
          outline: "none",
        }}
      />

      {/* 📚 LIST */}
      <div className="grid">
        {filtered.map((t) => (
          <div key={t.id} className="card" onClick={() => setSelected(t)}>
            <div className="card-body">
              <div className="card-title">{t.title}</div>
              <div className="card-sub">{t.region}</div>
              <p style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                {t.description}
              </p>
              <span className="tag">{t.difficulty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
