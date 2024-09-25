import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
        <Card
        imageUrl="https://moisesbm.wordpress.com/wp-content/uploads/2018/09/npmjs-private-package.png?w=1200&h=498&crop=1"
        title="cs-currency-converter"
        description="An npm package to convert currency"
        link="https://www.npmjs.com/package/anoop-currency-converter"
       />
      <Card
        imageUrl="https://www.joydeepdeb.com/images/838x440/qr-code.jpg"
        title="QR Code Generator"
        description="Simple QR code genrator using any URL and save it in different pixel."
        link="https://anoopsingh.xyz/QR-Generator/"
      />
      <Card
        imageUrl="https://addons.mozilla.org/user-media/previews/full/176/176199.png?modified=1622132441"
        title="Weather Chrome Extension"
        description="The best way to see the Weather Forecast right in your browser of all over the world. Easier than looking outside!"
        link="https://chromewebstore.google.com/detail/Weather%20Extension/jlkgifafonakjehnpikhepcgnjjbdbpn?hl=en-GB&authuser=2"
      />
      {/* <Card
        imageUrl="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
        title="Noteworthy technology acquisitions 2021"
        description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        link="https://example.com/article1"
      /> */}
        </div>
        <a
          href="https://github.com/anoop-singh-dev?tab=repositories" target="_blank" rel="noopener noreferrer"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
