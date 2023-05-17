"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <main>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Portfolio</span>
        </div>
        {/* <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow"></div>
          <div className="text-sm lg:flex-grow lg:flex min-[320]:flex-col">
            {["Home", "Experiences", "Education", "Projects", "Contact"].map(item => {
              const link = `#${item.toLowerCase()}`
              return (
                <a
                  key={item}
                  href={link}
                  className=" mt-4  lg:mt-0 text-gray-200 hover:text-white mr-4 flex justify-end"
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
      <div className="flex flex-col items-center mx-24">
        <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold">Hello</div>
          <div className="flex mt-8">
            <div className="w-[50%] lg:max-w-[50%] flex items-center justify-center">Profile</div>
            <div className="text-2xl lg:max-w-[50%]">
              Hello! I'm Jirayu Saengwannakool, also known as Bank. Specializing in backend
              development, I leverage Node.js and MongoDB to create robust, efficient solutions.
              Recently, I've been practicing my skills, interesting in skills in Full Stack
              development to extend my expertise into frontend development with React and Tailwind
              CSS. Join me on my journey as I continue to push the boundaries of my technical
              knowledge and skillset.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold mb-8">Experiences</div>
          <div className>
            <div className="text-2xl">
              I was a Backend Software Engineer @ZANROO Company (Thailand)
            </div>
            <div className="text-2xl">
              I was a System and Network Engineer @Metro System Corporation Limited LTD (Thailand)
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold mb-8">Education</div>
          <div className="text-2xl">
            I am pursuing a graduate master program in Computer Science at Oregon State University
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold mb-8">Projects</div>
          <div className="text-2xl">I'm a software engineer</div>
        </div>
        <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold mb-8">Contact</div>
          <div className="text-2xl">Blog: xxx</div>
          <div className="text-2xl">Github: xxx</div>
        </div>
      </div>
    </main>
  )
}
