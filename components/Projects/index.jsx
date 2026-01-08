import React from "react";
import style from "./style.module.css";
import Title from "../Title";
import ProjectCard from "../ProjectCard";
import Container from "../Container";

const mockData = [
   {
    id: 1,
    imageHover: "/images/mockups/bravo.png", 
    image: "/images/mockups/bravo.png",
    alt: "Bravo Travel Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://www.bravotravel.az/",
    // url: "https://demo.agrimanconsulting.com/",
  },
   {
    id: 2,
    imageHover: "/images/mockups/inrolin.png",
    image: "/images/mockups/inrolin.png",
    alt: "Inrolin",
    title: "Typescript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://inrolin.com/",
  },
   {
    id: 3,
    imageHover: "/images/mockups/feridinevi.png", 
    image: "/images/mockups/feridinevi.png",
    alt: "Feridinevi Project",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://feridinevi.az/",
    // url: "https://demo.agrimanconsulting.com/",
  },
  //  {
  //   id: 4,
  //   imageHover: "/images/mockups/amazon.png", 
  //   image: "/images/mockups/amazon.png",
  //   alt: "Amazon Travel Project",
  //   title: "Javascript",
  //   description: "A personal finance app to manage your money smartly.",
  //   buttonText: "Website Link",
  //   url: "https://amazontravel.az/",

  // },
   {
    id: 5,
    imageHover: "/images/mockups/agriman.png", 
    image: "/images/mockups/agriman.png",
    alt: "Agriman Consulting Project",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://agrimanconsulting.com/",
    // url: "https://demo.agrimanconsulting.com/",
  },
   {
    id: 6,
    imageHover: "/images/mockups/bluecity.png", 
    image: "/images/mockups/bluecity.png",
    alt: "Blue City Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://bluecity.az/",
    // url: "https://demo.agrimanconsulting.com/",
  },
    {
    id: 7,
    imageHover: "/images/mockups/baku-video.png",
    image: "/images/mockups/baku-video.png",
    alt: "Baku Creators Project",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://bakucreators.com/",
  },
   {
    id: 8,
    imageHover: "/images/mockups/src.png", 
    image: "/images/mockups/src.png",
    alt: "SR Construction Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://srconstruction.az/",
    // url: "https://demo.agrimanconsulting.com/",
  },
   {
    id: 9,
    imageHover: "/images/mockups/lacheen.png",
    image: "/images/mockups/lacheen.png",
    alt: "Lacheen Co Project",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://lacheen-co.vercel.app/",
  },
  //  {
  //   id: 10,
  //   imageHover: "/images/mockups/nas.png", 
  //   image: "/images/mockups/nas.png",
  //   alt: "NAS Project",
  //   title: "Javascript",
  //   description: "A personal finance app to manage your money smartly.",
  //   buttonText: "Website Link",
  //   url: "https://nasproject.az",
  // },

   {
    id: 11,
    imageHover: "/images/mockups/qlc.png",
    image: "/images/mockups/qlc.png",
    alt: "QLC Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://qlc.az/",
  },

  //    {
  //   id: 12,
  //   imageHover: "/images/mockups/trackaz.png",
  //   image: "/images/mockups/trackaz.png",
  //   alt: "Track Azerbaijan Project",
  //   title: "Javascript",
  //   description: "A personal finance app to manage your money smartly.",
  //   buttonText: "Website Link",
  //   url: "https://trackazerbaijan.az/",
  // },

     {
    id: 13,
    imageHover: "/images/mockups/azcosm.png",
    image: "/images/mockups/azcosm.png",
    alt: "AZ Cosmetics Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://az-cosmetics.az/",
  },
 

  // {
  //   id: 14,
  //   imageHover: "/images/mockups/be.png",
  //   image: "/images/mockups/be.png",
  //   alt: "Baku Electronics Project",
  //   title: "Next.js",
  //   description: "A personal finance app to manage your money smartly.",
  //   buttonText: "Website Link",
  //   url: "https://baku-electronics-sandy.vercel.app/",
  // },
    {
    id: 14,
    imageHover: "/images/mockups/germanhospital.png", 
    image: "/images/mockups/germanhospital.png",
    alt: "German Hospital Project",
    title: "Javascript",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://germanhospital.az/",
    // url: "https://demo.agrimanconsulting.com/",
  },
  {
    id: 15,
    imageHover: "/images/mockups/maison.png",
    image: "/images/mockups/maison.png",
    alt: "Maison Lumiere Project",
    title: "Next.js",
    description: "A personal finance app to manage your money smartly.",
    buttonText: "Website Link",
    url: "https://maison-lumiere.vercel.app/",
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
