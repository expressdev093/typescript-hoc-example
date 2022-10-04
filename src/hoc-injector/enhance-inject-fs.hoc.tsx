import { useState } from "react";
import { Subtract } from "utility-types";
export interface InjectedCounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface MakeCounterProps {
  minValue?: number;
  maxValue?: number;
}

const makeCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.FC<Subtract<P, InjectedCounterProps> & MakeCounterProps> => (
  props
) => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((value) => (value === props.maxValue ? value : value + 1));
  };

  const decrement = () => {
    setValue((value) => (value === props.minValue ? value : value - 1));
  };
  return (
    <Component
      {...(props as P)}
      value={value}
      onIncrement={increment}
      onDecrement={decrement}
    />
  );
};

export default makeCounter;
