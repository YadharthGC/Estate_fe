
import React from "react"
import "./App.css";
import { Footer } from "./footer/footer";
import { NavPannel } from "./Navbar/nav";
import { Home } from "./header/home";
import { About } from "./header/about";
import { Apartment } from "./header/apartment";

function App() {
  return (
    <div>
      <NavPannel />
      <Home id="#Home" />
      <About id="#About" />
      <Apartment id="#Apartment" />
      <Footer id="Footer" />
    </div>
  );
}

export default App;
