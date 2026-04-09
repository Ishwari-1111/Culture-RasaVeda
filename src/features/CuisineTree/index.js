import { useState } from "react";
import { Link } from "react-router-dom";
import { cuisines } from "../../data/cuisines";
import "./styles.css";

function TreeNode({ node, onSelect, selected }) {
  const isSelected = selected && selected.name === node.name;
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-col">
      <div
        className={`tree-box ${isSelected ? "tree-box--active" : ""}`}
        onClick={() => onSelect(node)}
      >
        <span className="tree-box-emoji">{node.emoji}</span>
        <span className="tree-box-name">{node.name}</span>
      </div>

      {hasChildren && (
        <>
          <div className="tree-line-down" />
          <div className="tree-branch-row">
            {node.children.map((child) => (
              <div key={child.name} className="tree-branch-item">
                <div className="tree-line-up" />
                <TreeNode node={child} onSelect={onSelect} selected={selected} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function CuisineTree() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="ct-page">
      <Link to="/" className="page-back">← Back</Link>
      <h1 className="page-title">Cuisine Family Tree</h1>
      <p className="page-sub">
        See how India's regional cuisines branched out across geography, trade routes and culture.
        Click any node to learn more.
      </p>

      {/* Visual Tree */}
      <div className="tree-scroll">
        <div className="tree-root">
          <TreeNode node={cuisines} onSelect={setSelected} selected={selected} />
        </div>
      </div>

      {/* Info Panel — appears below on selection */}
      {selected && (
        <div className="info-panel">
          <button className="info-close" onClick={() => setSelected(null)}>✕</button>
          <div className="info-emoji">{selected.emoji}</div>
          <h2 className="info-name">{selected.name}</h2>
          <p className="info-desc">{selected.desc}</p>
          <div className="info-label">Signature Dishes</div>
          <div className="info-dishes">
            {selected.dishes.map((d) => (
              <span key={d} className="dish-tag">{d}</span>
            ))}
          </div>
        </div>
      )}

      {!selected && (
        <p className="hint">↑ Click any box above to explore that cuisine</p>
      )}
    </div>
  );
}
