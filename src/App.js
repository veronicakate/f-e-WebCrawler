import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Web Crawler hello</h1>
      <form>
        <input type='text' placeholder='URL' name='urlSearchbar' />
        <input type='submit' name='submitButton' />
      </form>
    </div>
  );
}

export default App;
