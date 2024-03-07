import About from "@/components/About";
import ContactBar from "@/components/ContactBar";
import Nav from "@/components/Nav";
import InfoBar from "@/components/InfoBar";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <div className="lg:fixed">
        <Nav />
        <InfoBar />
        <ContactBar />
      </div>
      <div className="flex flex-col justify-center p-10 md:p-20 lg:ml-[30rem] md:mr-[7rem]">
        <About />
      </div>
    </main>
  );
}
