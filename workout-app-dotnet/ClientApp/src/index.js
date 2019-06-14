import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import history from "./history";
import { PersistGate } from "redux-persist/integration/react";
import PageLoaderV2 from "./components/pageLoader/PageLoaderV2";
import { store, persistor } from "./components/redux/store";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={PageLoaderV2} persistor={persistor}>
      <Router basename={baseUrl} history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  rootElement
);
