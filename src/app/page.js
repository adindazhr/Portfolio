import Image from "next/image";
import Greeting from "./components/Greeting";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <div className="flex-grow h-screen flex items-center justify-center">
        <Greeting />
      </div>
      <section id="about" className="flex-grow h-screen flex items-center justify-center">
        <AboutMe />
      </section>
      <section id="skills" className="flex-grow h-screen flex items-center justify-center">
        <Skills />
      </section>
      <section id="works" className="flex-grow h-screen flex items-center justify-center">
        <Works />
      </section>
      <Footer /> {/* Footer now takes its natural height */}
    </div>
  )
}
