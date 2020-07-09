import React from "react";
import "./App.css";

//Bring in components
import Navbar from "./components/layout/Navbar";

//Bring in pages
import HomePage from "./components/pages/HomePage";
import PdfPage from "./components/pages/PdfPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
