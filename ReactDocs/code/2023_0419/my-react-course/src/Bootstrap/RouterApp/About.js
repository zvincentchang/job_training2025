import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {  
  // 1.使用 useNavigate 主動觸發 react-router-dom 頁面跳轉功能(並且可傳入轉頁後的state資料)
  // 2.useNavigate() may be used only in the context of a <Router> component(操作useNavigate必須在Router的子組件裡使用)
  // 3.傳統window.location的導頁方式會讓整個畫面重新整理,使用者體驗較不好
  let navigate = useNavigate();
  const clickUseNavigate = () => {
      const inboxInfo = {
        id: 456,
        text: 'HelloText'
      };
      navigate("/inbox", {state: inboxInfo} );
      // window.location = "/inbox";
  }

  return (
    <div>
      <h3>About</h3>
      <button onClick={clickUseNavigate}>useNavigate to inbox</button>
    </div>
  )
}

export default About;
