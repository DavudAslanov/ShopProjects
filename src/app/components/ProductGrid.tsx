"use client";

import { useMemo } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  isHot?: boolean;
  placeholder: string;
  placeholderAlt: string;
  image: string;        
  imageAlt?: string;    
}

interface ProductGridProps {
  products: Product[];
  minPrice: number;
  maxPrice: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const ITEMS_PER_PAGE = 6;

export function ProductGrid({
  products,
  minPrice,
  maxPrice,
  currentPage,
  onPageChange,
}: ProductGridProps) {
  const filteredProducts = useMemo(
    () => products.filter((p) => p.price >= minPrice && p.price <= maxPrice),
    [products, minPrice, maxPrice],
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <div className="shop-products">
      <div className="products-toolbar">
        <span className="results-count">
          Showing {filteredProducts.length > 0 ? startIndex + 1 : 0}–
          {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
          {filteredProducts.length} results
        </span>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {totalPages > 1 && (
            <button
              className="page next"
              onClick={() =>
                onPageChange(Math.min(currentPage + 1, totalPages))
              }
            >
              Next
            </button>
          )}
        </div>
        <select className="sort-select">
          <option>Default sorting</option>
        </select>
      </div>

      <div className="products-grid">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-img-wrapper">
              {product.isHot && <span className="badge hot">HOT</span>}


              {/* Əsas şəkil */}
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300?text=" +
                    encodeURIComponent(product.name);
                }}
              />

              {/* İkinci şəkil (hover üçün) */}
              {product.imageAlt && (
                <img
                  src={product.imageAlt}
                  alt={product.name + " alt"}
                  className="product-img-second"
                />
              )}

              <span className="wishlist-icon">♡</span>

              <button className="add-to-cart-overlay">ADD TO CART</button>
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="price">
                {product.originalPrice ? (
                  <>
                    <span className="old">
                      ${product.originalPrice.toFixed(2)}
                    </span>{" "}
                    <span className="new">${product.price.toFixed(2)}</span>
                    {product.discount && (
                      <span className="discount">-{product.discount}%</span>
                    )}
                  </>
                ) : (
                  `$${product.price.toLocaleString()}.00`
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
