import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import OrderList from './OrderList';
//import ProductList from './ProductList';
import Home from './Home';
import ProductListForm from './ProductListForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginOrderProduct() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">帳戶登入</Link>
                        <Link to="/orders" className="nav-link">訂單訊息</Link>
                        <Link to="/products" className="nav-link">產品</Link>
                        <Link to="/productAdd" className="nav-link">產品新增</Link>
                    </div>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/orders" element={<OrderList />} />
                        <Route path="/products" element={<Home />} />
                        <Route path="/productAdd" element={<ProductListForm/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default LoginOrderProduct;
