import React from "react";
import ReactDOM from "react-dom";

// 🤔 순서 보장을 해줘야 할것 같긴하지만... 지금은 된다
import "@fubao/components/styles.css";
import "@fubao/design-token/styles.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
