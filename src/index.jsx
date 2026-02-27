import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Routes from "./Routes.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <>
    <Routes />
  </>
);
