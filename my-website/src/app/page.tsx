import type { Metadata } from "next";
import StartBox from "./components/StartBox";
import React, { useState } from "react";
import Displaybox from "./components/Displaybox";
import Image from "next/image";
import fileToText from "./components/fileToText";
import ContactMe from "./components/email";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my Website",
};

export default function Home() {
  return (
    <main>
      <div className="transition delay-200 flex min-h-screen flex-col items-center justify-between p-24">
        <div className="h-screen bg-transparent ">
          {/** Navbar */}
          <div className="flex flex-col">
            <Navbar></Navbar>
          </div>
          {/** About Me */}
          <div className="inline-flex my-16">
            <Displaybox
              file="../textboxData/About_Me_text/AboutMe.txt"
              style="bg-red-500 w-2/6 h-2/6"
              side="left"
            />
          </div>
          <div className="inline-flex flex-row-reverse">
            <Displaybox
              file="../textboxData/About_Me_text/Coding_Journey.txt"
              style="bg-red-500 w-2/6 h-2/6"
              side="right"
            />
          </div>
          <div className="inline-flex ">
            <Displaybox
              file="../textboxData/About_Me_text/Coding_Journey2.txt"
              style="bg-red-500 w-2/6 h-2/6"
              side="left"
            />
          </div>
          {/** About Me texhnology */}
          <div className="bg-red-500 w-9/12 h-1/5 rounded-sm border-black border-2 animate-idle-left my-16">
            <div className=" bg-white rounded-sm border-black border-2 -translate-y-2 translate-x-2 text-black w-full h-full grid-cols-5 grid place-content-center dark:bg-slate-500 gap-x-16 pl-12">
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/python-icon.svg"
                    alt="Python"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/java-icon.svg"
                    alt="Java"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/angular-icon.svg"
                    alt="Angular"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/javascript-icon.svg"
                    alt="JavaScript"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/typescript.svg"
                    alt="TypeScript"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/postgresql.svg"
                    alt="Postgresql"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/next-js.svg"
                    alt="Nextjs"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/react.svg"
                    alt="React"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/nodejs-icon.svg"
                    alt="Nodejs"
                    width={50}
                    height={50}
                    className="bg-white rounded-xl border-white border-2"
                  />
                </a>
              </div>
              <div>
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://www.w3.org/Style/CSS/Overview.en.html#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,CSS%20and%20on%20available%20software."
                  aria-label="Css"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/docker-tile.svg"
                    alt="Docker Icon"
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                </a>
              </div>
            </div>
          </div>

          {/** Projects */}
          <div className="inline-flex my-16">
            <Displaybox
              file="../textboxData/Projects_text/MyProjects.txt"
              style="bg-blue-500 w-2/6 h-2/6 "
              side="left"
            />
          </div>
          <div className="inline-flex flex-row-reverse my-16">
            <div className="bg-blue-500 w-9/12 h-full rounded-sm border-black border-2 animate-idle-right">
              <div className=" flex flex-row">
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href="https://github.com/ayden-boyko/React-Timer"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/React_client_page.jpeg"
                    alt="First React Client"
                    width={200}
                    height={200}
                    className="rounded-sm border border-black"
                  />
                </a>
                <div className="inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4">
                  <div className="flex scale-110 flex-col-reverse m-2">
                    <a
                      className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
                      href="https://react.dev/"
                      aria-label="React homepage"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/react.svg"
                        alt="react Icon"
                        width={250}
                        height={200}
                        className="rounded-full border bg-white"
                      />
                    </a>
                    <a
                      className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
                      href="https://www.w3.org/Style/CSS/Overview.en.html#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,CSS%20and%20on%20available%20software."
                      aria-label="Css"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/css.svg"
                        alt="css Icon"
                        width={100}
                        height={100}
                        className="bg-white rounded-full scale-110"
                      />
                    </a>
                  </div>
                  <div className="bg-slate-200 text-black -translate-y-2 -translate-x-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none">
                    {fileToText("../textboxData/Projects_text/Project1.txt")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-row my-16">
            <div className="bg-blue-500 w-9/12 h-full rounded-sm border-black border-2 animate-idle-left">
              <div className=" flex flex-row translate-x-4">
                <div className="inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4">
                  <div className="bg-slate-200 text-black translate-x-2 -translate-y-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 px-2 py-2 animate-none">
                    {fileToText("../textboxData/Projects_text/Project2.txt")}
                  </div>
                  <div className="flex scale-110 flex-col-reverse m-2">
                    <a
                      className=" w-10/12 h-4/6 my-2 py-4 rounded-full"
                      href="https://tailwindcss.com/"
                      aria-label="Tailwindcss homepage"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/tailwind.svg"
                        alt="tailwindcss Icon"
                        width={200}
                        height={200}
                        className="rounded-full bg-white"
                      />
                    </a>
                    <a
                      className=" w-10/12 h-4/6 my-2 py-4 rounded-full"
                      href="https://nextjs.org/"
                      aria-label="Nextjs homepage"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/next-js.svg"
                        alt="next Icon"
                        width={200}
                        height={200}
                        className="rounded-full bg-white"
                      />
                    </a>
                  </div>
                </div>
                <a
                  className=" w-10/12 h-4/6 ml-4 mt-2"
                  href="https://github.com/ayden-boyko/Website"
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/homepage.jpg"
                    alt="Website github"
                    width={200}
                    height={200}
                    className="rounded-sm border border-black m-2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-row-reverse my-16">
            <div className="bg-blue-500 w-10/12 h-full rounded-sm border-black border-2 animate-idle-right">
              <div className=" flex flex-row">
                <a
                  className=" w-10/12 h-4/6 m-2"
                  href=""
                  aria-label="Website Repo"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/React_client_page.jpeg"
                    alt="First Reaestful api"
                    width={200}
                    height={200}
                    className="rounded-sm border border-black"
                  />
                </a>
                <div className="inline-flex bg-blue-200 rounded-sm border-black border-2 -translate-y-2 -translate-x-2 gap-4">
                  <div className="flex scale-110 flex-col-reverse m-2">
                    <a
                      className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
                      href=""
                      aria-label="Postgresql"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/postgresql2.svg"
                        alt="Postgres Icon"
                        width={300}
                        height={200}
                        className="bg-white rounded-full"
                      />
                    </a>
                    <a
                      className=" w-10/12 h-4/6 m-2 py-4 rounded-full"
                      href=""
                      aria-label="Flask"
                      target="_blank"
                      rel="noopener"
                    >
                      <Image
                        src="/flask.svg"
                        alt="Flask Icon"
                        width={300}
                        height={200}
                        className="bg-white p-2 rounded-full"
                      />
                    </a>
                  </div>
                  <div className="bg-slate-200 text-black -translate-y-2 -translate-x-2 rounded-sm border-black border-2 dark:text-white dark:bg-slate-500 p-2 animate-none">
                    {fileToText("../textboxData/Projects_text/Project3.txt")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-16">
            <Displaybox
              file="../textboxData/Contact_text/Contact_Me.txt"
              style="bg-green-500 w-2/6 h-2/6"
              side="left"
            />
          </div>
          {/** Contact */}
          <div className="flex flex-row-reverse my-16 pb-6">
            <ContactMe />
          </div>
        </div>
      </div>
    </main>
  );
}
