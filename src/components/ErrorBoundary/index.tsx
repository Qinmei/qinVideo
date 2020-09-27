import React, { Component } from "react";
import intl from "react-intl-universal";

interface StateType {
  hasError: boolean;
}

interface PropsType {}

export class ErrorBoundary extends Component<PropsType, StateType> {
  state = { hasError: false };

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <div style={{ textAlign: "center", marginTop: "200px", fontSize: "20px" }}>
        {intl.get("ERROR_PAGE_TIPS")}
      </div>
    ) : (
      children
    );
  }
}
