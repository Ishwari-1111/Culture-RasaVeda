import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function FoodStories() {
  // STEP 1 — Create stories array with sample data
  const initialStories = [
    {
      id: 1,
      author: "Priya Sharma",
      region: "Maharashtra",
      dish: "Pithla Bhakri",
      content:
        "My grandmother's recipe for pithla was passed down for generations. The warming spices and the simplicity of gram flour made every morning special. Now I make it for my own family.",
    },
    {
      id: 2,
      author: "Ravi Desai",
      region: "Gujarat",
      dish: "Undhiyu",
      content:
        "Every Makar Sankranti, we gather in the kitchen to make undhiyu. The blend of vegetables and spices in a sealed pot symbolizes the unity of our community and the richness of our harvest.",
    },
    {
      id: 3,
      author: "Anjali Kumar",
      region: "Tamil Nadu",
      dish: "Sambar",
      content:
        "Sambar brings back memories of my mother's kitchen in Chennai. The aroma of roasted spices and the sourness of tamarind—every spoonful tells a story of South Indian heritage and love.",
    },
    {
      id: 4,
      author: "Vikram Patel",
      region: "Punjab",
      dish: "Makki di Roti",
      content:
        "Winter mornings without makki di roti and sarson da saag are incomplete. The rustic flavors connect us to our ancestral lands and the rhythm of the agricultural seasons.",
    },
    {
      id: 5,
      author: "Deepa Menon",
      region: "Kerala",
      dish: "Appam",
      content:
        "The crispy edges and soft center of appam—my husband still teases me for making it differently every time. But each attempt is a journey through my mother's kitchen memories.",
    },
  ];

  // STEP 2 — Add useState for stories and form fields with localStorage persistence
  const [stories, setStories] = useState(() => {
    try {
      const savedStories = localStorage.getItem("foodStories");
      return savedStories ? JSON.parse(savedStories) : initialStories;
    } catch (error) {
      console.error("Error loading stories from localStorage:", error);
      return initialStories;
    }
  });

  const [formData, setFormData] = useState({
    author: "",
    region: "",
    dish: "",
    content: "",
  });

  // Save stories to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("foodStories", JSON.stringify(stories));
    } catch (error) {
      console.error("Error saving stories to localStorage:", error);
    }
  }, [stories]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // STEP 5 — On form submit, prepend new story to array
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.author.trim() ||
      !formData.region.trim() ||
      !formData.dish.trim() ||
      !formData.content.trim()
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Create new story with unique ID
    const newStory = {
      id: Date.now(),
      author: formData.author,
      region: formData.region,
      dish: formData.dish,
      content: formData.content,
    };

    // Prepend to stories array
    setStories([newStory, ...stories]);

    // Clear form
    setFormData({
      author: "",
      region: "",
      dish: "",
      content: "",
    });
  };

  return (
    <div className="feature-page">
      <Link to="/" className="page-back">
        ← Back
      </Link>
      <h1>Community Food Stories</h1>

      {/* STEP 4 — Render submission form */}
      <div className="story-submission-form">
        <h2>Share Your Food Memory</h2>
        <p className="form-subtitle">
          Tell us about a dish that holds a special place in your culinary
          heritage
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="author"
              placeholder="Your Name"
              value={formData.author}
              onChange={handleInputChange}
              className="form-input"
            />
            <input
              type="text"
              name="region"
              placeholder="Region / State"
              value={formData.region}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <input
            type="text"
            name="dish"
            placeholder="Dish Name"
            value={formData.dish}
            onChange={handleInputChange}
            className="form-input full-width"
          />

          <textarea
            name="content"
            placeholder="Share your story... (What makes this dish special to you?)"
            value={formData.content}
            onChange={handleInputChange}
            className="form-textarea"
            rows="5"
          />

          <button type="submit" className="submit-btn">
            ✍️ Share Your Story
          </button>
        </form>
      </div>

      {/* STEP 3 — Render story cards */}
      <div className="stories-feed">
        <h2>Stories from Our Community ({stories.length})</h2>

        <div className="stories-list">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-header">
                <div>
                  <h3 className="story-author">{story.author}</h3>
                  <p className="story-region">📍 {story.region}</p>
                </div>
              </div>

              <div className="story-dish">🍽️ {story.dish}</div>

              <p className="story-content">{story.content}</p>

              <div className="story-footer">
                <span className="heritage-badge">Heritage Recipe</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
