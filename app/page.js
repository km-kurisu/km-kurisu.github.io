'use client';
import Head from "next/head";
import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  IoLogoLinkedin,
  IoLogoGithub 
} from 'react-icons/io5';
import {AiFillInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import Image from "next/image";
import RuanMei from '../public/RuanMei.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import Design4 from '../public/Design4.png';
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
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
            <h1 className="text-4xl text-slate-600 font-aktura dark:text-slate-300">Kamlesh Mistry</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl  text-gray-600 dark:text-slate-300"/>
              </li>
              <li><a href="#" className="bg-gradient-to-r from-slate-300 to-teal-200 text-white px-4 py-2 rounded-3xl ml-8 dark:text-gray-700">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-slate-600 font-medium md:text-6xl dark:text-gray-50 ">
              Kamlesh Mistry
              </h2>
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl dark:text-teal-300">
              Developer, Desginer and Artist.
              </h3>
            <p className="text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
            I possess a unique blend of skills that allow me to bridge the gap between creativity and technology. 
            I can seamlessly transition from coding intricate algorithms to crafting visually stunning designs, all while infusing my work with a touch of artistic flair. 
            My ability to combine technical expertise with creative vision makes me a versatile asset in the digital world.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-300"> 
           <a href="https://www.instagram.com/kamleshm_02/" target="_blank"> <AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/kamlesh-mistry-957895260" target="_blank"> <IoLogoLinkedin /></a>
           <a href="https://github.com/km-kurisu" target="_blank"> <IoLogoGithub /></a>
           <a href="mailto:kamleshkmistry33@gmail.com" target="_blank"> <BiLogoGmail /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-90 h-90 mt-20 mb-20 md:h-96 md:w-96 md:mb-40 ">
            <Image src={Design4}  layout="Fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-300">Services i offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300" >
              As a Developer, Designer, and Artist, I offer a comprehensive range of services tailored to your digital needs. My expertise includes:
              </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">
              <span className=" text-teal-600 dark:text-emerald-400">Web Development:</span> Building custom websites with a focus on user experience, functionality, and aesthetics.
              </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">
            <span className=" text-teal-600 dark:text-emerald-400">Digital Art: </span>Producing original artwork, illustrations, and graphic design elements.
               </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">  
            <span className=" text-teal-600 dark:text-emerald-400">Full-Stack Development:</span> Handling all aspects of software development, from front-end to back-end.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">  
              <span className=" text-teal-600 dark:text-emerald-400">Application Development:</span> Building custom applications with a focus on user experience, functionality, and aesthetics.
              </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-300 ">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-slate-300">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-emerald-400">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Canva</p>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-300 ">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-slate-300">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-emerald-400">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Android Studio</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Visual Studio Code</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Visual Studio</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Unity 3D</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-300">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-teal-800 dark:text-slate-300">
              My portfolio showcases a diverse range of projects that highlight my technical skills, 
              creative vision, and problem-solving abilities. Each piece reflects my commitment to crafting innovative and visually appealing digital solutions. 
              From responsive websites to engaging mobile apps and captivating artwork, 
              my portfolio demonstrates my ability to seamlessly blend creativity and technology.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100'} height={'100'} layout="responsive" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
