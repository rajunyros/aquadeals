import React, { useState, useCallback } from "react";
var funccount = new Set();
const UseCallback2 = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  alert(funccount.size);

  return (
    <div style={{ margin: "20px 40px" }}>
      <p style={{ fontSize: "40px" }}> useCallback: </p> <br />
      <p>
        The useCallback hook is used when you have a component in which the
        child is rerendering again and again without need. Pass an inline
        callback and an array of dependencies. useCallback will return a
        memoized version of the callback that only changes if one of the
        dependencies has changed. This is useful when passing callbacks to
        optimized child components that rely on reference equality to prevent
        unnecessary renders..
        <br/><br/>

        One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.

      </p>{" "}
      <br /> <br />
      Count: {count}
      &nbsp;&nbsp;&nbsp;
      <button onClick={incrementCounter}>Increase counter</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={decrementCounter}>Decrease Counter</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={incrementNumber}>increase number</button>
    </div>
  );
};

export default UseCallback2;
