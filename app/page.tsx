import About from "@/pages/About";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col overflow-x-hidden">
      <Nav/>
      <div className="p-20">
        <About/>
      </div>
      
    </main>
  );
}
