import React from "react";

const Design = () => {
  const DesignPatternCol = (i) => {
    const col = [];
    for (let j = 0; j <= i; j++) {
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
    for (let i = 0; i < 12; i++) {
      row.push(
        <div key={`row${i}`} className="design-pattern-container">
          {DesignPatternCol(12)}
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
