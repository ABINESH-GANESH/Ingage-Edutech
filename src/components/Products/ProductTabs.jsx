import React from "react";

export default function ProductTabs({ products, activeIndex, onChangeTab }) {
  return (
    <div className="product-tabs-container">
      {products.map((product, index) => (
        <button
          key={product.id || product.title}
          className={`product-tab ${activeIndex === index ? "active" : ""}`}
          onClick={() => onChangeTab(index)}
        >
          <span className="tab-number">0{index + 1}</span>
          <span className="tab-title">{product.title}</span>
        </button>
      ))}
    </div>
  );
}
