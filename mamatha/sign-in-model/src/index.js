import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ModalLogin from "./login";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <ModalLogin />
  </div>
);

render(<App />, document.getElementById("root"));
