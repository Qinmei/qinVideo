import React, { Component } from "react";
import { intl } from "@/locales";

interface StateType {
  hasError: boolean;
}

export class ErrorBoundary extends Component<unknown, StateType> {
  state = { hasError: false };

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div style={{ textAlign: "center", marginTop: "200px", fontSize: "20px" }}>
        {intl.get("common.error.errorboundry")}
      </div>
    ) : (
      children
    );
  }
}
