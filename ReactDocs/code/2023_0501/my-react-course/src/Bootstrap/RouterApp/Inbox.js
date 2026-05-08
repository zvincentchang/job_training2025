import React from 'react';
import { useParams, useLocation } from "react-router-dom";

const Inbox = () => {
  // useParams接收網址路徑參數
  let params = useParams();
  // useLocation接收由navigate導頁傳入而來的資料
  const location = useLocation();
  const inboxInfo = location.state;

  return (
    <div>
      <h2>Inbox</h2>
      <h3>useParams:{params.id}</h3>
      <h3>useLocation:{inboxInfo !== null && inboxInfo.id}</h3>
      <h3>useLocation:{inboxInfo !== null && inboxInfo.text}</h3>
    </div>
  )
}

export default Inbox;
