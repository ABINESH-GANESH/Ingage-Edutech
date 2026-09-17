import React from "react";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Technology from "../components/Technology/Technology";
import Solutions from "../components/Solutions/Solutions";
import Industries from "../components/Industries/Industries";
import Training from "../components/Training/Training";
import InsideIngage from "../components/InsideIngage/InsideIngage";
import Projects from "../components/Projects/Projects";
import EduTech from "../components/EduTech/EduTech";
import Numbers from "../components/Numbers/Numbers";
import HumanSection from "../components/HumanSection/HumanSection";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Technology />
      <Solutions />
      <Industries />
      <Training />
      <InsideIngage />
      <Projects />
      <EduTech />
      <Numbers />
      <HumanSection />
      <Contact />
    </main>
  );
}
