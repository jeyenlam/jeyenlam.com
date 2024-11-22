import About from "@/pages/About";
import Nav from "@/components/Nav";
import Intro from "@/pages/Intro";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";

export default function Home() {
  return (
    <main className="h-screen w-full flex overflow-hidden">
      <div className="sticky top-0 h-screen z-10">
        <Nav />
      </div>
      <div className="flex-1 h-screen overflow-y-scroll">
        <Intro />
        <About/>
        <Projects/>
        <hr/>
        <Experience/>
      </div>
    </main>
  );
}
