import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const ContextProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <BrowserRouter basename="/" future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Suspense fallback="Loading...">{children}</Suspense>
    </BrowserRouter>
  );
};
