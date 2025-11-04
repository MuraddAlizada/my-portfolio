import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main>
        <Head>
          <title>Murad Alizada/Frontend Engineer</title>
          <meta
            name="description"
            content="This project is my personal portfolio website. You can find my projects, skills and more information about me here. Feel free to contact me!"
          ></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Head>
        <Header />
        <Hero id="hero" />
        <Projects id="projects" />
        <Skills id="skills" />
        <ResumeSection id="education" />
        <Contact id="contact" />
      </main>
    </>
  );
}
