import React from "react";
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

interface MakeCounterState {
  value: number;
}

//Make counter through render props
export class MakeCounter extends React.Component<
  MakeCounterProps,
  MakeCounterState
> {
  state: MakeCounterState = {
    value: 0
  };

  increment = () => {
    this.setState((prevState) => ({
      value:
        prevState.value === this.props.maxValue
          ? prevState.value
          : prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      value:
        prevState.value === this.props.minValue
          ? prevState.value
          : prevState.value - 1
    }));
  };

  render() {
    return this.props.children({
      value: this.state.value,
      onIncrement: this.increment,
      onDecrement: this.decrement
    });
  }
}

type MakeCounterHocProps = Omit<MakeCounterProps, "children">;

//make counter hoc
export const makeCounter = <P extends InjectedCounterProps>(
  Component: React.ComponentType<P>
): React.SFC<Subtract<P, InjectedCounterProps> & MakeCounterHocProps> => ({
  minValue,
  maxValue,
  ...props
}: MakeCounterHocProps) => (
  <MakeCounter minValue={minValue} maxValue={maxValue}>
    {(injectedProps) => <Component {...(props as P)} {...injectedProps} />}
  </MakeCounter>
);
