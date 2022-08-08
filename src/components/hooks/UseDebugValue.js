import { useDebugValue, useState } from "react";

function useCount() {
  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
  }, 4000);

  useDebugValue(count);
  return count;
}

function UseDebugValue() {
  const count = useCount();

  return (
    <div className="App">
      <button>{count}</button>
    </div>
  );
}

export default UseDebugValue;
