'use client';
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { 
  FiInstagram ,
  FiLinkedin,
  FiGithub,
  FiMail
} from "react-icons/fi";

import Image from "next/image";
//import design from '../public/design.png';
//import code from '../public/code.png';
import achievements from '../public/achievements.jpg';
import goal from '../public/goal.jpg';
import self from '../public/self.jpg';
import Design4 from '../public/Design4.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [joke, setJoke] = useState(null);
  const [loadingJoke, setLoadingJoke] = useState(false);

  // Scroll to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Fetch a random joke from the JokeAPI
  const fetchJoke = async () => {
    setLoadingJoke(true);
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single,twopart&blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
      const data = await res.json();
      setJoke(data);
    } catch (err) {
      setJoke({ type: "single", joke: "Couldn't fetch a joke right now. Try again!" });
    }
    setLoadingJoke(false);
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  // Show scroll-to-top button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`bg-animated-gradient ${darkMode ? "dark" : ""}`}>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-4xl text-[#52154E] font-arrayr dark:text-slate-300">Kamlesh Mistry</h1>
            <ul className="flex items-center">
              <li>
                <MdOutlineDarkMode onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-3xl  text-gray-600 dark:text-slate-300"/>
              </li>
              <li>
                <a
                  href="/KamleshMistry.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#0E6BA8] to-[#52154E] text-white px-4 py-2 rounded-sm ml-8 dark:text-gray-700"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 font-arrayb text-[#111344] font-medium md:text-6xl dark:text-gray-50 ">
              Kamlesh Mistry
              </h2>
            <h3 className="text-2xl font-nippo py-2 text-[#0E6BA8] md:text-3xl dark:text-teal-300">
              Developer, Desginer and Artist.
              </h3>
            <p className="text-md py-5 leading-8 text-[#63458A] md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Based in Virar, Maharashtra, India.</p>
            <p className="text-md py-5 leading-8 text-[#63458A] md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Completed my SSC in 2019, HSC in 2021 and Diploma in Computer Engineering in 2024.
            </p>
            <p className="text-md py-5 leading-8 text-[#63458A] md:text-xl max-w-xl mx-auto dark:text-slate-300">
            Curretly pursuing my Bachelors in technology in Computer Engineering  St. John College of Engineering and Management based in Palghar, Maharashtra, India.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-[#564787] dark:text-slate-300"> 
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
            <h3 className="text-4xl text-[#52154E] font-arrayr py-1 dark:text-teal-300">About Me</h3>
            <p className="text-md py-2 leading-8 text-[#001C55] dark:text-slate-300" >
              Creative and Detailed-oriented developer with a passion for creating
              engaging and user-friendly digital experiences. I have a strong foundation in both front-end and back-end development, as well as a variety of different skills
              providing versititlity and adaptability in the fast-paced world of technology.
            </p>
            <h3 className="text-4xl text-[#52154E] font-arrayw py-1 dark:text-teal-300">Skills</h3>
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
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl bg-animated-card">
              <Image src={achievements} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-[#52154E] dark:text-teal-300 ">
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
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl bg-animated-card">
              <Image src={goal} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-[#52154E] dark:text-teal-300 ">
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
            <div className="text-left shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-slate-700 dark:shadow-2xl bg-animated-card">
              <Image src={self} width={100} height={100} />
              <h3 className="text-2xl font-arrayb font-medium pt-8 pb-2 text-[#52154E] dark:text-teal-300 ">
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
        <section className="flex justify-center my-8">
          <div className="w-full max-w-2xl aspect-video">
            <h3 className="text-4xl text-center font-arrayr py-1 text-[#52154E] dark:text-teal-300">One of my favourite songs....</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/0Uhh62MUEic?si=LZyWq4AunW3HX-aE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></iframe>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center my-12">
          <div className="bg-animated-gradient rounded-xl shadow-lg p-6 max-w-xl w-full text-center">
            <h3 className="text-3xl font-arrayr text-[#52154E] mb-4">Random Joke</h3>
            {loadingJoke ? (
              <p className="text-[#001C55] dark:text-teal-300">Loading...</p>
            ) : joke ? (
              <div className="text-lg text-[#52154E] dark:text-slate-200 min-h-[60px]">
                {joke.type === "single" ? (
                  <span>{joke.joke}</span>
                ) : (
                  <>
                    <span className="font-bold">{joke.setup}</span>
                    <br />
                    <span>{joke.delivery}</span>
                  </>
                )}
              </div>
            ) : null}
            <button
              onClick={fetchJoke}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-[#0E6BA8] to-[#52154E] text-white rounded-full shadow card-flare hover:from-teal-500 hover:to-blue-600 transition-all"
              disabled={loadingJoke}
            >
              {loadingJoke ? "Loading..." : "Get Another Joke"}
            </button>
          </div>
        </section>
        <section>
         <div>
          <footer className="text-[#63458A] text-center py-4 font-nippo dark:text-emerald-400">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2 text-base">
              <span className="flex items-center gap-2">
                <svg className="inline-block w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4z"/><path d="M12 16v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <a href="mailto:kamleshkmistry33@gmail.com" className="underline hover:text-teal-600">kamleshkmistry33@gmail.com</a>
              </span>
              <span className="flex items-center gap-2">
                <svg className="inline-block w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.72 3.05a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.98.35 2 .59 3.05.72A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+919876543210" className="underline hover:text-teal-600">+91 81778 66278</a>
              </span>
              <span className="flex items-center gap-2">
                <svg className="inline-block w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <span>Virar, Maharashtra, India</span>
              </span>
              </div>
              <div  className="flex flex-col md:flex-row items-center justify-center gap-4 mt-2 text-base">
                <p>&copy; 2025 Kamlesh Mistry. All rights reserved.</p>
            </div>
          </footer>
         </div>        
        </section>
      </main>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#0E6BA8] to-[#52154E] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
