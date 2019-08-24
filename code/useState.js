import React, { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [title, setTitle] = useState("");

  return (
    <>
      <p>{title} Component</p>
      <input onChange={e => setTitle(e.target.value)} value={title} />
    </>
  );
}
