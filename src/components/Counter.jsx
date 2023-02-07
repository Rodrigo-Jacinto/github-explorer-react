import { useState } from "react";

export function Counter() {
  let [counter, setCounter] = useState(0);

  function incremento() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={incremento}>
        Add
      </button>
    </div>
  );
}
