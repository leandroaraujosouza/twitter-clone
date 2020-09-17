import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets.jsx";

function App() {
  return (
    <div className="app">
      {/* {SIDEBAR} */}
      <Sidebar />

      {/* {Feed} */}
      <Feed />

      {/* {Widgets} */}
      <Widgets />
    </div>
  );
}

export default App;
