import React, { useEffect, useState } from "react";
import DefaultProject from "../../components/Projects/DefaultProject";
import { useGetProject } from "../hooks/getProject";
import { useSpring, useTrail, animated } from "react-spring";

import { ProjectLogoIcon } from "./ProjectLogoIcon";



export const ProjectData = () => {

    const [projects] = useGetProject();

    const [hidden, setHidden] = useState(true);
    const { opacity } = useSpring({
        config: { duration: 1000 },
        opacity: hidden ? 0 : 1,
    });

    const trail = useTrail(projects.length, { opacity: hidden ? 0 : 1 });

    useEffect(() => {
        setHidden(false);
    }, [setHidden]);

    return (
        <animated.div style={{ opacity }}>
            <ul>
                {trail.map(({ opacity }, i) => {
                    const project = projects[i];
                    return (
                        <animated.li style={{ opacity }} key={Math.random() * 1000}>
                            <DefaultProject
                                name={project.name}
                                imageFront={project.image.front}
                                imageBack={project.image?.back}
                                githubLink={project.githubLink}
                                liveVersionLink={project.liveVersionLink}
                                hasLoginCredential={project.hasLoginCredential}
                                projectShortDescription={project.projectShortDescription}
                                aboutProjectText={project.aboutProjectText.map(aboutProj => aboutProj)}
                                features={project.features.map(feature => feature)}
                                techStack={project.techStack.map(stack => ({
                                    name: stack.name,
                                    logo: <ProjectLogoIcon type={stack.logo} />,
                                    subtexts: stack.subtexts,
                                }))}
                            />
                        </animated.li>
                    );
                })}
            </ul>
        </animated.div>
    )
}









