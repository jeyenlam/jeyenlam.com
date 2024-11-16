import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      {/* <div className="lg:fixed">
        <Nav />
      </div> */}
      <Nav/>
      {/* <div className="flex flex-col justify-center gap-20 lg:gap-0 p-10 md:p-20 lg:ml-[30rem] md:mr-[7rem]">
        <About />
        <Projects />
      </div> */}
    </main>
  );
}
