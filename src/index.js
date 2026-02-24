import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Routes from "./Routes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <Routes />
  </>
);
