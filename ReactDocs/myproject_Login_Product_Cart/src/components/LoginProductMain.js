import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Store from './Store';
import ShowProduct from './ShowProduct';
import Cart from './Cart';
function LoginProductMain() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [shopitem, setShopitem] = useState(0);

    const changeItem = (shopitem) => {
        setShopitem(shopitem)
    }
    const onLogin = (username) => {
        if (username != null) {
            setIsLoggedIn(true);
            setUsername(username);
        } else {
            setIsLoggedIn(false);
            alert('登入失敗');
        }
    };
    // Function to handle logout
    function LogoutButton() {
        const navigate = useNavigate();

        const onLogout2 = () => {
            onLogout();
            navigate('/products');
        };

        return (
            <a className="btn btn-link" onClick={onLogout2}>
                登出
            </a>
        );
    }
    const onLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.clear();
        setShopitem(0);

    };
    return (

        <Router>
            <div className='contrainer'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">帳戶登入</Link>
                        <Link to="/products" className="nav-link">產品</Link>
                    </div>

                    <div className="navbar-nav ms-auto">
                        <Link to="/showcart" className="nav-link">購物車</Link><span className="nav-link">({shopitem})</span>
                        {isLoggedIn ? (
                            <span className="nav-link">歡迎, {username}！<LogoutButton /></span>
                        ) : (
                            <span className="nav-link">未登入</span>
                        )}
                    </div>
                </nav>

                <div className="container">
                    <Routes>
                        <Route exact path="/" element={<Login onLogin={onLogin} />} />
                        <Route path="/products" element={<Store />} />
                        <Route path="/product/:pid" element={<ShowProduct changeItem={changeItem} isLoggedIn={isLoggedIn} />} />
                        <Route path="/showcart" element={<Cart />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default LoginProductMain;
