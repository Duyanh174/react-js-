import React from "react";
import "./style.css"; // CSS ăn toàn bộ components trong dự án
import style from "./style.module.css";
import './style.scss'
import stl from "./style.module.scss"
const StylelComponent = () => {
  return (
    <div className="container mt-5">
      <h1 className="title">StylelComponent</h1>
      <p className={`${style.subTitle} ${style.description} ${style['sub-title']}`}>Sub Title</p>

      {/* Style inline trong react 
        + Cặp dấu ngoặc nhọn ở ngoài là cú pháp dùng để truyền giá trị cho style 
        + Cặp dấu ngoặc nhọn ở trong do style phải nhận giá trị là một object được viết theo quy tặc commelCase
      */}
      <p style={{fontSize : '20px', fontWeight:'600'}}>Style inline </p>

      <p className="style__title"> Hello SCSS</p> 
    </div>
  );
};

export default StylelComponent;


