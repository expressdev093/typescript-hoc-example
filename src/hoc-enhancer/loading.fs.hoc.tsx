import React from "react";

interface WithLoadingProps {
  loading: boolean;
}

const withLoadingFunctions = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => ({
  loading,
  ...props
}: WithLoadingProps) =>
  loading ? (
    <p>...loading with hoc functions</p>
  ) : (
    <Component {...(props as P)} />
  );

export default withLoadingFunctions;
