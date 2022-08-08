import React, { useLayoutEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("GFG");

  useLayoutEffect(() => {
    if (value === "GFG") {
      // Changing the state
      setValue("GeeksForGeeks");
    }
    console.log("UseLayoutEffect is called with the value of ", value);
  }, [value]);

  return (
    <div style={{ margin: "20px 40px" }}>
      <br />
      <br />
      <div>
         <p style={{ fontSize: "40px" }}> useLayoutEffect: </p> <br />
        The useLayoutEffect works similarly to useEffect but rather working
        asynchronously like useEffect hook, it fires synchronously after all DOM
        loading is done loading.<br/>
         This is useful for synchronously re-rendering
        the DOM and also to read the layout from the DOM. <br/>
        But to prevent
        blocking the page loading, we should always use useEffect hook.
      </div> <br/> <br/>

       <div>{value} is the greatest portal for geeks!</div>
    </div>
  );
};

export default App;
