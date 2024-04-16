type CertsProps = {
  observerRefs: React.MutableRefObject<(HTMLHeadingElement | null)[]>
}

export default function Certs( { observerRefs } : CertsProps) {
  return (
    <div className="mb-10 w-full">
      <h1 ref={(el) => {observerRefs.current[1] = el}} id="certs" className="text-lg tracking-widest text-violet-500 mb-2 pt-10 font-bold italic">CERTS</h1>
      <span className="flex flex-row justify-between font-bold text-gray-400 text-sm">
        <p>University of Warwick</p>
        <p>2019-2023</p>
      </span>
      <span className="flex flex-row justify-between font-light text-gray-400 text-xs">
        <p>Computer Science</p>
        <p>MEng - 1st</p>
      </span>
      <p className="font-light text-gray-400 text-sm mt-5">At Warwick, I focused mainly on the mathematics side of Computer Science, studying algorithms and complexity theory, and programming, in a number of different languages. Working on a wide variety of assignments made me a much more confident software engineer, and helped me develop important soft skills like communication and time management. I frequently tutored students in younger years as well, helping them with modules I'd already completed.</p>
      <div className="mt-10">
        <span className="flex flex-row justify-between font-bold text-gray-400 text-sm">
          <p>Northampton School for Boys</p>
          <p>2017-2019</p>
        </span>
        <span className="flex flex-row justify-between font-light text-gray-400 text-xs">
          <p>Computer Science, Maths, Further Maths</p>
          <p>A-Levels - A*, A*, A*</p>
        </span>
        <p className="font-light text-gray-400 text-sm mt-5">Northampton School for Boys (NSB) is the Sixth Form at which I completed my A-Levels. I self-studied programming and computer hardware, so I got the most out of my maths classes; they gave me a solid foundation in problem solving, and learning some of the key fundamentals I would need for university. Whilst there I was also a formal tutor for the younger years for maths, and regularly assisted in classrooms.</p>
      </div>
    </div>
  )
}