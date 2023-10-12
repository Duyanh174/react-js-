import logo from "./logo.svg";
import "./App.css";
import FunctionComponent from "./demoComponent/FunctionComponent";
import ClassComponent from "./demoComponent/ClassComponent";
import BTComponent from "./BTComponent/BTComponent";
import BindingData from "./BindingData/BindingData";
import RenderWithConditionn from "./RenderWithConditioon/RenderWithConditionn";
import HandleEvent from "./HandleEvent/HandleEvent";
import StylelComponent from "./StyleComponent/StylelComponent";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
// component lớn nhất trong dự án

// cos 2 loaj component
// + class component (stateful) (1 đối tượng) sử dụng trước < 2019 (quan trọng nhất của class component là lifecycle )
// + function component (stateless) ( 1 function bình thường) (100% dùng function)
// attribute: được viết theo quy tắc comelCase

//JSX: javascript XML => Giúp viết HTML trong javascript
// 1 component chỉ được return về một thẻ JSX duy nhất
function App() {
  return (
    <div className="App">
      {/* <span className='title'>hello react</span>
     <p>heh</p>
     <FunctionComponent></FunctionComponent>
     <ClassComponent></ClassComponent>

     <FunctionComponent/> */}
      <BTComponent />

      <BindingData />

      <RenderWithConditionn/>

      <HandleEvent/>

      <StylelComponent/>

      <RenderWithMap/>
    </div>
  );
}

export default App;
