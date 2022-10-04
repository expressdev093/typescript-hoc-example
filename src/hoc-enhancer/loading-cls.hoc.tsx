import React, { Component } from "react";

interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoding extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <p>...loading with class</p>
      ) : (
        <Component {...(props as P)} />
      );
    }
  };

export default withLoading;
