import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

async function enableMocking() {
  if (process.env.REACT_APP_ENV !== "testing") {
    return;
  }
  const { worker } = await import("./tests/msw/setup");
  //   console.log("enabling mocking");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

// enableMocking().then(() => {
  root.render(<App />);
// });
