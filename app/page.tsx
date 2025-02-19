"use client"
import About from "@/pages/About";
import Nav from "@/components/Nav";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import { useEffect, useState } from "react";
import Contact from "@/pages/Contact";

const updatePortfolioViewsURL = process.env.NEXT_PUBLIC_UPDATE_PORTFOLIO_VIEWS;

export default function Home() {
  const [viewCount, setViewCount] = useState<string | null>(null);

    const fetchViewCount = async () => {
      try {
        const response = await fetch(`${updatePortfolioViewsURL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          const parsedData = JSON.parse(data);
          console.log(parsedData.views);
          setViewCount(parsedData.views)
        } else {
          console.log("Failed to update view count.");
        }
      } catch (error) {
        console.error(`[Intro]`, error);
      } finally {}
    };
  
    useEffect(() => {
      fetchViewCount();
    },[])

  return (
    <main className="h-screen w-screen flex flex-col sm:flex-row">
      <div className="sm:sticky sm:top-0 sm:h-screen z-10 overflow-hidden">
        <Nav />
      </div>
      <div className="sm:flex-1 h-screen overflow-y-scroll overflow-hidden lg:px-60">
        <About/>
        <Projects/>
        <Experience/>
        <Contact viewCount={viewCount ?? ''}/>
      </div>
    </main>
  );
}
