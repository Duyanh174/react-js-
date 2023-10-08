// Render có điều kiện (Binding có điều kiện )
import React from "react";

const RenderWithConditionn = () => {
  const isLogin = true;
  const isShowMessage = false;
  // muốn sử dụng if else như javascript thì bắt buộc phải tạo hàm
  const renderLogin = () => {
    if (isLogin) {
      return (
        <div>
          <p>hello Duy Anh</p>
          <button className="btn btn-danger mb-5">Đăng xuất</button>
        </div>
      );
    }
    return <button className="btn btn-success mb-5 ">Đăng nhập</button>;
  };
  return (
    <div className="container">
      <h1>RenderWithConditionn</h1>
      {/* {isLogin ? (
        <div>
          <p>hello Duy Anh</p>
          <button className="btn btn-danger mb-5">Đăng xuất</button>
        </div>
      ) : (
        <button className="btn btn-success mb-5 ">Đăng nhập</button>
      )} */}
      {renderLogin()}
      {/* && có nghĩa là nếu điều kiện phía trước là đúng thì sẽ thực hiện render UI còn nếu là sai thì sẽ không render */}
      {isShowMessage && <p className="fs-3 mt-5">Hello Duy Anh </p>}
    </div>
  );
};

export default RenderWithConditionn;

// state
// props
// redux
// redux-toolkit
// react-router
// form (react-hook-form)
// lifeCycle
// useEffect, useMeno, useRef, useCallback, useId, useTransition, neno
// react-query
// typescript
