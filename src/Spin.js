import React, { useRef, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import "./App.css";

const Spin = () => {
  const clientContext = useContext(UserContext);
  const foodChoices = clientContext.foodChoices;
  const setFoodChoices = clientContext.setFoodChoices;
  const setAreChoicesIn = clientContext.setAreChoicesIn;
  const refFoodContainer = useRef(null);
  const refPlace = useRef(null);
  const wheelContent = [];
  //   let elementHeight = 0;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const copiedChoices = [...foodChoices];
    shuffleArray(copiedChoices);
    setFoodChoices(copiedChoices);
  }, [setFoodChoices]);

  console.log(foodChoices);
  //   console.log(copiedChoices);

  let counter = 0;
  while (counter <= Math.floor(1000 / foodChoices.length)) {
    foodChoices.forEach((food) => {
      wheelContent.push(food);
    });
    counter++;
  }

  useEffect(() => {
    // elementHeight = refPlace.current.offsetHeight;
    // const totalHeight = elementHeight * 1000;
    refFoodContainer.current.style.height = "38000px";
    // console.log(elementHeight);
    // console.log(totalHeight);
  }, [refFoodContainer]);

  function handleSpin() {
    refFoodContainer.current.style.animation = "spin 6500ms ease-out forwards";
  }

  return (
    <div className="spin-container">
      <div className="wheel-container">
        <div ref={refFoodContainer} className="food-choices-container">
          {wheelContent.map((place, index) => {
            return (
              <div ref={refPlace} key={index} className="place">
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
