import React, { Suspense } from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactGA from "react-ga4";

import "./i18n";

ReactGA.initialize([
  {
    trackingId: "G-TPC3TH7XHN",
    gaOptions: {},
    gtagOptions: {},
  },
]);


const container = document.getElementById("root");
// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Suspense fallback={<>loading...</>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
