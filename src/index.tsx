import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducerMovies from "./store/reducers/reducerMovies";
import reducerFilter from "./store/reducers/reducerFilter";
import reducerGenre from "./store/reducers/reducerGenre";

const rootReducer = combineReducers({
  mov: reducerMovies,
  fil: reducerFilter,
  gen: reducerGenre,
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
