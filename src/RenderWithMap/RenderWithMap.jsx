//State => props
import React from "react";

const RenderWithMap = () => {
  const products = [
    {
      name: "iphone 7+",
      price: 10000000,
      color: "black",
    },
    {
      name: "iphone 8+",
      price: 80000000,
      color: "pink",
    },
    {
      name: "iphone X+",
      price: 120000000,
      color: "blue",
    },
  ];
  return (
    <div className=" container mt-5">
      <h1>RenderWithMap</h1>
      <p>Danh sách sản phẩm </p>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
            {/* 
            1. Bắt buộc phải có return thì mới render ra UI
            2. Chỉ được phép return về 1 thẻ duy nhất  
            3. Phải có thuộc tính key ở thẻ bao bọc ngoài cùng và giá trị của key là DUY NHẤT
            4. hạn chế sử dụng index làm giá trị của thuộc tính key => Chỉ sử dụng khi mảng tính KHÔNG CÓ THÊM, XÓA,SỬA 
             */}
          {products.map((product, index) => {
            // Bắt  buộc phải có return
            return (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RenderWithMap;

//State, props
