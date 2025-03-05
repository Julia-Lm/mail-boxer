import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const ErrorBoundaryComponent = ({ children }: { children?: ReactNode }) => {
  return <ErrorBoundary FallbackComponent={() => <>Something went wrong!</>}>{children}</ErrorBoundary>;
};
