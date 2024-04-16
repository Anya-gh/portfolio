type AboutProps = {
  observerRefs: React.MutableRefObject<(HTMLHeadingElement | null)[]>
}

export default function About( { observerRefs } : AboutProps) {
  return (
    <div className="mb-14">
      <h1 ref={(el) => { observerRefs.current[0] = el}} id="about" className="text-lg tracking-widest text-violet-500 mb-2 pt-10 font-bold italic">ABOUT</h1>
      <div className="font-light text-gray-400 text-sm">
        <p className="mb-5">Hi! I'll be starting as a graduate software engineer at THG in July 2024. Previously, I was studying computer science at the University of Warwick, and graduated with a Master's in July 2023.</p>
        <p className="mb-5">I've spent most of my time working on coding algorithms, as most of my studies at university were focused on computational complexity theory. Recently I've also worked on a few machine learning projects, and since graduating have been doing a lot of web development.</p>
        <p>Outside of work, I mostly enjoy art, running and esports. If you'd like to talk about anything at all, <a href="mailto:anya2718@icloud.com" className="text-slate-300 hover:text-violet-500 transition duration-200 font-bold">get in touch!</a></p>
      </div>
    </div>
  )
}