"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
