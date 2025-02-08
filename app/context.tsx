"use client";
import { IIcon } from '@/lib/myInterface';
import { useTheme } from 'next-themes';
import  { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AppContextType {
  isExpandedNav: boolean;
  setIsExpandedNav: (value: boolean) => void;
  isActive: string;
  setIsActive: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  handleNavMenuOnClick: () => void;
  handleMinimizingNav: () => void;
  handleNavLinkOnClick: (navLink: IIcon) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider = ({ children } : { children: ReactNode}) => {
  const [isExpandedNav, setIsExpandedNav] = useState(false);
  const [isActive, setIsActive] = useState("About");
  const { theme = 'light', setTheme } = useTheme();


  const handleNavMenuOnClick = () => {
    setIsExpandedNav(!isExpandedNav);
  }

  const handleMinimizingNav = () => {
    if (window.innerWidth < 1200){
      setIsExpandedNav(false);
    }
  }

  const handleNavLinkOnClick = ( navLink: IIcon ) => {
    setIsActive(navLink.name);

    let sectionId = navLink.url.slice(1); //get rid of "#"
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener("resize", handleMinimizingNav);

    return () => {
      window.removeEventListener("resize", handleMinimizingNav)
    };
  }, [])

  return (
    <AppContext.Provider
      value={{ 
        isExpandedNav,
        isActive,
        theme,
        setIsExpandedNav,
        setIsActive,
        setTheme,
        handleNavMenuOnClick,   
        handleMinimizingNav,   
        handleNavLinkOnClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, useAppContext };