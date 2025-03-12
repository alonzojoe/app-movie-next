"use client";
import { useEffect, useState } from "react";

const useTheme = (defaultTheme: string): [string, () => void] => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return [theme, toggleTheme];
};

export default useTheme;
