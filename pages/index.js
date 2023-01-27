import Head from 'next/head'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai'
import Image from "next/image";
import bork from '../assets/webport.gif'
export default function Home() {
  return (
    <>
      <Head>


        <title>Antony Ni Portfolio</title>
        <meta name="description" content="Web portfolio for Antony Ni, Full-Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/letter-a.ico" />
      </Head>
      <main className="bg-blue-300 px-2">
        <section className="">
          <nav className="p-2  flex justify-between">
            <h1 className="pl-4 text-2xl font-semibold">	&#60;antonyni&#62;</h1>
            <ul className="flex items-center">
              <li>
                <AiFillGithub className="text-2xl text-blue-500" />
              </li>
              <li>
                <AiFillMediumCircle className="ml-3 text-2xl text-blue-500" />
              </li>
              <li className="pr-10 ml-3 text-2xl text-blue-500">
                <AiFillLinkedin />
              </li>
              <li>
                <BsLightbulbOff className="cursor-pointer text-xl" />
              </li>
              <li>
                <a className="bg-blue-400 text-white px-4 py-1 rounded-md ml-8 text-xl" href="assets/resume.pdf" download>&#60;resume/&#62;</a>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-center min-h-screen pb-3 ">
            <h2 className="pl-20 ">&#60;about&#62;</h2>
            <div className="text-center  p-10">
              <div className="text-3xl text check"></div>
              <p className="leading-8 mx-auto max-w-2xl text-md font-semibold">Software Engineer with a passion for cool animations. Full-stack development with a focus on CSS, HTML, and
                JavaScript. Agile enthusiast. Avid podcast, fitness, and video game junkie with a growth mindset. Chronically bad singer. </p>
            </div>
            <h2 className="pl-20 mt-5 mb-5">&#60;/about&#62;</h2>
          </div>
        </section>
        <section className="">
          <h3 className="pb-10 text-3xl text-center font-semibold">
            my work
          </h3>
          <div className="flex flex-col justify-center  pb-3 ">
            <h2 className="pl-20 ">&#60;projects&#62;</h2>
            <div className="py-20 flex justify-center">
              <Image src={bork} height={800} className="border-2 border-black w-1/4" />
              <p className="text-xl max-w-sm  font-semibold pl-10 my-auto">Web Portfolio: Uses Next.js, React, Tailwind, Html, CSS, JavaScript, git</p>
            </div>
            <h2 className="pl-20 ">&#60;/projects&#62;</h2>
          </div>
        </section>
        <h1 className="text-2xl pl-4 font-semibold pb-2">	&#60;/antonyni&#62;</h1>
      </main>
    </>
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
if (typeof window !== "undefined") {
  const el = document.querySelector('.text');
  const fx = new TextScramble(el);

  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 1200)
    })
    counter = (counter + 1) % phrases.length

  }
  next()
}