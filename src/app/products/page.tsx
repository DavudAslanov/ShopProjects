'use client';

import { useState } from 'react';
import "@/style/product.css";
import { PriceFilter } from '@/app/components/PriceFilter';
import { ProductGrid } from '@/app/components/ProductGrid';

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

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Aarhus 3 seater sofa',
    price: 5389,
    placeholder: 'placeholder-1',
    placeholderAlt: 'placeholder-1-alt',
    image: '/images/main1.jpg',
    imageAlt: '/images/main2.jpg'
  },
  {
    id: 2,
    name: 'Bang Olufsen Beoplay',
    price: 4550,
    isHot: true,
    placeholder: 'placeholder-2',
    placeholderAlt: 'placeholder-2-alt',
    image: '/images/main2.jpg',
    imageAlt: '/images/main1.jpg'
  },
  {
    id: 3,
    name: 'Bat Lounge Low Back',
    price: 450,
    placeholder: 'placeholder-3',
    placeholderAlt: 'placeholder-3-alt',
    image: '/images/main3.jpg',
    imageAlt: '/images/main2.jpg'
  },
  {
    id: 4,
    name: 'Bottle Grinder Set',
    price: 42,
    placeholder: 'placeholder-4',
    placeholderAlt: 'placeholder-4-alt',
    image: '/images/main1.jpg',
    imageAlt: '/images/main3.jpg'
  },
  {
    id: 5,
    name: 'Erik Buch Bar Stool',
    price: 167,
    originalPrice: 419,
    discount: 60,
    placeholder: 'placeholder-5',
    placeholderAlt: 'placeholder-5-alt',
    image: '/images/main2.jpg',
    imageAlt: '/images/main1.jpg'
  },
  {
    id: 6,
    name: 'Folded Vase Carbon',
    price: 75,
    originalPrice: 155,
    placeholder: 'placeholder-6',
    placeholderAlt: 'placeholder-6-alt',
    image: '/images/main1.jpg',
    imageAlt: '/images/main2.jpg'
  },
];

export default function ProductsPage() {
  const [minPrice, setMinPrice] = useState(7);
  const [maxPrice, setMaxPrice] = useState(5389);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <main className="shop-page">
      
      <section className="shop-section">
        <div className="shop-hero">
          <div className="shop-breadcrumb">
            <div className="home-icon">⌂</div>
            <div className="crumb">» Shop</div>
          </div>
          <div className="shop-content">
            <h1>Shop</h1>
            <p>Elevate your space with our curated selection of beautifully designed, handcrafted furniture.</p>
          </div>
        </div>
        <div className="shop-categories">
          <span className="category">Accessories <sup className="count">4</sup></span>
          <span className="divider">/</span>
          <span className="category">Bath Room <sup className="count">1</sup></span>
          <span className="divider">/</span>
          <span className="category">Bedroom <sup className="count">3</sup></span>
        </div>
      </section>

      
      <section className="shop-body">
        
        <aside className="shop-filter">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinChange={setMinPrice}
            onMaxChange={setMaxPrice}
          />

          <div className="filter-block">
            <h3 className="filter-title">▼ CATEGORIES</h3>
            <ul className="filter-list">
              <li><label><input type="checkbox" /> <span className="category-text">ACCESSORIES</span></label></li>
              <li><label><input type="checkbox" /> <span className="category-text">BATH ROOM</span></label></li>
              <li><label><input type="checkbox" /> <span className="category-text">BEDROOM</span></label></li>
              <li><label><input type="checkbox" /> DINNING ROOM</label></li>
              <li><label><input type="checkbox" /> HOME DECOR</label></li>
              <li><label><input type="checkbox" /> KITCHEN</label></li>
              <li><label><input type="checkbox" /> LAUNDRY ROOM</label></li>
              <li><label><input type="checkbox" /> LIGHTNING</label></li>
              <li><label><input type="checkbox" /> LIVING ROOM</label></li>
              <li className="sub"><label><input type="checkbox" /> SOFAS &amp; ARMCHAIRS</label></li>
              <li><label><input type="checkbox" /> TABLES &amp; CHAIRS</label></li>
              <li className="sub"><label><input type="checkbox" /> CHAIRS</label></li>
              <li className="sub"><label><input type="checkbox" /> TABLES</label></li>
            </ul>
          </div>

          <div className="filter-block">
            <h3 className="filter-title">▼ BRANDS</h3>
            <div className="brands-grid">
              <div className="brand-box">Palma</div>
              <div className="brand-box">Furniture</div>
              <div className="brand-box">gluba</div>
              <div className="brand-box">Kronheim</div>
              <div className="brand-box">logitech</div>
              <div className="brand-box">brand</div>
              <div className="brand-box">◆</div>
              <div className="brand-box">Tylertone</div>
              <div className="brand-box">Ward's</div>
            </div>
          </div>

          <div className="filter-block">
            <ul className="rating-list">
              <li>
                <input type="checkbox" />
                <span className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star empty">☆</span>
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="stars">
                  <span className="star filled">★</span>
                  <span className="star filled">★</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="stars">
                  <span className="star filled">★</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                  <span className="star empty">☆</span>
                </span>
              </li>
            </ul>
          </div>
        </aside>

        
        <ProductGrid
          products={PRODUCTS}
          minPrice={minPrice}
          maxPrice={maxPrice}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </section>
    </main>
  );
}
