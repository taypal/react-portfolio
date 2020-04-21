import React from "react";

import About from "./Component/pages/about";
import Portfolio from "./Component/pages/portfolio";
import Contact from "./Component/pages/contact";
import Resume from "./Component/pages/resume";


function App() {
  return (
    <div className="parent">

      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resume" component={Resume} />

    </div>
  )
}

export default App;
