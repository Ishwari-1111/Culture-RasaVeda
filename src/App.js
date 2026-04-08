import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

import RecipeEncyclopedia from "./features/RecipeEncyclopedia";
import FoodMap from "./features/FoodMap";
import IngredientTracker from "./features/IngredientTracker";
import FestivalCalendar from "./features/FestivalCalendar";
import CuisineTree from "./features/CuisineTree";
import StreetFoodDirectory from "./features/StreetFoodDirectory";
import TechniquesWiki from "./features/TechniquesWiki";
import SpiceGuide from "./features/SpiceGuide";
import FoodTimeline from "./features/FoodTimeline";
import EndangeredArchive from "./features/EndangeredArchive";
import DietaryFilter from "./features/DietaryFilter";
import FoodStories from "./features/FoodStories";
import MultilingualSupport from "./features/MultilingualSupport";
import ChefSpotlights from "./features/ChefSpotlights";
import SacredHeritageModule from "./features/SacredHeritageModule";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeEncyclopedia />} />
        <Route path="/map" element={<FoodMap />} />
        <Route path="/ingredients" element={<IngredientTracker />} />
        <Route path="/festivals" element={<FestivalCalendar />} />
        <Route path="/cuisine-tree" element={<CuisineTree />} />
        <Route path="/street-food" element={<StreetFoodDirectory />} />
        <Route path="/techniques" element={<TechniquesWiki />} />
        <Route path="/spices" element={<SpiceGuide />} />
        <Route path="/timeline" element={<FoodTimeline />} />
        <Route path="/endangered" element={<EndangeredArchive />} />
        <Route path="/dietary" element={<DietaryFilter />} />
        <Route path="/stories" element={<FoodStories />} />
        <Route path="/multilingual" element={<MultilingualSupport />} />
        <Route path="/chefs" element={<ChefSpotlights />} />
        <Route path="/religion" element={<SacredHeritageModule />} />
      </Routes>
    </BrowserRouter>
  );
}
