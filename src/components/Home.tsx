import About from "./About"
import Certs from "./Certs"
import Projects from "./Projects"
import { useState, useEffect, useRef } from "react"

export default function Home() {

  const [mediumScreen, setMediumScreen] = useState(window.matchMedia("(min-width: 800px)").matches)
  const observerRefs = useRef<(HTMLHeadingElement | null)[]>([])

  useEffect(() =>
    window.matchMedia("(min-width: 800px)").addEventListener('change', e => setMediumScreen( e.matches ))
  )

  useEffect(() => {
    console.log(observerRefs.current)
  }, [observerRefs])

  return (
    <div className="flex flex-col md:flex-row px-8 py-8 md:justify-center h-full w-full">
      <div className="mb-20 md:mb-0 flex flex-col md:items-center md:w-1/2 md:h-screen md:justify-center">
        <div className="text-left md:fixed">
          <h1 className="tracking-[0.15em] text-3xl md:text-5xl font-bold">Aniket Singh</h1>
          <h2 className="tracking-wider text-violet-500 text-xl md:text-2xl font-bold w-4/6">Software Engineer</h2>
          <p className="text-sm md:w-2/3 text-gray-400">Previously Computer Science MEng at University of Warwick, now open for work.</p>
          {mediumScreen && <Contents observerRefs={observerRefs}/>}
          <Icons />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2">
        <About observerRefs={observerRefs}/>
        <Projects observerRefs={observerRefs}/>
        <Certs observerRefs={observerRefs}/>
        <Footer />
      </div>
    </div>
  )
}

type ContentsType = {
  observerRefs: React.MutableRefObject<(HTMLHeadingElement | null)[]>
}

function Contents( { observerRefs } : ContentsType) {

  const [active, setActive] = useState(0)

  const observerHandler = (e: IntersectionObserverEntry[], key:number) => {
    console.log(e[0].target.id, key)
    setActive(key)
  }

  useEffect(() => {
    observerRefs.current.forEach((section, key) => {
      const observer = new IntersectionObserver((e) => {observerHandler(e, key)})
      if (section) { observer.observe(section) }
    })
  }, [observerRefs])

  type ContentsButtonType = {
    name: string,
    number: number,
    active: number
  }

  const ContentsButton = ( { name, number, active } : ContentsButtonType) => {

    return (<a className={`transition duration-200 ${active !== number ? 'text-white scale-100' : 'text-violet-500 font-bold scale-110'} tracking-widest italic self-start ease-in-out md:hover:scale-110`} href={`#${name.toLowerCase()}`}>- {name}</a>)
  }

  return (
    <div className="tracking-widest italic my-20 flex flex-col items-start transition">
      <ContentsButton active={active} name="ABOUT" number={0}/>
      <ContentsButton active={active} name="PROJECTS" number={2}/>
      <ContentsButton active={active} name="CERTS" number={1}/>
    </div>
  )
}

import mail from "../assets/mail.svg"
import github from "../assets/github-mark-white.svg"
import linkedin from "../assets/LI-In-Bug.png"
import circle from "../assets/circle.svg"
import blog from "../assets/blog-icon.svg"

function Footer() {
  return (
    <div className="mt-5">
      <p className="text-sm tracking-widest text-slate-500 text-center mt-5">Created by me! Design inspired by <a href="https://brittanychiang.com/" className="text-slate-300">Brittany Chiang</a>. You can have a look on GitHub <a href="https://github.com/Anya-gh/portfolio" className="text-slate-300">here</a>.</p>
    </div>
  )
}

function Icons() {
  return (
    <div className="flex flex-row items-center justify-between mt-5">
      <a href="mailto:anya2718@icloud.com" target="_blank"><img src={mail} className="h-6 grayscale brightness-75 md:hover:scale-110 transition duration-200" alt="mail"/></a>
      <img src={circle} className='h-1 mx-5 opacity-5' alt='circle' />
      <a href="https://github.com/Anya-gh/" target="_blank"><img src={github} className="h-6 grayscale brightness-75 md:hover:scale-110 transition duration-200" alt="github" /></a>
      <img src={circle} className='h-1 mx-5 opacity-50' alt='circle' />
      <a href="https://www.linkedin.com/in/aniket-singh-dev/" target="_blank"><img src={linkedin} className="h-6 grayscale brightness-150 md:hover:scale-110 transition duration-200" alt="linkedin" /></a>
      <img src={circle} className='h-1 mx-5 opacity-50' alt='circle' />
      <a href="https://anya-gh.github.io/blog/" target="_blank"><img src={blog} className="h-6 grayscale brightness-75 md:hover:scale-110 transition duration-200" alt="blog" /></a>
    </div>
  )
}

