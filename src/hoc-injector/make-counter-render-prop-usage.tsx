import React from "react";
import { MakeCounter } from "./make-counter-render-prop.cls";

interface CounterProps {
  style?: React.CSSProperties;
  minValue?: number;
  maxValue?: number;
}

const Counter: React.FC<CounterProps> = (props) => {
  return (
    <div>
      <h5>Make counter with render props</h5>
      <MakeCounter minValue={props.minValue} maxValue={props.maxValue}>
        {(injectedProps) => (
          <div style={props.style}>
            <button onClick={injectedProps.onDecrement}> - </button>
            {injectedProps.value}
            <button onClick={injectedProps.onIncrement}> + </button>
          </div>
        )}
      </MakeCounter>
    </div>
  );
};

export default Counter;
