import React from "react";
import style from "./style.module.css";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import Container from "../Container";

const mockData = [
  {
    id: 6,
    imageHover: "/images/mockups/baku-video.png",
    image: "/images/mockups/baku-video.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://bakucreators.com/",
  },
  {
    id: 8,
    imageHover: "/images/mockups/Agriman.png",
    image: "/images/mockups/Agriman.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    // url: "https://agrimanconsulting.com/",
    url: "https://demo.agrimanconsulting.com/",
  },
  {
    id: 9,
    imageHover: "/images/mockups/lacheen.png",
    image: "/images/mockups/lacheen.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://lacheen-co.vercel.app/",
  },
  {
    id: 9,
    imageHover: "/images/mockups/be.png",
    image: "/images/mockups/be.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://baku-electronics-sandy.vercel.app/",
  },
  {
    id: 9,
    imageHover: "/images/mockups/maison.png",
    image: "/images/mockups/maison.png",
    alt: "Project 3",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://maison-lumiere.vercel.app/",
  },
  {
    id: 1,
    imageHover: "/images/mockups/agency.png",
    image: "/images/mockups/agency.png",
    alt: "Project 1",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://markup-green.vercel.app/",
  },



  {
    id: 7,
    imageHover: "/images/mockups/qlcmockup.png",
    image: "/images/mockups/qlcmockup.png",
    alt: "Project 3",
    title: "Html & Css",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://qlc.az/",
  },


  // {
  //   id: 2,
  //   imageHover: "/images/mockups/Poodlepom1.png",
  //   image: "/images/mockups/Poodlepom1.png",
  //   alt: "Project 1",
  //   title: "Html & Css",
  //   description: "A personal finance app to manage your money smartly.",
  //   buttonText: "Website Link",
  //   url: "https://poodlepom.com/",
  // },
  


];

function Projects({ id }) {
  return (
    <div id={id} className={`${style.container}  mb-60`}>
      <div className="mt-60">
        <Title title={"My Projects"} />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 ">
          {mockData.map((card) => (
            <ProjectCard key={card.id} cardData={card} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
