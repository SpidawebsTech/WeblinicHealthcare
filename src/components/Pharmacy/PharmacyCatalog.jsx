import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { FiSearch, FiShoppingCart, FiPlus, FiMinus, FiCheckCircle, FiPackage } from "react-icons/fi";
import "./PharmacyCatalog.css";

function PharmacyCatalog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [addedNotice, setAddedNotice] = useState("");

  const categories = ["All", "Pain Relief", "Antibiotics", "Vitamins & Supplements", "Cardiology", "First Aid"];

  const medicines = [
    { id: 1, name: "Panadol Extra 500mg", category: "Pain Relief", price: 150, prescriptionRequired: false, stock: "In Stock" },
    { id: 2, name: "Amoxicillin 500mg", category: "Antibiotics", price: 450, prescriptionRequired: true, stock: "In Stock" },
    { id: 3, name: "Centrum Multivitamin", category: "Vitamins & Supplements", price: 1200, prescriptionRequired: false, stock: "In Stock" },
    { id: 4, name: "Aspirin 75mg", category: "Cardiology", price: 200, prescriptionRequired: false, stock: "In Stock" },
    { id: 5, name: "Cefixime 400mg", category: "Antibiotics", price: 850, prescriptionRequired: true, stock: "In Stock" },
    { id: 6, name: "Band-Aid First Aid Kit", category: "First Aid", price: 650, prescriptionRequired: false, stock: "In Stock" },
  ];

  const addToCart = (item) => {
    const existing = cart.find((cartItem) => cartItem.id === item.id);
    if (existing) {
      setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
    setAddedNotice(`Added ${item.name} to cart!`);
    setTimeout(() => setAddedNotice(""), 3000);
  };

  const updateQuantity = (id, change) => {
    setCart(cart.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : item;
      }
      return item;
    }));
  };

  const filteredMedicines = medicines.filter((med) => {
    const matchesCategory = selectedCategory === "All" || med.category === selectedCategory;
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCartItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <DashboardLayout>
      <div className="pharmacy-container">
        <div className="pharmacy-header">
          <div>
            <h2>E-Pharmacy Store</h2>
            <p>Order genuine medicines and healthcare essentials delivered to your doorstep.</p>
          </div>
          <div className="cart-badge-button">
            <FiShoppingCart size={20} />
            <span>{totalCartItems} Items</span>
            <strong>Rs. {totalPrice}</strong>
          </div>
        </div>

        {addedNotice && (
          <div className="pharmacy-alert">
            <FiCheckCircle /> {addedNotice}
          </div>
        )}

        <div className="filter-section">
          <div className="search-box">
            <FiSearch className="p-search-icon" />
            <input
              type="text"
              placeholder="Search medicines, supplements, healthcare products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="p-category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`p-category-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)} >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="pharmacy-grid">
          <div className="products-grid">
            {filteredMedicines.map((med) => {
              const inCartItem = cart.find((c) => c.id === med.id);
              return (
                <div key={med.id} className="medicine-card">
                  <div className="card-top">
                    <span className="category-tag">{med.category}</span>
                    {med.prescriptionRequired && (
                      <span className="rx-tag">Rx Required</span>
                    )}
                  </div>
                  <div className="medicine-icon-box">
                    <FiPackage size={28} />
                  </div>
                  <h3>{med.name}</h3>
                  <div className="price-row">
                    <span className="price">Rs. {med.price}</span>
                    <span className="stock">{med.stock}</span>
                  </div>

                  {inCartItem ? (
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(med.id, -1)}><FiMinus /></button>
                      <span>{inCartItem.qty}</span>
                      <button onClick={() => updateQuantity(med.id, 1)}><FiPlus /></button>
                    </div>
                  ) : (
                    <button className="add-cart-btn" onClick={() => addToCart(med)}>
                      <FiShoppingCart /> Add to Cart
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <div className="cart-summary-sidebar">
            <h3>Cart Summary</h3>
            {cart.length === 0 ? (
              <p className="empty-cart-text">Your cart is empty.</p>
            ) : (
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <div>
                      <p className="cart-item-title">{item.name}</p>
                      <small>Rs. {item.price} x {item.qty}</small>
                    </div>
                    <strong>Rs. {item.price * item.qty}</strong>
                  </div>
                ))}
                <div className="cart-divider"></div>
                <div className="cart-total-row">
                  <span>Total Amount</span>
                  <strong>Rs. {totalPrice}</strong>
                </div>
                <Link to="/dashboard/pharmacy/checkout" className="checkout-btn">Proceed to Checkout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default PharmacyCatalog;