import React, { useState } from "react";

// function UseMemoHook() {
const UseMemoHook = () => {
  const [number, setNumber] = useState(0);
  const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div style={{ margin: "20px 40px" }}>
      <p style={{ fontSize: "40px" }}> UseMemo: </p> <br />
      <p>
        The React useMemo Hook returns a memoized value. <br />
        Think of memoization as caching a value so that it does not need to be
        recalculated. <br />
        The useMemo Hook only runs when one of its dependencies update. <br />
        This can improve performance. The useMemo and useCallback Hooks are
        similar.
      </p>{" "}
      <br /> <br />
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>
      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
};

// function to square the value
function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default UseMemoHook;
