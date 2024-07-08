import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";
import Teaser from "./components/Teaser";

storyblokInit({
  accessToken: "3brAcEv7vX2YdusLsBQyOAtt",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
