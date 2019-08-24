import React, { useContext } from "react";

import { NumberContext, ThemeContext } from "./context";

// Context can be a theme, values, or locale etc.

function Display() {
  const theme = useContext(ThemeContext);
  const value = useContext(NumberContext);
  <section className={theme}>
    return <div>The answer is {value}.</div>;
  </section>;
}
