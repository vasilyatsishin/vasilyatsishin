import React from "react";
import Resume from "./components/Resume";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.App}>
        <Resume />
      </div>
    </Provider>
  );
};

export default App;
