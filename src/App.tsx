import React from "react";
import { increment, incrementByAmount, addObject } from "./store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch(
            addObject({
              key: "value",
              value: 5,
            }),
          )
        }
      >
        Increment by 5
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
