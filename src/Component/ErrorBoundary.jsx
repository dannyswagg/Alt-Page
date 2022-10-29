import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Error from "./Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <>
          <Error />
          <NavLink className="back" to="/">
            {" "}
            Go Back Home
          </NavLink>
        </>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
