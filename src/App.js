import React from "react";
import Header from "./components/Header";
import Grid from "./components/Grid";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Grid />
      </main>
    </div>
  );
}

export default App;
