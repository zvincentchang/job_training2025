import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductCatalogue from './ProductCatalog';
import CreateOrder from './CreateOrder';
//import OrderStatus from './OrderStatus';
//import UserManagement from './UserManagement';
//import OrderMonitoring from './OrderMonitoring';
//import SupplierDashboard from './SupplierDashboard';
const OrderStatus = () => {
  return (
    <h2>OrderStatus Under Construction</h2>
  )
}
const UserManagement = () => {
  return (
    <h2>UserManagement Under Construction</h2>
  )
}
const OrderMonitoring = () => {
  return (
    <h2>OrderMonitoring Under Construction</h2>
  )
}
const SupplierDashboard = () => {
  return (
    <h2>SupplierDashboard Under Construction</h2>
  )
}
const MainApp = () => {
  return (
    <Router>
      <div class="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> {/* Example of using Bootstrap classes */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">產品目錄</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-order">建立訂單</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order-status">查看訂單狀態</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user-management">用戶管理</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order-monitoring">監控訂單</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/supplier-dashboard">供應商儀表板</Link>
            </li>
          </ul>
        </nav>


        <Routes>
          <Route path="/" element={<ProductCatalogue />} />
          <Route path="/create-order" element={<CreateOrder />} />
          <Route path="/order-status" element={<OrderStatus />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/order-monitoring" element={<OrderMonitoring />} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainApp;
