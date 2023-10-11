import React from "react";

const HandleEvent = () => {
  const loger = () => {
    alert("Hello World");
  };
  const showMessage = (message) => {
    alert(message);
  };
//   Mọi event trong react đều trả về tham số event 
  return (
    <div className="container">
      <h1 className="title">HandleEvent</h1>
      {/* Do hàm loger() không có tham số nên không cần thêm dấu gọi hàm  */}
      <button className="btn btn-outline-success mb-3" onClick={loger}>
        Loger
      </button>

      {/* hàm có tham số */}

      <button
        className="btn btn-outline-info mb-3 ms-3 "
        // sử dụng annonymus function
        // luôn tồn tại tham số là event 
        onClick={(event) => {
          showMessage("hello show Message");
          loger();
        }}
      >
        showMessage
      </button>
      {/* không cần tạo hàm trước */}
      <button
        className="btn btn-outline-danger ms-3 mb-3"
        onClick={(event) => {
          console.log(event.target);
          alert("Duy Anh $2000");
        }}
      >
        Show Messagge 1
      </button>
    </div>
  );
};

export default HandleEvent;
