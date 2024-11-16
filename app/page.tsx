import About from "@/pages/About";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="h-full w-full flex overflow-x-hidden">
      <Nav/>
      <div className="">
        <About/>
      </div>
      
    </main>
  );
}
