import About from "@/components/About";
import Nav from "@/components/Nav";
import SideBarL from "@/components/SideBarL";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center">
        <Nav />
        <SideBarL />
      </div>
    </main>
  );
}
