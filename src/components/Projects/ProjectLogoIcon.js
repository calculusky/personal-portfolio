import React from "react";

import nodeLogo from "../../assets/pictures/nodelogo.png";
import knexLogo from "../../assets/pictures/knexlogo.png";
import expressLogo from "../../assets/pictures/expresslogo.png";
import sequelizeLogo from "../../assets/pictures/sequelizelogo.png";
import { FaReact, FaGithub, FaAws } from "react-icons/fa";
import tsParticles from "../../assets/pictures/tsParticles.png";
import reactSpring from "../../assets/pictures/reactspring.png";
import firebaseLogo from "../../assets/pictures/firebaseLogo.png";

//import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiJavascript, SiMongodb, SiPrisma, SiGraphql, SiGooglecloud, SiJest, SiSwagger, SiMysql, SiTailwindcss } from "react-icons/si/index";



export const ProjectLogoIcon = (props) => {
    const icon = {
        javascript: <SiJavascript className="w-12 h-12" style={{ color: "#ddb440" }} />,
        typescript: <SiTypescript className="w-12 h-12" style={{ color: "#2d79c7" }} />,
        express: <img className="w-22 h-12" src={expressLogo} alt="ExpressJS" />,
        node: <img className="w-12 h-12" src={nodeLogo} alt="NodeJS" />,
        knex: <img className="w-12 h-12" src={knexLogo} alt="Knex" />,
        mysql: <SiMysql className="w-12 h-12" style={{ color: "#38b2ac" }} />,
        swagger: <SiSwagger className="w-12 h-12" style={{ color: "#85ea2d" }} />,
        jest: <SiJest className="w-12 h-12" style={{ color: "#9c445c" }} />,
        sequelize: <img className="w-12 h-12" src={sequelizeLogo} alt="Knex" />,
        github: <FaGithub className="w-12 h-12" style={{ color: "#ffffff" }} />,
        googleCloud: <SiGooglecloud className="w-12 h-12" style={{ color: "#258ec8" }} />,
        prisma: <SiPrisma className="w-12 h-12" style={{ color: "#0c344b" }} />,
        mongodb: <SiMongodb className="w-12 h-12" style={{ color: "#4db33d" }} />,
        graphql: <SiGraphql className="w-12 h-12" style={{ color: "#e632ad" }} />,
        aws: <FaAws className="w-12 h-12" style={{ color: "#dc4d25" }} />,
        react: <FaReact className="w-12 h-12" style={{ color: "#00b7ff" }} />,
        tailwind: <SiTailwindcss className="w-12 h-12" style={{ color: "#38b2ac" }} />,
        reactSpring: <img className="w-12 h-12" src={reactSpring} alt="React Spring" />,
        tsParticles: <img className="w-12 h-12" src={tsParticles} alt="TS Particles" />,
        firebase: <img className="w-12 h-12" src={firebaseLogo} alt="firebase" />
    }

    return icon[props.type] ? icon[props.type] : icon.github;
}