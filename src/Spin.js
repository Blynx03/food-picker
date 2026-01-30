import React, { useRef, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import "./App.css";

const Spin = () => {
  const clientContext = useContext(UserContext);
  const { foodChoices, setFoodChoices, setAreChoicesIn } = clientContext;
  const foodContainerRef = useRef(null);
  const placeRef = useRef(null);
  const [ wheelContent, setWheelContent ] = useState([]);
  //   let elementHeight = 0;

  function shuffleArray(array) {
    console.log('array ', array)
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    if (!foodChoices.length) return;

    const repeated = [];
    const repeatCount = Math.floor(500 / foodChoices.length);

    for (let i = 0; i <= repeatCount; i++) {
      repeated.push(...foodChoices);
    }

    setWheelContent(shuffleArray([...repeated]));
  }, []);


  useEffect(() => {
    foodContainerRef.current.style.height = "38000px";
  }, [foodContainerRef]);

  function handleSpin() {
    foodContainerRef.current.style.animation =
      "spin-fast 2000ms linear, spin 4500ms ease-out 2000ms forwards";
  };

  return (
    <div className="spin-container">
      <div className="wheel-container">
        <div ref={foodContainerRef} className="food-choices-container">
          {wheelContent.map((place, index) => {
            return (
              <div ref={placeRef} key={index} className="place">
                {place}
              </div>
            );
          })}
        </div>
        <div className="wheel-pointer"></div>
        <div className="top-part"></div>
        <div className="middle-part"></div>
        <div className="top-part"></div>
      </div>
      <button className="spin-button" onClick={handleSpin}>
        SPIN!
      </button>
      <button
        className="back-button"
        onClick={() => {
          setFoodChoices([]);
          setAreChoicesIn(false);
        }}
      >
        Back to Choices!
      </button>
    </div>
  );
};

export default Spin;
