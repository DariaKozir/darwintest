import './App.scss';
import React from "react";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import Wraper from "./Wraper";

const App = () => {

  return (
      <Provider store={store}>
          <Wraper/>
      </Provider>
  );
}

export default App;
