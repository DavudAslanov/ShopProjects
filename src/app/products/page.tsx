import "@/style/product.css";

export default function ProductsPage() {
  return (
    <main className="shop-page">
      {/* ============ BANNER SECTION ============ */}
      <section className="shop-section">
        <div className="shop-hero">
          <div className="shop-breadcrumb">
            <div className="home-icon">⌂</div>
            <div className="crumb">» Shop</div>
          </div>
          <div className="shop-content">
            <h1>Shop</h1>
            <p>Elevate your space with our curated selection of beautifully designed, handcrafted furniture. Comfort meets style in every piece—perfect for any room in your home.</p>
          </div>
        </div>
        <div className="shop-categories">
          <span className="category">Accessories <span className="count">4</span></span>
          <span className="divider">/</span>
          <span className="category">Bath Room <span className="count">1</span></span>
          <span className="divider">/</span>
          <span className="category">Bedroom <span className="count">3</span></span>
        </div>
      </section>

      {/* ============ SHOP BODY: FILTER + PRODUCTS ============ */}
      <section className="shop-body">
        {/* ---------- SIDEBAR / FILTER ---------- */}
        <aside className="shop-filter">
          <div className="filter-block">
            <h3 className="filter-title">▲ FILTER BY PRICE</h3>
            <div className="price-range">
              <span className="range-knob left">$7</span>
              <div className="range-bar"></div>
              <span className="range-knob right">$5,389</span>
            </div>
            <p className="price-text">Price: $7 – $5,389</p>
          </div>

          <div className="filter-block">
            <h3 className="filter-title">▲ CATEGORIES</h3>
            <ul className="filter-list">
              <li><label><input type="checkbox" /> ACCESSORIES</label></li>
              <li><label><input type="checkbox" /> BATH ROOM</label></li>
              <li><label><input type="checkbox" /> BEDROOM</label></li>
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
            <h3 className="filter-title">▲ BRANDS</h3>
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
              <li><input type="checkbox" /> <span className="stars">★★★★★</span></li>
              <li><input type="checkbox" /> <span className="stars">★★★★☆</span></li>
              <li><input type="checkbox" /> <span className="stars">★★★☆☆</span></li>
              <li><input type="checkbox" /> <span className="stars">★★☆☆☆</span></li>
              <li><input type="checkbox" /> <span className="stars">★☆☆☆☆</span></li>
            </ul>
          </div>
        </aside>

        {/* ---------- PRODUCTS GRID ---------- */}
        <div className="shop-products">
          <div className="products-toolbar">
            <span className="results-count">Showing 1–16 of 17 results</span>
            <div className="pagination">
              <span className="page active">1</span>
              <span className="page">2</span>
            </div>
            <select className="sort-select">
              <option>Default sorting</option>
            </select>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-1"></div>
              <h4>Aarhus 3 seater sofa</h4>
              <p className="price">$5,389.00</p>
            </div>
            <div className="product-card">
              <span className="badge hot">HOT</span>
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-2"></div>
              <h4>Bang Olufsen Beoplay</h4>
              <p className="price">$4,550.00</p>
            </div>
            <div className="product-card">
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-3"></div>
              <h4>Bat Lounge Low Back</h4>
              <p className="price">$450.00</p>
            </div>
            <div className="product-card">
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-4"></div>
              <h4>Bottle Grinder Set</h4>
              <p className="price">$42.00</p>
            </div>
            <div className="product-card">
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-5"></div>
              <h4>Erik Buch Bar Stool</h4>
              <p className="price">
                <span className="old">$419.00</span>{" "}
                <span className="new">$167.60</span>{" "}
                <span className="discount">-60%</span>
              </p>
            </div>
            <div className="product-card">
              <div className="card-actions"><span>♡</span></div>
              <div className="product-img placeholder-6"></div>
              <h4>Folded Vase Carbon</h4>
              <p className="price">
                <span className="old">$155.00</span>{" "}
                <span className="new">$75.00</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
