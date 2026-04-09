import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

/*
=========================================================
 FEATURE: Street Food Directory
=========================================================

 GOAL:
Display searchable list of street food items.

---------------------------------------------------------
 REQUIREMENTS:
1. Fetch data from API (/street-food)
2. Display cards with:
   - image
   - name
3. Add search bar

---------------------------------------------------------
 IMPLEMENTATION STEPS:

STEP 1 — Fetch data

STEP 2 — Create search state

STEP 3 — Filter data using search

STEP 4 — Render cards

---------------------------------------------------------
 EXPECTED OUTPUT:

✔ Search bar works
✔ Cards display food + image

---------------------------------------------------------
 DO NOT:
- Implement image upload
=========================================================
*/

export default function StreetFoodDirectory() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [selectedFood, setSelectedFood] = useState(null);

  // 🔥 MOCK DATA (replace with API later)
  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "Vada Pav",
        city: "Mumbai",
        region: "West",
        image: "🥘",
        description: "Mumbai’s iconic spicy potato burger",
        featured: true,
        ingredients: "Potato, Pav, Chutney",
        places: "Dadar, CST",
        funFact: "Called Indian burger",
      },
      {
        id: 2,
        name: "Pani Puri",
        city: "Delhi",
        region: "North",
        image: "🥗",
        description: "Crispy puris with tangy water",
        featured: false,
        ingredients: "Puri, Mint water",
        places: "Chandni Chowk",
        funFact: "Also called Golgappa",
      },
      {
        id: 3,
        name: "Kathi Roll",
        city: "Kolkata",
        region: "East",
        image: "🍢",
        description: "Stuffed wrap with spicy fillings",
        featured: true,
        ingredients: "Paratha, Chicken",
        places: "Park Street",
        funFact: "Invented in Kolkata",
      },
    ];
    setFoods(data);
  }, []);

  // 🔍 Filter logic
  const filteredFoods = foods.filter((f) => {
    return (
      f.name.toLowerCase().includes(search.toLowerCase()) &&
      (city === "All" || f.city === city)
    );
  });

  // 🧠 DETAIL VIEW (NO ROUTING)
  if (selectedFood) {
    return (
      <div className="page">
        <button onClick={() => setSelectedFood(null)} className="page-back">
          ← Back
        </button>

        <h1 className="page-title">{selectedFood.name}</h1>
        <p className="page-sub">{selectedFood.description}</p>

        <div style={{ marginTop: "1.5rem" }}>
          <h3>Ingredients</h3>
          <p>{selectedFood.ingredients}</p>

          <h3>Best Places</h3>
          <p>{selectedFood.places}</p>

          <h3>Fun Fact</h3>
          <p>{selectedFood.funFact}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header">
        <Link to="/" className="page-back">
          ← Back to Home
        </Link>
        <h1 className="page-title">Street Food Directory</h1>
        <p className="page-sub">
          Discover iconic Indian street foods from every city and region.
        </p>
      </div>

      {/* 🔥 FEATURED SECTION */}
      <div className="featured">
        {foods
          .filter((f) => f.featured)
          .map((f) => (
            <div key={f.id} className="featured-card">
              <span>{f.image}</span>
              <div>
                <h3>{f.name}</h3>
                <p>{f.description}</p>
              </div>
            </div>
          ))}
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div style={{ display: "flex", gap: 10, marginBottom: "1.5rem" }}>
        <input
          placeholder="Search street food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,153,51,0.15)",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: "0.82rem",
            color: "#f5e6cc",
            outline: "none",
          }}
        />

        <div className="filter-bar">
          {["All", "Mumbai", "Delhi", "Kolkata"].map((c) => (
            <button
              key={c}
              className={`filter-btn ${city === c ? "active" : ""}`}
              onClick={() => setCity(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* 🧩 GRID */}
      <div className="grid">
        {filteredFoods.map((f) => (
          <div key={f.id} className="card" onClick={() => setSelectedFood(f)}>
            <div className="card-img">{f.image}</div>
            <div className="card-body">
              <div className="card-title">{f.name}</div>
              <div className="card-sub">{f.city}</div>
              <p style={{ fontSize: "0.75rem", opacity: 0.6 }}>
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
