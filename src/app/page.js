"use client"

import "aos/dist/aos.css"

import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

import AOS from "aos"
import EDUS from "../constants/EDUS"
import EXPS from "../constants/EXPS"
import Headers from "@/components/header"
import Image from "next/image"
import { Link } from "react-scroll"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      // once: true,
    })
  }, [])
  return (
    <main id="home">
      <Headers />
      <div className="flex flex-col items-center mx-16">
        <div className="flex flex-col items-center justify-center my-16">
          <div data-aos="fade-right" className="text-6xl font-bold">
            Hello
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between p-5">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-5" data-aos="flip-up">
              <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto">
                <Image
                  src="/images/profile_1.png"
                  alt="Profile Img"
                  width="320"
                  height="320"
                  className="max-w-full h-auto mx-auto"
                />
                <CardContent className="p-4">
                  <h2 className="text-2xl font-bold">Jirayu S</h2>
                  <h3 className="text-gray-500">Software Developer</h3>
                  <p className="mt-2 text-gray-600">
                    Passionate about creating software and learning new technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="w-full md:w-1/2 md:text-4xl sm:text-l text-gray-700" data-aos="flip-up">
              <p className="font-bold">Hi Guys,</p> <br />
              <p>
                I am a Software Engineer with 5+ years of experience in software development,
                systems and enjoy working in a various environments.
              </p>
              <p>
                Enjoy learning new technologies, how software architecture works and how to make it
                better.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-16">
          <div id="experiences" className="text-5xl font-bold mb-8" data-aos="fade-up">
            Experiences
          </div>
          <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700 divide-y">
              {EXPS.map(({ date, title, company, description }, i) => (
                <li className="mb-10 ml-4 pt-6" data-aos="fade-up" key={i}>
                  {/* <div className="absolute w-3 h-3 bg-gray-200 hover:bg-gray-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                  <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500 mx-2">
                    {date}
                  </time>
                  <div className="flex flex-col mx-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-white italic">
                      at {company}
                    </h4>
                  </div>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-16">
          <div id="skills" className="text-5xl font-bold mb-8" data-aos="fade-up">
            Skills
          </div>
          <div className="divide-y">
            <div className="text-lg flex flex-row my-2" data-aos="fade-up">
              <div className="font-bold mx-2">Tech Skills:</div>
              <div className="mx-4" />
              <div className="text-gray-700">
                Node.js, MongoDB, Docker, ElasticSearch, RabbitMQ, React, Svelte, MVC Pattern,
                TCP/IP, CCNA(Network and Data Center), Network Engineering, Linux
              </div>
            </div>
            <div className="text-lg flex flex-row my-2" data-aos="fade-up">
              <div className="font-bold mx-2">Soft Skills:</div>
              <div className="mx-4" />
              <div className="text-gray-700">
                Agile, Scrum, Kanban, Teamwork, Communication, Problem Solving, Time Management
              </div>
            </div>
            <div className="text-lg flex flex-row my-2" data-aos="fade-up">
              <div className="font-bold mx-2">Hobbies:</div>
              <div className="mx-4" />
              <div className="text-gray-700">
                Working Out, JP Anime, Korean TV Series, American TV Series, Cooking
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-16">
          <div id="education" className="text-5xl font-bold mb-8" data-aos="fade-up">
            Education
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 divide-y">
            {EDUS.map(({ date, department, school, description }, i) => (
              <li className="mb-10 ml-4 pt-6" data-aos="fade-up" key={i}>
                {/* <div className="absolute w-3 h-3 bg-gray-200 hover:bg-gray-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                  {date}
                </time>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {department}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-600 dark:text-white italic">
                    at {school}
                  </h4>
                </div>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 whitespace-pre-line">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* <div className="flex flex-col items-center justify-center my-16">
          <div className="text-6xl font-bold mb-8">Projects</div>
          <div className="text-2xl">I am a software engineer</div>
        </div> */}
        <div className="flex flex-col items-center justify-center my-16" data-aos="fade-up">
          <div id="contact" className="text-5xl font-bold mb-8">
            Contact
          </div>
          <div className="flex flex-col justify-center items-center my-4 mb-4">
            <div className="md:text-2xl sm:text-xl">
              <a href="https://linkedin.com/in/jirayusaeng">LinkedIn</a>
            </div>
            <div className="md:text-2xl sm:text-xl">
              <a href="https://medium.com/@bankzxcv">Medium Blog (Thai Content)</a>
            </div>
            <div className="md:text-2xl sm:text-xl">
              <a href="https://github.com/bankzxcv">Github</a>
            </div>
            <div className="md:text-2xl sm:text-xl">Email: jirayu.saeng@gmail.com</div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  )
}
