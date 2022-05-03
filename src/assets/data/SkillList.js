import React from "react";

import nodeLogo from "../pictures/nodelogo.png";
import knexLogo from "../pictures/knexlogo.png";
import expressLogo from "../pictures/expresslogo.png";
import sequelizeLogo from "../pictures/sequelizelogo.png";
import { FaReact, FaGithub, FaAws } from "react-icons/fa";
//import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiJavascript, SiMongodb, SiPrisma, SiGraphql, SiGooglecloud, SiJest } from "react-icons/si/index";



export const SkillList = [
  {
    name: "JavaScript",
    logo: <SiJavascript className="w-16 h-16" style={{ color: "#ddb440" }} />,
  },
  {
    name: "TypeScript",
    logo: <SiTypescript className="w-16 h-16" style={{ color: "#2d79c7" }} />,
  },
  {
    name: "NodeJS",
    logo: <img className="w-14 h-16" src={nodeLogo} alt="Node JS" />,
  },
  {
    name: "Express",
    logo: <img className="w-14 h-16" src={expressLogo} alt="Express JS" />,
  },
  {
    name: "Sequelize",
    logo: <img className="w-14 h-16" src={sequelizeLogo} alt="Sequelize" />
  },
  {
    name: "Prisma",
    logo: <SiPrisma className="w-16 h-16" style={{ color: "#0c344b" }} />,
  },
  {
    name: "Knex",
    logo: <img className="w-14 h-16" src={knexLogo} alt="Knex" />
  },
  {
    name: "Mongodb",
    logo: <SiMongodb className="w-16 h-16" style={{ color: "#4db33d" }} />,
  },
  {
    name: "Graphql",
    logo: <SiGraphql className="w-16 h-16" style={{ color: "#e632ad" }} />,
  },
  {
    name: "React",
    logo: <FaReact className="w-16 h-16" style={{ color: "#00b7ff" }} />,
  },
  {
    name: "Jest",
    logo: <SiJest className="w-16 h-16" style={{ color: "#9c445c" }} />,
  },

  {
    name: "GitHub",
    logo: <FaGithub className="w-16 h-16" style={{ color: "#ffffff" }} />,
  },

  {
    name: "GCP",
    logo: <SiGooglecloud className="w-16 h-16" style={{ color: "#258ec8" }} />,
  },
  {
    name: "AWS",
    logo: <FaAws className="w-16 h-16" style={{ color: "#dc4d25" }} />
  },
];
