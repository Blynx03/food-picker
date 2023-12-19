import React from "react";

const Design = () => {
  const DesignPatternCol = () => {
    const col = [];
    for (let j = 0; j <= 4; j++) {
      col.push(
        <div key={`col${j}`} className="design-pattern">
          Food Picker
        </div>
      );
    }
    return col;
  };

  const DesignPatternRow = () => {
    const row = [];
    for (let i = 0; i < 7; i++) {
      row.push(
        <div key={`row${i}`} className="design-pattern-container">
          {DesignPatternCol()}
        </div>
      );
    }
    return row;
  };

  return (
    <div className="design-container">
      <DesignPatternRow />
    </div>
  );
};

export default Design;
