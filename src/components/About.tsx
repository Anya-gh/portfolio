type AboutProps = {
  observerRefs: React.MutableRefObject<(HTMLHeadingElement | null)[]>
}

export default function About( { observerRefs } : AboutProps) {
  return (
    <div className="mb-14">
      <h1 ref={(el) => { observerRefs.current[0] = el}} id="about" className="text-lg tracking-widest text-violet-500 mb-2 pt-10 font-bold italic">ABOUT</h1>
      <div className="font-light text-gray-400 text-sm">
        <p className="mb-5">Hello! I've been working as a Software Engineer at <a href="https://www.symfos.com/" className="text-slate-300 hover:text-violet-500 transition duration-200 font-bold">Symfos</a> since July 2024. I was studying computer science at the University of Warwick, and graduated with a Master's in July 2023. </p>
        <p className="mb-5">At university I spent most of my time working on coding algorithms, as most of my studies were focused on computational complexity theory. Since graduating and starting work at Symfos, I've been up to a little bit of everything in the full-stack of web development. We're a small team, so I find myself often interfacing with clients, as well.</p>
        <p>If you'd like to talk, <a href="mailto:anya2718@icloud.com" className="text-slate-300 hover:text-violet-500 transition duration-200 font-bold">get in touch!</a></p>
      </div>
    </div>
  )
}