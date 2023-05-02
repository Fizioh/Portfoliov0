import React from "react";
import { useRouter } from 'next/router';
import Home from "./home";
import About from "./about";
import Projects from "./projects";

export default function App() {
  const router = useRouter();

  if (router.pathname === '/') {
    return <Home />;
  }

  if (router.pathname === '/about') {
    return <About />;
  }

  if (router.pathname === '/projects') {
    return <Projects />;
  }

  // Render a 404 page for all other routes
  return <h1>404 - Page Not Found</h1>;
}
