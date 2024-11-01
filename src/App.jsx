import { useState } from "react";
import Navbar from "./footerAndNav/Navbar";
import Footer from "./footerAndNav/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return <div>

    <div>
      <Navbar/>
      <Outlet/> 
      <Footer/>

    </div>
    




  
  
  </div>;
}

export default App;
