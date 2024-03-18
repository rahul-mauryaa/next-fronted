"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AppContextData = {
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextData | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  //localhost:3101/
  http: if (!context) {
    throw new Error("useAppContext must be used within an AppContectProvider");
  }
  return context;
};

export function AppContectProvider({ children }: React.PropsWithChildren<{}>) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileWindow = window.innerWidth <= 1139;
      setIsMobile(isMobileWindow);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo(
    () => ({
      isMobile,
      setIsMobile,
    }),
    [isMobile, setIsMobile]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
