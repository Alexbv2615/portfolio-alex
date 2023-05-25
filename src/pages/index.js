import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Head from "next/head";
import React, { useState } from "react";



function Index() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Alexander Noel | Portfolio</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      {
        showContent && (
          <>
            <Navbar/>
            <SocialIcons />
            <Email />
            <main>
              <Home/>
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
            </main>
          </>
        )
      }
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded}/>
      
    </div>
  )
};

export default Index;