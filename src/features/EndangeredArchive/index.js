import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { recipes } from "../../data/recipes";
import { forgottenRecipes } from "../../data/forgottenRecipes";
import "./styles.css";

export default function EndangeredArchive() {
  // STEP 2 — Filter only endangered recipes
  const endangeredRecipes = recipes.filter(
    (recipe) => recipe.isEndangered === true,
  );

  // State for rarity filter
  const [selectedRarity, setSelectedRarity] = useState("All");

  // Filter by rarity level
  const filteredRecipes = endangeredRecipes.filter((recipe) => {
    if (selectedRarity === "All") return true;
    return recipe.rarity === selectedRarity;
  });

  // State for submission form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    recipeName: "",
    region: "",
    description: "",
    yourName: "",
  });

  // Initialize submissions from localStorage or static data
  const [submissions, setSubmissions] = useState(() => {
    const savedSubmissions = localStorage.getItem(
      "endangeredArchiveSubmissions",
    );
    return savedSubmissions ? JSON.parse(savedSubmissions) : forgottenRecipes;
  });

  // Initialize flagged recipes from localStorage
  const [flaggedRecipes, setFlaggedRecipes] = useState(() => {
    const savedFlagged = localStorage.getItem("endangeredArchiveFlagged");
    return savedFlagged ? new Set(JSON.parse(savedFlagged)) : new Set();
  });

  const [successMessage, setSuccessMessage] = useState("");

  // Save submissions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "endangeredArchiveSubmissions",
      JSON.stringify(submissions),
    );
  }, [submissions]);

  // Save flagged recipes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      "endangeredArchiveFlagged",
      JSON.stringify(Array.from(flaggedRecipes)),
    );
  }, [flaggedRecipes]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.recipeName.trim() || !formData.region.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const newSubmission = {
      id: submissions.length + 1,
      name: formData.recipeName,
      region: formData.region,
      description: formData.description,
      submittedBy: formData.yourName || "Anonymous",
      submittedDate: new Date().toISOString().split("T")[0],
    };

    setSubmissions((prev) => [...prev, newSubmission]);
    setFormData({
      recipeName: "",
      region: "",
      description: "",
      yourName: "",
    });
    setShowForm(false);
    setSuccessMessage("Thank you! Your recipe has been added to the archive.");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  // Handle flag as endangered
  const handleFlagAsEndangered = (recipeId) => {
    const newFlagged = new Set(flaggedRecipes);
    if (newFlagged.has(recipeId)) {
      newFlagged.delete(recipeId);
    } else {
      newFlagged.add(recipeId);
    }
    setFlaggedRecipes(newFlagged);
  };

  return (
    <div className="feature-page">
      <Link to="/" className="page-back">
        ← Back
      </Link>
      {/* STEP 3 — Render warning banner */}
      <div className="warning-banner">
        <div className="banner-header">⚠️ ENDANGERED RECIPES ARCHIVE</div>
        <p className="banner-text">
          These are traditional recipes facing extinction due to changing food
          culture and fewer practitioners. Help preserve culinary heritage by
          learning these recipes, sharing them with the next generation, and
          contributing forgotten recipes you know.
        </p>
      </div>

      <div className="archive-stats">
        <div className="stat-card">
          <div className="stat-number">{endangeredRecipes.length}</div>
          <div className="stat-label">Endangered Recipes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{submissions.length}</div>
          <div className="stat-label">Forgotten Recipes</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">3</div>
          <div className="stat-label">Rarity Levels</div>
        </div>
      </div>

      {/* Endangered Recipes Section */}
      <div className="section-header">
        <h2>Endangered Recipes at Risk</h2>
        <p className="section-desc">
          Recipes marked as endangered or critical. Click 'Flag' if you know
          others.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-bar">
        <button
          className={`filter-btn ${selectedRarity === "All" ? "active" : ""}`}
          onClick={() => setSelectedRarity("All")}
        >
          All Recipes ({endangeredRecipes.length})
        </button>
        <button
          className={`filter-btn ${selectedRarity === "Critical" ? "active" : ""}`}
          onClick={() => setSelectedRarity("Critical")}
        >
          🔴 Critical (
          {endangeredRecipes.filter((r) => r.rarity === "Critical").length})
        </button>
        <button
          className={`filter-btn ${selectedRarity === "Endangered" ? "active" : ""}`}
          onClick={() => setSelectedRarity("Endangered")}
        >
          🟠 Endangered (
          {endangeredRecipes.filter((r) => r.rarity === "Endangered").length})
        </button>
      </div>

      {/* STEP 4 — Render endangered recipe cards */}
      <div className="endangered-grid">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="endangered-card">
            <div className="card-icon">🍲</div>
            <div className="card-content">
              <div className="card-badges">
                <span
                  className={`badge badge-endangered badge-${recipe.rarity.toLowerCase()}`}
                >
                  🚨 {recipe.rarity}
                </span>
              </div>
              <h3 className="card-name">{recipe.name}</h3>
              <p className="card-region">📍 {recipe.region}</p>
              <p className="card-community">{recipe.community}</p>
              <p className="card-description">{recipe.description}</p>
              <div className="card-actions">
                <button
                  className="btn btn-contribute"
                  onClick={() => setShowForm(true)}
                >
                  📝 Contribute Your Story
                </button>
                <button
                  className={`btn btn-flag ${flaggedRecipes.has(recipe.id) ? "flagged" : ""}`}
                  onClick={() => handleFlagAsEndangered(recipe.id)}
                >
                  {flaggedRecipes.has(recipe.id)
                    ? "✓ Flagged"
                    : "🚩 Flag as Endangered"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Forgotten Recipes & Submission */}
      <div className="forgotten-section">
        <div className="section-header">
          <h2>Forgotten Recipes Registry</h2>
          <p className="section-desc">
            Help us revive recipes that are fading from memory.
          </p>
        </div>

        {successMessage && (
          <div className="success-message">✅ {successMessage}</div>
        )}

        {!showForm && (
          <button
            className="btn btn-primary btn-large"
            onClick={() => setShowForm(true)}
          >
            ➕ Add a Forgotten Recipe
          </button>
        )}

        {showForm && (
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recipeName">Recipe Name *</label>
              <input
                type="text"
                id="recipeName"
                name="recipeName"
                value={formData.recipeName}
                onChange={handleInputChange}
                placeholder="e.g., Grandmother's Secret Stew"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="region">Region/Community *</label>
              <input
                type="text"
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                placeholder="e.g., Maharashtra, Marathi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Recipe Description & Story</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Tell us about this dish, its ingredients, preparation method, and why it's important to you..."
                rows="5"
              />
            </div>

            <div className="form-group">
              <label htmlFor="yourName">Your Name (Optional)</label>
              <input
                type="text"
                id="yourName"
                name="yourName"
                value={formData.yourName}
                onChange={handleInputChange}
                placeholder="Help us credit your contribution"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-submit">
                Submit Recipe
              </button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => {
                  setShowForm(false);
                  setFormData({
                    recipeName: "",
                    region: "",
                    description: "",
                    yourName: "",
                  });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {submissions.length > 0 && (
          <div className="submissions-list">
            <h3>Recently Submitted Recipes</h3>
            <div className="submissions-grid">
              {submissions.map((submission) => (
                <div key={submission.id} className="submission-card">
                  <div className="submission-header">
                    <h4>{submission.name}</h4>
                    <span className="submission-badge">Forgotten</span>
                  </div>
                  <p className="submission-meta">📍 {submission.region}</p>
                  <p className="submission-desc">{submission.description}</p>
                  <p className="submission-credit">
                    Submitted by {submission.submittedBy} on{" "}
                    {submission.submittedDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
