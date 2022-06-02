import React, { useState } from "react";

function Test() {
  const [state, setState] = useState("");
  return (
    <div>
      <h1 className="test">Function Components</h1>
    </div>
  );
}

export default Test;
