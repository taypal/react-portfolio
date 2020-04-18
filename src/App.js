import React from "react";
import Header from "./Component/header";
import Navbar from "./Component/navbar";
import About from "./Component/about";


function App() {
  return (
    <div className="parent">
      <section className="home">
        <Header />
        <Navbar />
      </section>

      <About />

    </div>
  )
}

export default App;
