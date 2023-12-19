import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Spin from "./Spin";
import Choices from "./Choices";
import Design from "./Design";
import { UserContext } from "./UserContext";

// make a static header
// make two contents, one for the food choices, and one for picking

const App = () => {
  const [foodList, setFoodList] = useState([
    { place: "McDonalds", onChoices: false },
    {
      place: "Spicy Dragon",
      onChoices: false,
    },

    { place: "Greek Freak", onChoices: false },
    { place: "Kiu Japanese", onChoices: false },
    { place: "Sansotei Ramen", onChoices: false },
    { place: "Congee Queen", onChoices: false },
    { place: `Paramount`, onChoices: false },
    { place: "Jollibee", onChoices: false },
    { place: `Mom's Kitchen`, onChoices: false },
    { place: "Odine Japanese", onChoices: false },
    { place: "The Keg", onChoices: false },
    { place: "Wendy's", onChoices: false },
    { place: "Nando's Peri Peri", onChoices: false },
  ]);

  const [areChoicesIn, setAreChoicesIn] = useState(false);
  const [foodChoices, setFoodChoices] = useState([]);

  return (
    <div className="main-container">
      <UserContext.Provider
        value={{
          foodList,
          setFoodList,
          foodChoices,
          setFoodChoices,
          setAreChoicesIn,
        }}
      >
        <Design />
        <Header />
        {areChoicesIn ? <Spin /> : <Choices />}
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
