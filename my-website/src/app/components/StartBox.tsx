import React from "react";

const StartBox = () => {
  return (
    <div className="grid items-center justify-center grid-rows-2 grid-flow-col gap-4 translate-y-24 duration-300 delay-100 text-black dark:text-white">
      <a href="/Home" className="hover:pr-4 hover:pb-2 duration-300">
        <div className="transition ease-in-out delay-75 duration-300 border-black border-solid  bg-yellow-500 w-40 h-40 relative rounded p-10 text-center inline-block  hover:shadow-2xl hover:scale-125">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome
          </p>
        </div>
      </a>
      <a href="/Projects" className="hover:pr-4 hover:pt-2 duration-300">
        <div className="transition ease-in-out delay-75 duration-300 border-black border-solid  bg-blue-400 w-40 h-40 relative rounded p-10 text-center inline-block  hover:shadow-2xl hover:scale-125">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            projects
          </p>
        </div>
      </a>
      <a href="/About_Me" className="hover:pl-4 hover:pb-2 duration-300">
        <div className="transition ease-in-out delay-75 duration-300 border-black border-solid  bg-red-500 w-40 h-40 relative rounded p-10 text-center inline-block  hover:shadow-2xl hover:scale-125">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            About me
          </p>
        </div>
      </a>
      <a href="/Contact" className="hover:pl-4 hover:pt-2 duration-300">
        <div className="transition ease-in-out delay-75 duration-300 border-black border-solid  bg-green-500 w-40 h-40 relative rounded p-10 text-center inline-block  hover:shadow-2xl hover:scale-125">
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            contact
          </p>
        </div>
      </a>
    </div>
  );
};

export default StartBox;
