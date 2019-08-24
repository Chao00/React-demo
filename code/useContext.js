import React from "react";
import ReactDOM from "react-dom";
import { NumberContext, ThemeContext } from "./context";

function Display() {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  return (
    <ThemeContext.Consumer>
      {theme => (
        <section className={theme}>
          <NumberContext.Consumer>
            {value => <div>The answer is {value}.</div>}
          </NumberContext.Consumer>
        </section>
      )}
    </ThemeContext.Consumer>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
