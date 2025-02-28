"use client";
import { IIcon } from '@/lib/myInterface';
import { useTheme } from 'next-themes';
import  { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextType {
  isActive: string;
  setIsActive: (value: string) => void;
  theme: string;
  setTheme: (value: string) => void;
  handleNavLinkOnClick: (navLink: IIcon) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const useAppContext = () => {
  const context = useContext(AppContext);
    if (!context) {
      return null;
    }
  return context;
};

const AppContextProvider = ({ children } : { children: ReactNode}) => {
  const [isActive, setIsActive] = useState("About");
  const { theme='light', setTheme } = useTheme();

  const handleNavLinkOnClick = ( navLink: IIcon ) => {
    setIsActive(navLink.name);

    let sectionId = navLink.url.slice(1); //get rid of "#"
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <AppContext.Provider
      value={{ 
        isActive,
        theme,
        setIsActive,
        setTheme,
        handleNavLinkOnClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, useAppContext };