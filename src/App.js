import React from "react";
import Navbar from "./Navbar";
import PhotoList from "./PhotoList";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <div className="container">
        <PhotoList />
      </div>
    </div>
  );
}

export default App;
