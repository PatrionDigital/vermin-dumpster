import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SDKProvider } from "@telegram-apps/sdk-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SDKProvider acceptCustomStyles>
      <App />
    </SDKProvider>
  </StrictMode>
);
