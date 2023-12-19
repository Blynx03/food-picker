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
  let enteredKeys = [];

  let hasChoice = foodList.some((food) => food.onChoices);

  function handleKeyDown(e) {
    console.log(e.key);
    refNoChoices.current.style.display = "none";

    if (e.key === "Enter") {
      let newFood = enteredKeys.join("");
      let alreadyListed = foodList.some((food) => {
        return food.place.toLowerCase() === newFood.toLowerCase();
      });
      if (alreadyListed) {
        refNoChoices.current.style.display = "block";
        refNoChoices.current.textContent = "This is already listed";
        enteredKeys.length = 0;
        return;
      } else {
        setFoodList([...foodList, { place: newFood, onChoices: true }]);
        enteredKeys.length = 0; // this will reset the input field
        document.querySelector(".added-choice-input").value = "";
        refNoChoices.current.textContent = "Pick your selection first.";
      }
    } else if (e.key === "Backspace" || e.key === "Delete") {
      enteredKeys.pop();
    } else if (
      e.key === "CapsLock" ||
      e.key === "Shift" ||
      e.key === "Tab" ||
      e.key === "Meta" ||
      e.key === "Alt" ||
      e.key === "Control"
    ) {
      return;
    } else {
      enteredKeys.push(e.key);
    }
  }

  function handleClick() {
    if (hasChoice) {
      foodList.forEach(({ place, onChoices }) => {
        if (onChoices) {
          foodChoices.push(place);
        }
      });
      setAreChoicesIn(true);
    } else {
      refNoChoices.current.style.display = "block";
    }
  }

  return (
    <div className="choices-section-container">
      <div className="choices-title">Pick Your Choices</div>
      <div className="choices-container">
        {foodList.map(({ place, onChoices }, index) => {
          return (
            <div className="choice-container" key={place + index}>
              <input
                name={place}
                type="checkbox"
                data-value={place}
                id={place}
                checked={onChoices}
                className="choices"
                onChange={() => {
                  refNoChoices.current.style.display = "none";
                  setFoodList((prevFoodList) => {
                    let updatedFoodList = [...prevFoodList];
                    updatedFoodList[index].onChoices = !onChoices;
                    return updatedFoodList;
                  });
                }}
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
            onKeyDown={handleKeyDown}
            placeholder="Enter Food/Restaurant..."
          ></input>
        </div>
      </div>
      <div className="no-choices-enter-btn-container">
        <div ref={refNoChoices} className="no-choices">
          Pick your selections first..
        </div>
        <button className="enter-button" onClick={handleClick}>
          Enter the Spin Zone!
        </button>
      </div>
    </div>
  );
};

export default Choices;
