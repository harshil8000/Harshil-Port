"use client"
import { useState, useEffect } from 'react';
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs data inside useEffect
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getData();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []); // Empty dependency array to run only once when the component mounts

  // Disable right-click, Ctrl+C, and F12 events
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };

    const disableCtrlC = (e) => {
      if ((e.ctrlKey && e.key === 'c') || (e.metaKey && e.key === 'c')) {
        e.preventDefault();
      }
    };

    const disableF12 = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    // Add event listeners
    window.addEventListener('contextmenu', disableRightClick); // Right-click
    window.addEventListener('keydown', disableCtrlC); // Ctrl+C (or Cmd+C on Mac)
    window.addEventListener('keydown', disableF12); // F12

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('contextmenu', disableRightClick);
      window.removeEventListener('keydown', disableCtrlC);
      window.removeEventListener('keydown', disableF12);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </>
  );
}
