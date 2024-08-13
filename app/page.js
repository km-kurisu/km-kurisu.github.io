'use client';
import Head from "next/head";
import React from "react";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  IoLogoDiscord, 
  IoLogoTwitter 
} from 'react-icons/io5';
import {AiFillInstagram} from 'react-icons/ai';
import {
  BiLogoTelegram, 
  BiLogoSpotify
} from 'react-icons/bi';
import Image from "next/image";
import RuanMei from '../public/RuanMei.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark" :""}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-4xl text-slate-600 font-aktura dark:text-slate-300">Kurisu Ichigo</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl  text-gray-600 dark:text-slate-300"/>
              </li>
              <li><a href="#" className="bg-gradient-to-r from-slate-300 to-teal-200 text-white px-4 py-2 rounded-3xl ml-8 dark:text-gray-700">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-slate-600 font-medium md:text-6xl dark:text-gray-50 ">
              Kurisu Ichigo
              </h2>
            <h3 className="text-2xl py-2 text-teal-600 md:text-3xl dark:text-teal-300">
              Developer, Desginer and Artist.
              </h3>
            <p className="text-md py-5 leading-8 text-teal-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
              Artist doing illustrations and concept arts also can design mockups and do 3d renders, 
              expert writer amd storyboard creator along with being a game desginer and programmer
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-slate-300"> 
            <IoLogoTwitter />
            <AiFillInstagram />
            <IoLogoDiscord />
            <BiLogoSpotify/>
            <BiLogoTelegram/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-80 h-90 mt-20 mb-20 md:h-96 md:w-96 md:mb-60 ">
            <Image src={RuanMei}  layout="Fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-300">Services i offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300" >
              Artist doing illustrations and concept arts also can design mockups and do 3d renders, 
              expert writer amd storyboard creator along with being a game desginer and programmer
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-300 ">
              Artist doing illustrations and concept arts also can design mockups and do 3d renders, 
              expert writer amd storyboard creator along with being a game desginer and programmer
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
              <p className="text-gray-800 py-1 dark:text-emerald-400">Indesign</p>
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
              <p className="text-gray-800 py-1 dark:text-emerald-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Indesign</p>
            </div>
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-teal-300 ">Consulting</h3>
              <p className="py-2 dark:text-slate-300">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-emerald-400" >Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Figma</p>
              <p className="text-gray-800 py-1 dark:text-emerald-400">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-300">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-teal-800 dark:text-slate-300">
              Artist doing illustrations and concept arts also can design mockups and do 3d renders, 
              expert writer amd storyboard creator along with being a game desginer and programmer
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
