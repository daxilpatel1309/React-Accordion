import React, { useState } from "react";
import "./App.css";
import { FcCollapse, FcExpand } from "react-icons/fc";

const Data = ({ title, body }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      className={show ? "opened accordion-Item" : "accordion-Item"}
      onClick={handleClick}
      //   onMouseEnter={() => {
    //     setShow(true);
    //   }}
    //   onMouseLeave={() => {
    //     setShow(false);
    //   }}
    >
      <div className="accordion-title">
        <h5>{title}</h5>
        <p> {show ? <FcCollapse /> : <FcExpand />} </p>
      </div>
      {show && <p>{body}</p>}
    </div>
  );
};

export default Data;
