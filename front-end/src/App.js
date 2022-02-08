import React from 'react';
import data from './data';
import { BrowserRouter, Route,Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

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
            <a href="cart.html"> Cart </a>
            <a href="login.html"> Login </a>
            <a href="signup.html"> Create Account </a>
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
