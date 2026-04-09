import { useLocation } from "react-router-dom";

export default function FoodDetail() {
  const { state } = useLocation();

  if (!state) return <div>No data</div>;

  return (
    <div className="page">
      <h1>{state.name}</h1>
      <p>{state.description}</p>

      <h3>Ingredients</h3>
      <p>{state.ingredients}</p>

      <h3>Best Places</h3>
      <p>{state.places}</p>

      <h3>Fun Fact</h3>
      <p>{state.funFact}</p>
    </div>
  );
}
