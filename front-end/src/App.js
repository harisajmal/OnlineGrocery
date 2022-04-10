import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/registerPage';
import SigninPage from './pages/signinPage';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/" > OnlineGrocery</Link>
        </div>
        <div className="header-links">
            <a href="/cart/:id"> Cart </a>
            <Link to="/signin" > Sign In</Link>
            <Link to="/register" > Register </Link>
        </div>
    </header>
    <aside className="sidebar">
        <h3> Grocery categories </h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Softdrinks</a>
            </li>
            <li>
                <a href="index.html">Bakery</a>
            </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/cart/:id" component={CartPage} />
        <Route path="/" exact={true} component={HomePage} />

        </div>
    </main>
    <footer className="footer">
        All rights reserved 2022 c
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;