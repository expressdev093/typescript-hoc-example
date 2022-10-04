import React from "react";
import {
  makeCounter,
  InjectedCounterProps
} from "./make-counter-render-prop.fs";

interface CounterProps extends InjectedCounterProps {
  style?: React.CSSProperties;
}

const Counter: React.FC<CounterProps> = (props) => {
  return (
    <div style={props.style}>
      <button onClick={props.onDecrement}> - </button>
      {props.value}
      <button onClick={props.onIncrement}> + </button>
    </div>
  );
};

export default makeCounter(Counter);
