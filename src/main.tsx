import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
function Fallback({ error }: FallbackProps) {
  return <p>something went wrong! {error.message}</p>;
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Fallback}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
