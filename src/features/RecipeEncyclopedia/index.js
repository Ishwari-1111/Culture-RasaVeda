import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import "./styles.css";

export default function RecipeEncyclopedia() {

  /*
  =========================================================
   FEATURE: Regional Recipe Encyclopedia
  =========================================================

   GOAL:
  Build a paginated recipe listing page with filters.

  ---------------------------------------------------------
   REQUIREMENTS:
  1. Fetch recipes from API (/recipes)
  2. Display recipes in a grid of cards
  3. Add filters:
      - Region
      - Dietary Tag
  4. Add pagination (6 items per page)
  5. Show:
      - Loading state
      - Empty state
  6. Reset page to 1 when filters change

  ---------------------------------------------------------
   API RESPONSE FORMAT:

  [
    {
      id: 1,
      name: "Rogan Josh",
      region: "Kashmir",
      community: "Kashmiri Pandit",
      dietaryTag: "Non-Veg",
      description: "A slow-cooked curry..."
    }
  ]

  ---------------------------------------------------------
   IMPLEMENTATION STEPS:

  STEP 1 — Create state:
    - recipes
    - loading
    - selectedRegion
    - selectedDiet
    - currentPage

  STEP 2 — Fetch data using useEffect

  STEP 3 — Filter recipes based on:
    region + dietaryTag

  STEP 4 — Apply pagination:
    - 6 recipes per page
    - slice array

  STEP 5 — Render:
    - Filter buttons
    - Recipe cards
    - Pagination buttons

  ---------------------------------------------------------
   EXPECTED OUTPUT:

  ✔ Filter buttons visible
  ✔ Clicking filters updates recipes instantly
  ✔ Recipe cards show name, region, tag, description
  ✔ Pagination works (1,2,3...)
  ✔ "Loading..." appears initially
  ✔ "No recipes found" if empty

  ---------------------------------------------------------
   DO NOT:
  - Modify API structure
  - Add new dependencies
  - Break layout structure

  =========================================================
  */

  // STEP 1: Create state here
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedDiet, setSelectedDiet] = useState("All");
  const [selectedCommunity, setSelectedCommunity] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // STEP 2: Fetch API here
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get("/recipes");
        setRecipes(response.data || []);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  // STEP 3: Filtering logic here
  const filteredRecipes = recipes.filter((recipe) => {
    const matchRegion = selectedRegion === "All" || recipe.region === selectedRegion;
    const matchDiet = selectedDiet === "All" || recipe.dietaryTag === selectedDiet;
    const matchCommunity = selectedCommunity === "All" || recipe.community === selectedCommunity;
    const matchLanguage = selectedLanguage === "All" || recipe.language === selectedLanguage;
    return matchRegion && matchDiet && matchCommunity && matchLanguage;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedRegion, selectedDiet, selectedCommunity, selectedLanguage]);

  // STEP 4: Pagination logic here
  const recipesPerPage = 6;
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const currentRecipes = filteredRecipes.slice(startIndex, startIndex + recipesPerPage);

  // Unique filter values
  const regions = ["All", ...new Set(recipes.map((r) => r.region).filter(Boolean))];
  const dietaryTags = ["All", ...new Set(recipes.map((r) => r.dietaryTag).filter(Boolean))];
  const communities = ["All", ...new Set(recipes.map((r) => r.community).filter(Boolean))];
  const languages = ["All", ...new Set(recipes.map((r) => r.language).filter(Boolean))];

  return (
    <div className="recipe-page container">

      <Link to="/" className="back">← Back</Link>

      <div className="header-actions">
        <h1 className="title">Regional Recipe Encyclopedia</h1>
        <div className="view-toggles">
          <button className={viewMode === "grid" ? "active" : ""} onClick={() => setViewMode("grid")}>Grid View</button>
          <button className={viewMode === "list" ? "active" : ""} onClick={() => setViewMode("list")}>List View</button>
        </div>
      </div>

      {/* Constraints and Filters */}
      <div className="filters-container">
        <div className="filters">
          <label>Region:
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
              {regions.map((region) => <option key={region} value={region}>{region}</option>)}
            </select>
          </label>
          <label>Community:
            <select value={selectedCommunity} onChange={(e) => setSelectedCommunity(e.target.value)}>
              {communities.map((comm) => <option key={comm} value={comm}>{comm}</option>)}
            </select>
          </label>
          <label>Language:
            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
              {languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)}
            </select>
          </label>
          <label>Diet:
            <select value={selectedDiet} onChange={(e) => setSelectedDiet(e.target.value)}>
              {dietaryTags.map((diet) => <option key={diet} value={diet}>{diet}</option>)}
            </select>
          </label>
        </div>
        <div className="results-count">
          Showing {filteredRecipes.length} recipes
        </div>
      </div>

      {/* Recipe Grid / List */}
      {loading ? (
        <p className="loading-state">Loading deliciousness...</p>
      ) : filteredRecipes.length === 0 ? (
        <p className="empty-state">No recipes found matching your filters.</p>
      ) : (
        <div className={`recipe-container ${viewMode}`}>
          {currentRecipes.map((recipe) => (
            <div key={recipe.id} className="card" onClick={() => setSelectedRecipe(recipe)}>
              <div className="card-content">
                <h3>{recipe.name}</h3>
                <p><strong>Origin:</strong> {recipe.region} ({recipe.community})</p>
                <div className="tags">
                  <span className="tag">{recipe.dietaryTag}</span>
                  <span className="tag outline">{recipe.language}</span>
                </div>
                {viewMode === "grid" && <p className="desc">{recipe.description}</p>}
                {viewMode === "list" && <p className="desc">{recipe.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Detailed View Modal */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedRecipe(null)}>×</button>
            <h2>{selectedRecipe.name}</h2>
            <div className="modal-meta">
              <span className="tag">{selectedRecipe.dietaryTag}</span>
              <span className="tag outline">{selectedRecipe.region} • {selectedRecipe.community}</span>
            </div>
            <p className="modal-desc">{selectedRecipe.description}</p>
            
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              {selectedRecipe.ingredients ? (
                <ul>
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              ) : (
                <p>No ingredients listed.</p>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
