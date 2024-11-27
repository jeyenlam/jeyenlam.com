import { useEffect } from "react";


const ScrollToSection = ( sectionId: string) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (section){
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }

  }, [sectionId])
}

export default ScrollToSection;