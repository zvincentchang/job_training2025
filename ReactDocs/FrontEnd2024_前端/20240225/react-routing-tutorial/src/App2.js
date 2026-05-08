import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { useParams } from 'react-router-dom';
import Home2 from './components/Home2';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
function App2() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">My Shop</Link>                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home2 />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:productId" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App2;