import React from "react";
// import { Link } from "react-router-dom";
import { ThemeContext } from "../components/DarkMode/ThemeProvider";
// import { Text } from "../components/Multilanguage/Text";

export default function Footer() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div
      className={`${theme === "dark" ? "text-white bg-black" : "text-black bg-white"
        } py-2 border-t border-gray-900`}
    >
      <div className="text-xs w-full h-full relative flex flex-row justify-center">
        {/* <div className="flex flex-row justify-center items-center">
          <Link to="/imprintprivacypolicy">
            <Text tid="imprintPrivacyPolicy" />
          </Link>
        </div> */}
        <div className="flex flex-row justify-center items-center">
          © 2022 Nwankwo Chinedum
        </div>
      </div>
    </div>
  );
}
