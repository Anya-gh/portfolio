export type ProjectsType = {
  name: string,
  tags: string[],
  date: string,
  description: string,
  blog?: string,
  theme?: string,
  github?: string
}
export const ProjectsList: ProjectsType[] = [
  {
    name: "Fighting Game Analysis Engine",
    tags: ["Machine learning", "Python"],
    date: "2021-2022",
    description: "Analysis engines are tools to get better at games; I made one for a fighting game, primarily with Python, using machine learning.",
    blog: "https://anya-gh.github.io/blog/fighting-game-analysis-engine",
    theme: "ggst",
  },
  {
    name: "Music Humanisation",
    tags: ["Machine learning", "Python", "PyTorch"],
    date: "2022-2023",
    description: "Computers are capable of playing back music, but it often sounds robotic and boring. With myself as project manager, my peers and I created a system to play music back the way a human would, with human dynamics and tempo.",
    blog: "https://anya-gh.github.io/blog/music-humanisation",
    theme: "piano",
    github: "https://github.com/Anya-gh/CS407-Music-Humanisation"
  },
  {
    name: "Portfolio",
    date: "2024",
    tags: ["Web development", "React", "TypeScript", "Tailwind"],
    description: "The very website you're on now! Made with React, TypeScript and Tailwind. I also used Figma for wireframing and making the icons.",
    blog: "https://anya-gh.github.io/blog/portfolio",
    github: "https://github.com/Anya-gh/portfolio"
  },
  {
    name: "Blog",
    date: "2023",
    tags: ["Web development", "React", "TypeScript", "Tailwind"],
    description: "A blog for going deeper into the work I've done. Made with React, TypeScript and Tailwind. I also used Figma for wireframing and making the icons. Click the blog icon from a project to visit its blog post, or click 'BLOG' from the navigation bar.",
    blog: "https://anya-gh.github.io/blog/making-a-blog/part-1-(planning)",
    github: "https://github.com/Anya-gh/blog"
  }
]

export type TagTypes = {
  name: string,
  color: string,
}

export const TagsList: TagTypes[] = [{name: "Machine learning", color: "bg-cyan-500"}, {name: "Web development", color: "bg-emerald-500"}, {name: "Python", color: "bg-pink-500"}, {name: "PyTorch", color: "bg-pink-500"}, {name: "TypeScript", color: "bg-indigo-500"}, {name: "React", color: "bg-indigo-500"}, {name: "Tailwind", color: "bg-indigo-500"}]