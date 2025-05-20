'use client';
import Head from "next/head";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { 
  FiInstagram ,
  FiLinkedin,
  FiGithub,
  FiMail
} from "react-icons/fi";

import Image from "next/image";
import design from '../public/design.png';
import code from '../public/code.png';
import Design4 from '../public/Design4.png';
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode? "dark" :""}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-4xl text-slate-600 font-arrayr dark:text-slate-300">Kamlesh Mistry</h1>
            <ul className="flex items-center">
              <li>
                <MdOutlineDarkMode onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-3xl  text-gray-600 dark:text-slate-300"/>
              </li>
              <li>
                <a
                  href="/KamleshMistry.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-slate-300 to-teal-200 text-white px-4 py-2 rounded-sm ml-8 dark:text-gray-700"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 font-arrayb text-slate-600 font-medium md:text-6xl dark:text-gray-50 ">
              Kamlesh Mistry
              </h2>
            <h3 className="text-2xl font-nippo py-2 text-teal-600 md:text-3xl dark:text-teal-300">
              Developer, Desginer and Artist.
              </h3>
            <p className="text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Based in Virar, Maharashtra, India.</p>
            <p className="text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Completed my SSC in 2019, HSC in 2021 and Diploma in Computer Engineering in 2024.
            </p>
            <p className="text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Curretly pursuing my Bachelors in technology in Computer Engineering  St. John College of Engineering and Management based in Palghar, Maharashtra, India.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-300"> 
           <a href="https://www.instagram.com/kamleshm_02/" target="_blank"> <FiInstagram /></a>
            <a href="https://www.linkedin.com/in/kamlesh-mistry-957895260" target="_blank"> <FiLinkedin /></a>
           <a href="https://github.com/km-kurisu" target="_blank"> <FiGithub /></a>
           <a href="mailto:kamleshkmistry33@gmail.com" target="_blank"> <FiMail /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-90 h-90 mt-20 mb-20 md:h-96 md:w-96 md:mb-40 ">
            <Image src={Design4}  layout="Fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl font-arrayr py-1 dark:text-teal-300">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300" >
              Creative and Detailed-oriented developer with a passion for creating
              engaging and user-friendly digital experiences. I have a strong foundation in both front-end and back-end development, as well as a variety of different skills
              providing versititlity and adaptability in the fast-paced world of technology.
            </p>
            <h3 className="text-4xl font-arrayw py-1 dark:text-teal-300">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">
              <span className="font-nippo text-xl text-teal-600 dark:text-emerald-400">Web Development:</span> Building custom websites with a focus on user experience, functionality, and aesthetics.
              </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">
            <span className="font-nippo text-xl text-teal-600 dark:text-emerald-400">Digital Art: </span>Producing original artwork, illustrations, and graphic design elements.
               </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">  
            <span className="font-nippo text-xl text-teal-600 dark:text-emerald-400">Full-Stack Development:</span> Handling all aspects of software development, from front-end to back-end.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">  
              <span className="font-nippo text-xl text-teal-600 dark:text-emerald-400">Application Development:</span> Building custom applications with a focus on user experience, functionality, and aesthetics.
              </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={design} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-teal-600 dark:text-teal-300 ">
                Achievements
              </h3>
              <p className="py-2 font-nippo text-teal-600 dark:text-slate-300">
                A Few Achievements and Certifications I have earned over the years.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-emerald-400">Participation in TechSurf Hackathon in 2023 </h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Participated in HackON with Amazon S-3</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Pursuing CS50X Online Course by Harvard</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Pursuing CS50X Game Development Online Course by Harvard</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Completed DotNET and SQL training course led by Kantascrypt</p>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={design} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-teal-600 dark:text-teal-300 ">
                Future Goals
              </h3>
              <p className="py-2 font-nippo text-teal-600 dark:text-slate-300">
                Some Goals that i want to achieve
              </p>
              <h4 className="py-4 text-teal-600 dark:text-emerald-400">Complete my B.Tech with specializtion in AI</h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Create at least 4 games before the end of 3rd Year</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Land an InternShip</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">work towards creating my own product based startup</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Atleast Visit japan Once</p>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={code} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-teal-600 dark:text-teal-300 ">
                Personal Side
              </h3>
              <p className="py-2 font-nippo text-teal-600 dark:text-slate-300">
                A insight into my personal side
              </p>
              <h4 className="py-4 text-teal-400  dark:text-emerald-400">A Reader, Writer, Observer</h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Wrote and Proofread many webnovels for various scanalations</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">A hobbyist Digital Illustrator and learning 3D art</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Love to observe and find the hidden meaning behind the nature's motives</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">A avid watcher of skies</p>
            </div>
          </div>
        </section>
        <section>
         <div>
          <footer className="text-gray-800 text-center py-1 font-nippo dark:text-emerald-400"> 
            <p>&copy; 2025 Kamlesh Mistry. All rights reserved.</p>
            </footer>
          </div>        
        </section>
      </main>
    </div>
  );
}
