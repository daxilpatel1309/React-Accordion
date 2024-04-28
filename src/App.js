import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Data from "./Data";

const App = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [showData, setShowData] = useState([]);

  const loadData = () => {
    fetch(url, {
       method: "GET",
    }).then((res) => res.json())
      .then((result) => {
        if (result) {
          setShowData(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

useEffect(()=>{
  loadData(); 
},[]);

  return (
    <div className="container">
      <h5 className="head">React Accordian</h5>
      <div className="row">

        {showData.map((item,index)=>
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 " key={index}>
            <Data {...item} />
        </div>
      )}
      </div>
    </div>
  );
};

export default App;
