import Head from 'next/head'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin, AiFillCaretRight } from 'react-icons/ai'
import Image from "next/image";
import bork from '../public/webport.gif'
import { useEffect, useState } from "react";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import survey from '../public/survey.png';
import ard from '../public/arduino.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [iconActive, setIconActive] = useState(true);
  const [Time] = useState(1200);
  const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2jj3zhg', 'template_bblpria', form.current, '4PPyuNUJscIgNXPv_')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    alert("Message Sent! Talk to you soon.");
  };
  useEffect(() => {
    if (!done) {
      const el = document.querySelector('.text');
      const fx = new TextScramble(el);
      let counter = 0

      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, Time)
        })
        counter = (counter + 1) % phrases.length

      }
      next()
    }
    setDone(true);
  })

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>


        <title>Antony Ni Portfolio</title>
        <meta name="description" content="Web portfolio for Antony Ni, Full-Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/letter-a.ico/" />
      </Head>
      <main className="bg-blue-300 px-2 dark:bg-gray-900 min-w-fit overflow-hidden">
        <section className="">
          <nav className="p-2  flex justify-between">
            <h1 className="pl-4 text-2xl font-semibold dark:text-blue-300  " id="messenger">	&#60;antonyni&#62;</h1>
            <ul className="flex items-center">
              <li>
                <a href="https://github.com/antonyni" target="_blank"><AiFillGithub className="text-2xl text-blue-500 dark:text-blue-300" /></a>
              </li>
              <li>
                <a href="https://medium.com/@antonyni1010" target="_blank"><AiFillMediumCircle className="ml-3 text-2xl text-blue-500 dark:text-blue-300" /></a>
              </li>
              <li className="pr-10 ml-3 text-2xl text-blue-500">
                <a href="https://www.linkedin.com/in/antonyni1010/" target="_blank"><AiFillLinkedin className="dark:text-blue-300" /></a>
              </li>
              <li>
                <div onClick={() => { setDarkMode(!darkMode); setIconActive(!iconActive) }} className="cursor-pointer text-xl">
                  {iconActive ? (<BsLightbulb className="text-blue-300" />) : (<BsLightbulbOff />)}
                </div>
              </li>
              <li>
                <a className="bg-blue-400 text-white px-4 py-1 rounded-md ml-8 text-xl" href="Resume for Antony Ni.pdf" target="_blank" >&#60;resume/&#62;</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-center min-h-screen pb-3 ">
            <h2 className="pl-20 dark:text-blue-300">&#60;about&#62;</h2>
            <div className="text-center  p-10">
              <div className="text-3xl text  dark:text-blue-300"></div>
              <p className="leading-8 mx-auto max-w-2xl text-md font-semibold dark:text-blue-300">Software Engineer with a passion for cool animations. Full-stack developer with a focus on CSS, HTML, and
                JavaScript. Agile enthusiast. Avid podcast, fitness, and video game junkie with a growth mindset. Chronically bad singer. </p>
            </div>
            <h2 className="pl-20 mt-5 mb-5 dark:text-blue-300">&#60;/about&#62;</h2>
          </div>
        </section>
        <section>
        <h2 className="pl-20 dark:text-blue-300">&#60;skills&#62;</h2>
            <h3 className="pb-10 pt-5 text-3xl text-center font-semibold dark:text-blue-300">
            skills
          </h3>
          <div className="flex justify-center gap-10 ">
            <div className ="flex flex-col  dark:bg-gray-800 bg-blue-200  mb-32 rounded-xl p-6 w-1/5 dark:text-blue-300">
              <p className="text-2xl  border-b-4 dark:border-gray-900 mb-4"> Front End</p>
              <p> CSS</p>
              <p> JavaScript</p>
              <p> Html</p>
              <p> Tailwind</p>
              <p> Next.js</p>
              <p> React</p>
              <p> React Native</p>
            </div>
            <div className ="flex flex-col  dark:bg-gray-800 bg-blue-200  mb-32 rounded-xl p-6 w-1/5 dark:text-blue-300">
              <p className="text-2xl  border-b-4 dark:border-gray-900 mb-4"> Back End</p>
              <p> Java</p>
              <p> C++</p>
              <p> C</p>
              <p> Python</p>
              <p> MySQL</p>
              <p> Matlab</p>
              <p> F#</p>
              <p> OCaml</p>
              
            </div>
            <div className ="flex flex-col  dark:bg-gray-800 bg-blue-200  mb-32 rounded-xl p-6 w-1/5 dark:text-blue-300">
              <p className="text-2xl  border-b-4 dark:border-gray-900 mb-4">Tools</p>
              <p> Git</p>
              <p> NodeJs</p>
              <p> Bash</p>
              <p> VS Code</p>
              <p> Vercel</p>
              <p> AWS</p>
              <p> Agile</p>
              <p> Microservices</p>
              <p> SAAS</p>
              <p> APIs</p>
            </div>

          </div>
          <h2 className="pl-20 pb-20 mb-20 dark:text-blue-300">&#60;/skills&#62;</h2>

        </section>
        <section className="">

          <div className="flex flex-col justify-center   ">
            <h2 className="pl-20 dark:text-blue-300">&#60;projects&#62;</h2>
            <h3 className="pb-10 pt-5 text-3xl text-center font-semibold dark:text-blue-300">
            my work
          </h3>
            <div className="flex justify-center gap-32 ">
              <div className=" flex flex-col w-4/5 pt-5 pb-10  dark:bg-gray-800 bg-blue-200 shadow-2xl rounded-xl my-10">
                <p className="dark:text-blue-300 font-semibold text-center pb-4 text-2xl">Web Portfolio</p>
                <div className="flex justify-between ml-10 mr-10">
                  <Image src={bork} className="border-2 border-transparent    w-2/5  object-contain" />

                  <div className="flex flex-col justify-between pl-10 w-3/5">
                    <p className="dark:text-blue-300 text-left text-sm" >Description: Web portfolio with a custom JavaScript intro animation, Email.js contact form, and a functioning light-mode. Created with React using Next.js api and deployed using Vercel. </p>
                    <p className="dark:text-blue-300 text-left text-sm pt-4 pb-4" >Languages/Tools: Next.js, Tailwind.CSS, React, CSS, HTML, JavaScript, Vercel, Email.js, Github</p>
                    <div className="flex ml-auto">
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="https://www.antonyni.dev/" target="_blank" >Link</a>
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="https://github.com/antonyni/antony-portfolio" target="_blank">Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-32 ">
              <div className=" flex flex-col w-4/5 pt-5 pb-10  dark:bg-gray-800 bg-blue-200 shadow-2xl rounded-xl my-10">
                <p className="dark:text-blue-300 font-semibold text-center pb-4 text-2xl">Portfolio Survey</p>
                <div className="flex justify-between ml-10 mr-10">
                  <Image src={survey} className="border-2 border-transparent   w-2/5  object-contain" />

                  <div className="flex flex-col justify-between pl-10 w-3/5">
                    <p className="dark:text-blue-300 text-left text-sm" >Description: Survey demo using basic CSS,HTML, and JavaScript. Demonstrates correct formating and usage of the CSS form template and also proper formating of textarea and selectbox. The static demo is deployed on Github.</p>
                    <p className="dark:text-blue-300 text-left text-sm pt-4 pb-4" >Languages/Tools: CSS, HTML, JavaScript, Github</p>
                    <div className="flex ml-auto">
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="https://antonyni.github.io/portfolio-survey/ "target="_blank"  >Demo</a>
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="https://github.com/antonyni/portfolio-survey " target="_blank" >Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-32 ">
              <div className=" flex flex-col w-4/5 pt-5 pb-10  dark:bg-gray-800 bg-blue-200 shadow-2xl rounded-xl my-10">
                <p className="dark:text-blue-300 font-semibold text-center pb-4 text-2xl">Arduino Tic-Tac-Toe</p>
                <div className="flex justify-between ml-10 mr-10">
                  <Image src={ard} className="border-2 border-transparent   w-2/5  object-contain" />

                  <div className="flex flex-col justify-between pl-10 w-3/5">
                    <p className="dark:text-blue-300 text-left text-sm" >Description: A 2-person school project involving a human player playing versus an AI in tic-tac-toe. Utilized a custom AI minimax algorithm to find the best possible moves. Buttons and bluetooth communication with the arduino was used along with LED lights to display the game state. Charlieplexing was used for the wiring.</p>
                    <p className="dark:text-blue-300 text-left text-sm pt-4 pb-4" >Languages/Tools: C++, Arduino, Processing</p>
                    <div className="flex ml-auto">
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="Arduino Tic Tac Toe.pdf "target="_blank"  >Doc</a>
                      <a className="bg-blue-400 text-white  mx-2 rounded-md text-md py-2 w-16 text-center" href="https://github.com/antonyni/arduino_tictactoe " target="_blank" >Github</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="pl-20 dark:text-blue-300">&#60;/projects&#62;</h2>
          </div>
        </section>
        <section className="pt-20 mt-20">
          <h2 className="pl-20 dark:text-blue-300">&#60;contact&#62;</h2>
          <h3 className="pb-10 text-3xl text-center font-semibold dark:text-blue-300">
            let's talk
          </h3>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3 w-1/2 mx-auto dark:text-blue-300 border-blue-300">
            <input className="bg-transparent dark:border-blue-300 border-gray-900 border rounded-sm dark:placeholder-gray-400 placeholder-gray-900" type="text" name="name" placeholder="Full Name" required />
            <input className="bg-transparent dark:border-blue-300 border-gray-900 border rounded-sm dark:placeholder-gray-400 placeholder-gray-900" type="email" name="email" placeholder="Email" required />
            <textarea className="bg-transparent dark:border-blue-300 border-gray-900 border rounded-sm resize-none dark:placeholder-gray-400 placeholder-gray-900" name="message" rows="7" column="7" placeholder="Your Message" required>
            </textarea>
            <button className="bg-blue-400 text-white rounded-md w-36 py-3 text-l" type="submit">Send Message</button>
          </form>

          <h2 className="pl-20 dark:text-blue-300">&#60;/contact&#62;</h2>

        </section>
        <h1 className="pt-20 text-2xl pl-4 font-semibold pb-3 dark:text-blue-300">	&#60;/antonyni&#62;</h1>
      </main>
    </div>


  )
}

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

const phrases = [
  'Hi!',
  'My name is Antony.',
  'Nice to meet you!'
]
