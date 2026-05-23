"use client";
import { Navbar } from "@/src/components/Navbar";
import { useThemeContext } from "./ThemeProvider";

export function NavbarWrapper() {
  const { isHeroBright } = useThemeContext();
  return <Navbar isHeroBright={isHeroBright} />;
}
