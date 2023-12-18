import React, { useContext, useRef } from "react";
import { UserContext } from "./UserContext";
import "./App.css";

const Choices = () => {
  const clientContext = useContext(UserContext);
  const foodList = clientContext.foodList;
  const setFoodList = clientContext.setFoodList;
  const foodChoices = clientContext.foodChoices;
  const setAreChoicesIn = clientContext.setAreChoicesIn;
  const refNoChoices = useRef(null);
  const enteredKeys = [];

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      let newFood = enteredKeys.join("");
      setFoodList([...foodList, { place: newFood, onChoices: true }]);
      enteredKeys.length = 0; // this will reset the input field
      document.querySelector(".added-choice-input").value = "";
    } else {
      enteredKeys.push(e.key);
    }
  }

  function handleClick() {
    let noChoices = 0;
    foodList.forEach(({ place, onChoices }) => {
      if (onChoices) {
        foodChoices.push(place);
        noChoices++;
      }
    });
    if (noChoices <= 0) {
      refNoChoices.current.style.visibility = "visible";
      //   return;
    }
    setAreChoicesIn(true);
  }

  return (
    <div className="choices-page-container">
      <div className="choices-title">Pick Your Choices</div>
      <div className="choices-container">
        {foodList.map(({ place, onChoices }, index) => {
          return (
            <div className="choice-container" key={place}>
              <input
                name={place}
                type="checkbox"
                data-value={place}
                id={place}
                checked={onChoices}
                className="choices"
                //   onChange={() => handleCheckboxChange(index)}
                onChange={() =>
                  setFoodList((prevFoodList) => {
                    let updatedFoodList = [...prevFoodList];
                    updatedFoodList[index].onChoices = !onChoices;
                    return updatedFoodList;
                  })
                }
              />
              <label htmlFor={place}>{place}</label>
            </div>
          );
        })}
        <div className="added-choice-container">
          <label htmlFor="added-choice">Add more choices:</label>
          <input
            name="added-choice"
            id="added-choice"
            type="text"
            className="added-choice-input"
            onKeyPress={handleKeyPress}
            placeholder="Enter Food/Restaurant..."
          ></input>
        </div>
      </div>
      <div ref={refNoChoices} className="no-choices-container">
        Pick your selections first..
      </div>
      <button className="enter-button" onClick={handleClick}>
        Enter the Spin Zone!
      </button>
    </div>
  );
};

export default Choices;
