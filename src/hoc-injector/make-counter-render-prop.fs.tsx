import { useState } from "react";
import { Subtract, Omit } from "utility-types";
export interface InjectedCounterProps {
  value: number;
  onIncrement(): void;
  onDecrement(): void;
}

interface MakeCounterProps {
  minValue?: number;
  maxValue?: number;
  children(props: InjectedCounterProps): JSX.Element;
}

//counter through render
export const MakeCounter: React.FC<MakeCounterProps> = (props) => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((value) => (value === props.maxValue ? value : value + 1));
  };

  const decrement = () => {
    setValue((value) => (value === props.minValue ? value : value - 1));
  };
  return props.children({
    value: value,
    onIncrement: increment,
    onDecrement: decrement
  });
};

type MakeCounterHocProps = Omit<MakeCounterProps, "children">;

//counter hoc
export const makeCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.SFC<Subtract<P, InjectedCounterProps> & MakeCounterHocProps> => (
  props
) => {
  return (
    <MakeCounter minValue={props.minValue} maxValue={props.maxValue}>
      {(injectedProps) => <Component {...(props as P)} {...injectedProps} />}
    </MakeCounter>
  );
};
