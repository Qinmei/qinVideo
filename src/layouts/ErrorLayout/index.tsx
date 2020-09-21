import React, { FC, Suspense } from "react";
import { SuspenseLoading, ErrorBoundary } from "@/components";

interface PropsType {}
export const ErrorLayout: FC<PropsType> = (props) => {
  const { children } = props;
  return (
    <ErrorBoundary>
      <Suspense fallback={<SuspenseLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
