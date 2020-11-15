import React, { FC, Suspense } from "react";
import { SuspenseLoading, ErrorBoundary } from "@/components";

export const ErrorLayout: FC = props => {
  const { children } = props;
  return (
    <ErrorBoundary>
      <Suspense fallback={<SuspenseLoading />}>{children}</Suspense>
    </ErrorBoundary>
  );
};
