import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";

import Script from "next/script"
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import NavBar from '../components/NavBar';

export default function Home({ blogs, profile}) {
  const client = createClient({
    projectId: "4gbdzvi4",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  
  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        <title>{profile.title} - Developer | Coder | Software Geek</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head> 
      <NavBar profile={profile} />
      {/* <div className="w-full z-50 top-0 py-3 sm:py-5  absolute ">
        <div className="container flex items-center justify-between">
          <div>
            <a href="/">
             <h2 className='text-white text-2xl font-bold'>{profile.title}</h2>
            </a>
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center">

              <li className="group pl-6">

                <a href='#about'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Skills</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#portfolio'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#clients'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#work'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#statistics'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

              <a href='#blog'><span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span></a>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">

                <span
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

            </ul>
          </div>
          <div className="block lg:hidden">
            <button>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        </div>
      </div> */}
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" /> 
      <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
        </button>

        <ul className="mt-8 flex flex-col">

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Skills</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>

          </li>

          <li className="py-2">

            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Contact</span>

          </li>

        </ul>
      </div>
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm {profile.name}!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                </div>
                <span><div>
                <Link href="https://drive.google.com/file/d/1u62352ImLPBvQTmhaZDUnssXbIgQTmOH/view?usp=sharing"><div className="buttons text-center md:text-right">
                  <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>Resume</button>
                </div></Link>
                <Link href={'/blogs'}><div className="buttons text-center md:text-left">
                  <button className='bg-purple-600 text-white border-2 px-4 py-1 my-4 rounded-2xl'>All Blogs</button>
                </div></Link>
                </div>
                </span>
              </div>
                
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I'm Kamal Anand, a Web developer, ML enthusiast and competitive programmer
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
            I am pursuing Bachelor of Technology in Computer Science and Engineering, at IIT (ISM) Dhanbad. I am also pursuing a minor degree in Finance. About my technical skills, the programming languages which I have learnt are C, C++ and python. I have also explored web development projects involving Mern Stack and sanity based projects. Apart from this, I have done projects involving machine learning. I have regularly participated in online coding contests across different platforms. I have covered courses like object oriented programming  and data, structures and algorithms. I have been among the high grade achievers in the college. My hobby is singing and I also love playing chess.
            </p>
            <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <a href="https://twitter.com/Kamal_anand0/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/kamal-anand-935901227/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/kamal3.8/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="skills">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are my technical skills
        </h3>
        
        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-development-white.svg" alt="development icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-development-black.svg" alt="development icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              HTML, CSS, Node Js, Express Js, React Js, 
PHP, Laravel, Sanity
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Language
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              C++, C, Python, JavaScript
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Machine 
Learning

              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Supervised & Unsupervised Learning, Flask 
API
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Database
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              MySQL, MongoDB
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                CSE Coursework
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              DSA, OOPS, OS, DBMS, Networks.
              </p>
            </div>
          </div>
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" />
              </div>
              <div className="block group-hover:hidden">
                <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Finance CourseWork
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Computational Finance, Corporate Finance, Probability & Statistics, 
Economics & Finance

              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <a href="https://asmeiitdhanbad.vercel.app/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Screenshot 2023-12-18 154308.png" className="w-full shadow" alt="portfolio image" />
          </a> <p className="pt-1 font-body leading-relaxed text-grey-20 sm:text-xl lg:text-2xl">
  <span>
    <br />❖  Collaboratively built the official website for ASME student chapter at IIT (ISM) Dhanbad.
  </span>
  <span>
    <br />❖ Admin can add/update information about upcoming events of the organization and add/update organization members using the admin dashboard.
  </span>
  <span>
    <br />❖ Implemented backend of the website using Sanity.
  </span>
  <span>
    <br />❖ It has 500+ active monthly users.
  </span>
  <span>
    <br />❖ Tech Stack: HTML, CSS, JavaScript, Next JS, GROQ and Sanity.
  </span>
</p>

          <a href="https://ism-connect-example.onrender.com/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Screenshot 2023-12-18 154503.png" className="w-full shadow" alt="portfolio image" />
          </a>
          
          <p className="pt-1 font-body leading-relaxed text-grey-20 sm:text-xl lg:text-2xl">
          <span><br /> ❖ A FullStack Website that I developed with College Seniors, which has features of Linkedin like connection, posting, profile, comment, etc. </span>
  <span><br/>❖ Learned about Laravel, PHP, MySQL, Its frontend is almost done, and backend is developed; the minimal working website is launched here</span>
  <span>
    <br />❖ Tech Stack: HTML, CSS, PHP, Laravel, MySQL.
  </span>
</p>
          <a href="https://github.com/kamal030803/Workout-Website-MERN" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Screenshot 2023-12-18 154310.png" className="w-full shadow" alt="portfolio image" />
          </a>
          <p className="pt-1 font-body leading-relaxed text-grey-20 sm:text-xl lg:text-2xl">
          <span><br />❖ A MERN Stack Application In which we can Create and Delete a Workout from the front end using ReactJS and update the MongoDB database using the Backend Server.</span>
          <span>
            <br/>❖ Tech Stack: HTML, CSS, JavaScript, MongoDB, ExpressJS, ReactJS, NodeJS.
          </span>
          </p>

          <a href="https://kamal030803.github.io/WeatherBlaze/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Screenshot 2023-12-18 154414.png" className="w-full shadow" alt="portfolio image" />
          </a>

          <p className="pt-5 font-body leading-relaxed text-grey-20 sm:text-xl lg:text-2xl">
          <span><br/>❖ Developed a weather app, which displays the 
temperature and weather condition of the entered 
city </span>
          <span><br/>❖ This website uses OpenWeatherMap to extract 
information </span>
          <span><br/>❖ Tech Stack: HTML, CSS, JavaScript </span>
          </p>
        </div>
      </div>


      <div className="container py-16 md:py-20" id="education">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My Education
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's how my education background looks
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/temp1.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">April 2018 - March 2019</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">Class 10th</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">96% <br/> Kendriya Vidyalaya No.1, Ahmedabad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/temp1.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">April 2020 - March 2021</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">Class 12th</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">97% <br/> Kendriya Vidyalaya No.1, Ahmedabad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img src="/assets/img/temp2.svg" className="h-auto w-32" alt="company logo" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">December 2021 - May 2025</span>
                    <span className="block pt-2 font-header text-xl font-bold text-primary">Bachelor's in Technology</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">Computer Science & Technology - CGPA: 9.19 <br/>IIT (ISM) Dhanbad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
            {/* <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-02.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My personal productivity system</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a>
            <a href="/post" className="shadow">
              <div style={{"backgroundImage": "url(/assets/img/post-03.png)"}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black">My year in review 2020</span>
                <span className="block pt-2 font-body text-grey-20">Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </div>
            </a> */}
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="contact">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here's a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            GET IN TOUCH!
          </p>
        </div>
        <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name" type="text" id="name" />
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Email" type="text" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <button
            className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form>
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+91) 7069216202
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              kanand032003@gmail.com
            </p>
          </div>
          <div
            className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              27-B, Mil Kaamdar Society, Kalol, Gandhinagar, Gujarat, India - 382721.
            </p>
          </div>
        </div>
      </div>

      <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
        style={{"backgroundImage": "url(/assets/img/map.png)"}}></div>

      <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
        style={{"backgroundImage": "url(/assets/img/bg-cta.jpg)"}}>
        <div className="container relative z-30">
          <h3
            className="text-center font-header text-3xl uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
            Keep <span className="font-bold">up-to-date</span> <br />
            with what I'm up to
          </h3>
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text"
              id="email" placeholder="Give me your Email" />
            <button
              className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              Join the club
            </button>
          </form>
        </div>
      </div>
    </div><div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              © Copyright 2023. All right reserved, KAMAL ANAND.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="https://twitter.com/Kamal_anand0/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="https://www.linkedin.com/in/kamal-anand-935901227/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="https://www.instagram.com/kamal3.8/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                </a>
            </div>
          </div>
        </div></></>
     
    // <div className="home mx-8">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="mx-8">

    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId = "iytovi01"
    // dataset = "production"
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li className="special-list-item">{children}</li>,
    //   }}
    // />
    //   </div>
    //   <span>I am homepage</span>
    // </div>
  )
}


export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "4gbdzvi4",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);

  return {
    props: {
      blogs,
      profile
    }
  }
}