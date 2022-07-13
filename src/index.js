import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const shadowRoot = rootElement.attachShadow({ mode: "open" });
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  p {
    font-family: 'Great Vibes', cursive;
    font-size: 48px;
  }
`;
shadowRoot.appendChild(styleTag);
const linkTag = document.createElement("link");
linkTag.setAttribute("rel", "stylesheet");
linkTag.setAttribute(
  "href",
  "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
);
shadowRoot.appendChild(linkTag);
const root = ReactDOM.createRoot(shadowRoot);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
