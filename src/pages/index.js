import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import About from "@/sections/About";
import Home from "@/sections/Home";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import React from "react";



function Index() {
  return (
    <div className="app">
      <Navbar/>
      <SocialIcons />
      <Email />
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
      </main>
    </div>
  )
};

export default Index;