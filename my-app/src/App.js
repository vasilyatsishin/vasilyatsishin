import React from "react";
import Resume from "./components/Resume";
import styles from "./App.module.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import MainNavbar from "./components/navbar/MainNavbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.wrapper}>
        <MainNavbar />
        <div className={styles.App}>
          <Resume />
        </div>
      </div>
    </Provider>
  );
};

export default App;
