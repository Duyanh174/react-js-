import React from "react";

const BindingData = () => {
  const name = "Bùi Duy Anh ";
  const sum = (a, b) => a + b;
  const student = {
    name: "ABC",
    age: 30,
  };
  return (
    <div className="container mt-5">
      <h1>BindingData</h1>
      <p className="fs-3">Name: {name}</p>
      <p className="fs-3 mt-3"> Sum: {sum(10, 20)}</p>
      <p>{student.name}</p>
    </div>
  );
};

export default BindingData;
