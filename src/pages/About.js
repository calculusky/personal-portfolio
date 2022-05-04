import React, { useState, useEffect } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
import { Text } from "../components/Multilanguage/Text";
import { SkillList } from "../assets/data/SkillList";

//SVGs + PNGs
import { CodeSVG } from "../assets/svg/components/CodeSVG.js";
import { ProfilePicture } from "../assets/pictures/ProfilePicture";
import soccer from '../assets/pictures/soccer-ball.png';
import globe from '../assets/pictures/globe.png'

export default function About() {
  const { theme } = React.useContext(ThemeContext);
  const [visibleText, setvisibleText] = useState("coding");
  const [hidden, setHidden] = useState(true);
  const { opacity } = useSpring({
    config: { duration: 1000 },
    opacity: hidden ? 0 : 1,
  });

  useEffect(() => {
    setHidden(false);
  }, [setHidden]);

  const trailItems = [
    <div>
      {/* ----- ITEM 1 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">
          <Text tid="whoIamHeading" />
        </p>
      </div>
      <div className="p-2 mt-6 flex flex-col md:flex-row items-center mb-12">
        <div className="justify-self-start self-center h-40 w-full flex items-center justify-center">
          <ProfilePicture />
        </div>
        <p className="font-semibold tracking-tight leading-7 text-justify md:p-4 md:ml-10 inline-flex">
          <Text tid="whoIamText1" />
          <br />
          <Text tid="whoIamText2" />
          <br />
        </p>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 2 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">
          <Text tid="passions" />
        </p>
      </div>
      <div className="p-2 mt-6 mb-12 w-full flex flex-row border-2 border-gray-800 rounded-lg shadow-xl">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row flex-wrap w-full justify-around items-center font-bold tracking-wide text-2xl uppercase">
            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("coding")}
            >
              <CodeSVG />
              <Text tid="codingHeading" />
            </div>

            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold normal-case text-sm text-justify">
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </p>
            </div>


            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("football")}
            >
              <img src={soccer} width="100px" height="100px" alt="soccer" />
              <Text tid="footballHeading" />
            </div>

            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold normal-case text-sm text-justify">
                <Text tid="footballText1" />
                <br /> <br />
                <Text tid="footballText2" />
                <br /> <br />
                <Text tid="footballText3" />
                <br /><br />
                <Text tid="footballText4" />
                <br /><br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="footballText5" />
                  &quot;
                </p>
              </p>
            </div>

            <div
              className="h-40 w-40 m-4 flex flex-col justify-center items-center cursor-pointer"
              onMouseEnter={() => setvisibleText("traveling")}
            >
              <img src={globe} width="100px" height="100px" />
              <Text tid="travelingHeading" />
            </div>

            <div className="md:hidden mb-8">
              {/* MOBILE VERSION, HIDDEN >md BREAKPOINT*/}
              <p className="px-2 font-semibold normal-case text-sm text-justify">
                <Text tid="travelingText1" />
                <br /> <br />
                <Text tid="travelingText2" />
                <br /> <br />
              </p>
            </div>

          </div>
          <div className="hidden md:flex flex-row w-full px-12 py-4 font-semibold tracking-tight leading-7 text-justify">
            {visibleText === "coding" ? (
              <>
                <Text tid="codingText1" />
                <br />
                <Text tid="codingText2" />
              </>
            ) : null}

            {visibleText === "traveling" ? (
              <p className="px-2 font-semibold normal-case text-sm text-justify">
                <Text tid="travelingText1" />
                <br />
                <Text tid="travelingText2" />
                <br />
              </p>
            ) : null}

            {visibleText === "football" ? (
              <p className="px-2 font-semibold normal-case text-sm text-justify">
                <Text tid="footballText1" />
                <br />
                <Text tid="footballText2" />
                <br />
                <Text tid="footballText3" />
                <br />
                <Text tid="footballText4" />
                <br /> <br />
                <p className="italic text-center">
                  &quot;
                  <Text tid="footballText5" />
                  &quot;
                </p>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>,
    <div>
      {/* ----- ITEM 3 -----*/}
      <div className="flex flex-row justify-start items-center">
        <div className="w-10 h-1 inline-flex bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg" />
        <p className="text-2xl font-bold uppercase ml-4 inline-flex">Skills and Tools</p>
      </div>
      <div className="text-white font-bold uppercase mt-6 w-full border-2 border-gray-800 rounded-lg flex flex-row flex-wrap justify-around items-center mb-12 shadow-xl">
        {SkillList.map((skill) => (
          <div className="m-4 h-32 w-32 border-2 border-gray-800 bg-gray-900 rounded-full flex flex-col justify-center items-center">
            {skill.logo}
            <p className="tracking-wider text-sm uppercase">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>,
  ];

  const trail = useTrail(trailItems.length, { opacity: hidden ? 0 : 1 });

  return (
    <div
      className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }
    w-screen min-h-screen`}
    >
      <div className="w-full h-auto flex justify-center">
        <div className="p-4 lg:p-12 w-full flex flex-col">
          {!hidden ? (
            <animated.div style={{ opacity }}>
              <ul>
                {trail.map(({ opacity }, i) => {
                  return (
                    <animated.li style={{ opacity }} key={Math.random() * 1000}>
                      {trailItems[i]}
                    </animated.li>
                  );
                })}
              </ul>
            </animated.div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
