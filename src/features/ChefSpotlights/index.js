import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function ChefSpotlights() {
   /*
  =========================================================
   FEATURE: Chef Spotlights
  =========================================================

   GOAL:
  Build a page that displays chef/cook profiles and their contributions.

  ---------------------------------------------------------
   REQUIREMENTS:
  1. Display list of chefs from dataset
  2. Each chef card should show:
      - Name
      - Short description/bio
      - Number of recipes contributed
  3. Clean card-based layout

  ---------------------------------------------------------
   DATA FORMAT (from /data/chefs.js):

  [
    {
      id: 1,
      name: "Asha Devi",
      region: "Rajasthan",
      recipes: 12,
      bio: "Specialist in traditional Rajasthani cuisine"
    }
  ]

  ---------------------------------------------------------
   IMPLEMENTATION STEPS:

  STEP 1 — Import chefs data

  STEP 2 — Create state:
    - chefs
    - optional filter (region)

  STEP 3 — Render chef cards:
    - name
    - bio
    - recipe count

  ---------------------------------------------------------
   EXPECTED OUTPUT:

  ✔ List of chef cards visible
  ✔ Each card shows name, bio, and recipe count
  ✔ Clean grid layout
  ✔ Optional filtering works

  =========================================================
  */

  //  STEP 1: Import chefs data here
    

  //  STEP 2: Create state here


  //  STEP 3: (Optional) Filtering logic here

  return (
    <div className="feature-page">
      <h1>Chef & Cook Spotlights</h1>

      <div className="todo-box">
        <p>Profile cards + recipes</p>
      </div>

      <div className="placeholder">👨‍🍳 ChefGrid</div>
      <div className="placeholder">📄 ChefProfile</div>
    </div>
  );
}