import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Theme
        appearance={"dark"}
        accentColor="iris"
        grayColor="slate"
        radius="full"
        scaling="95%"
      >
        <App />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
