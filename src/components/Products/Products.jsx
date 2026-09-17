import { useState } from "react";
import { products } from "../../data/productData";
import ProductTabs from "./ProductTabs";
import "./Products.css";

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const current = products[activeProduct];

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="products" id="products">
      <div className="section-heading">
        <span className="section-tag">OUR DIGITAL SOLUTIONS</span>
        <h2>Reimagining Education Through Tech</h2>
        <p>
          Next-generation products engineered to make teaching frictionless,
          learning deeply engaging, and results predictable.
        </p>
      </div>

      <div className="product-wrapper">
        <ProductTabs
          products={products}
          activeIndex={activeProduct}
          onChangeTab={setActiveProduct}
        />

        <div className="product-content-card">
          <div className="product-text">
            {current.badge && (
              <span className="product-badge">{current.badge}</span>
            )}

            <h3>{current.title}</h3>
            <div className="product-tagline">{current.tagline}</div>

            <p>{current.description}</p>

            {current.features && (
              <ul className="product-feature-list">
                {current.features.map((item, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <button className="primary-btn">{current.button}</button>
          </div>

          <div className="product-image-container">
            <img
              src={
                imageErrors[current.id]
                  ? current.localImage
                  : current.image
              }
              alt={current.title}
              onError={() => handleImageError(current.id)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
