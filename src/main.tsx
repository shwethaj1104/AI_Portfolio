import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VideoDemo } from "./components/VideoDemo";
import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {new URLSearchParams(window.location.search).has("demo") ? (
      <VideoDemo />
    ) : (
      <App />
    )}
  </React.StrictMode>,
);
