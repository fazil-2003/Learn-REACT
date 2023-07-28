// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom";
// // import "./index.css";
// import App from "./App";
// // import Inlineexample from "./App";
// import Reactstyle from "./App";
// import styles from './Demo.Module.css'
// import img1 from './red.jpg'
// import img2 from './sam.jpg'
// import './Style.css'
// import vid from './vid.mp4'

// class Reactstyle extends 
// React.Component{
//   render(){
    
//       const mystyle={
//         color:"yellow", 
//         fontFamily:"Arial"
//       }
//       return( 
//       <div>
//          <h2 style={mystyle}>WHOAH NOTHING BUT REACT</h2>
//          <h2>hola</h2>
//          <h3 class="App">ROCKING</h3>
//          <p className="heading"> Nothing is a Good Front end Framework except REACT</p>
//          <br></br>
//          <img className="img1" src={img1} alt="logo" width={400} height={300}></img>
//          <img className="img2" src={img2} alt="logo" width={400} height={300}></img>
//          <div>
//           <video width={200} height={200} controls className="faz">
//             <source className="faz" src={vid} type="video/mp4"></source>
//           </video>
//           </div>

//          <img className="img1" src={img1} alt="logo" width={400} height={300}></img>
//          <img className="img2" src={img2} alt="logo" width={400} height={300}></img>
//       </div>)
//   }
// }

import React from "react";
import ReactDOM from "react-dom";
// var n = () =>
// {
//   var a = 5;
//   if (a==5){
//      a=10;
//   }document.getElementById('root').innerHTML=a;
// }
// n();

// import React from "react";
// import ReactDOM from "react-dom";
// var a = (x) =>
// {
//   var a = 5;
//   var b = 10;
//   var c = a+b+x;

//   if (a==5){
//      a=10;
//   }document.getElementById('root').innerHTML=c;
// }
// a(30);

// class Demo{
//   methodone(){
//     var a=5;
//     var b=10;
//     var c=a+b;
//     document.getElementById('root').innerHTML=c;

//   }
// }
// var mydemo=new Demo();
// mydemo.methodone();

class sumo{
  
  method(x){
    var n,re,s=0;
    while (n){
        re=n%10;
        s=s+re;
        n=Math.floor(n/10);
      }
    document.getElementById('root').innerHTML=s;
  }
}
var obj = new Demo();
obj.method(1234);


// ReactDOM.render(<Reactstyle/>,
// document.getElementById("root"));
