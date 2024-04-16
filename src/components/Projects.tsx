import { useState, Dispatch, SetStateAction, useEffect } from 'react'
import { ProjectsList, ProjectsType, TagsList, TagTypes } from '../data/ProjectsList'
import { Themes } from '../data/Themes'
import githubIcon from "../assets/github-mark-white.svg"
import blogIcon from "../assets/blog-icon.svg"

type ProjectsProps = {
  observerRefs: React.MutableRefObject<(HTMLHeadingElement | null)[]>
}

export default function Projects( { observerRefs } : ProjectsProps) {
  const [filteredTags, setFilteredTags] = useState<string[]>([])
  const [filteredProjects, setFilteredProjects] = useState<ProjectsType[]>([])

  useEffect(() => {
    const newFilteredProjects = filteredTags.length !== 0 ? ProjectsList.filter(project => filteredTags.every(tag => project.tags.includes(tag))) : ProjectsList
    setFilteredProjects(newFilteredProjects)
  }, [filteredTags])
  return (
    <div className="mb-10 w-full">
      <h1 ref={(el) => {observerRefs.current[2] = el}} id="projects" className="text-lg tracking-widest text-violet-500 mb-2 pt-10 font-bold italic">PROJECTS</h1>
      <Tags filteredTags={filteredTags} setFilteredTags={setFilteredTags} />
      <div className="flex flex-col">
      {filteredProjects.map((project) => {
        return (<Card name={project.name} tags={project.tags} description={project.description} blog={project.blog} theme={project.theme} github={project.github} key={project.name} date={project.date}/>)
      })}
      </div>
    </div>
  )
}

type ProjectTagType = {
  name: string,
  color: string,
  active: boolean,
  setFilteredTags: Dispatch<SetStateAction<string[]>>
}

type TagsType = {
  filteredTags: string[],
  setFilteredTags: Dispatch<SetStateAction<string[]>>
}

function Tags({filteredTags, setFilteredTags} : TagsType) {
  return (
    <div className="flex flex-row flex-wrap">
      {TagsList.map((tag) => {
        return (<Tag name={tag.name} color={tag.color} active={filteredTags.includes(tag.name)} setFilteredTags={setFilteredTags} key={tag.name}/>)
      })}
    </div>
  )
}

const Tag = ({name, color, active, setFilteredTags} : ProjectTagType) => {

  const onClickHandler = () => {
    setFilteredTags(currentTags => (
      currentTags.includes(name) ? currentTags.filter((tag) => (tag != name)) : [...currentTags, name]
    ))
  }

  return (
    <button onClick={onClickHandler} className={`${color} m-1 rounded-xl p-3 text-center font-bold tracking-wide text-xs md:hover:scale-105 ${active ? "brightness-110 text-white" : " text-black"} transition duration-200`}>
      {name}
    </button>
  )
}

const SmallTag = ({name, color} : TagTypes) => {
  return (
    <div className={`${color} m-1 rounded-xl p-3 text-center font-bold tracking-wide text-xs brightness-110 text-white whitespace-nowrap`}>
      {name}
    </div>
  )
}

function Card( {name, tags, description, blog, theme, github, date} : ProjectsType) {
  let bg = ""
  let credit:string|undefined = undefined
  const projectTags:TagTypes[] = TagsList.filter(tag => tags.includes(tag.name))
  if (theme && Themes[theme]) {
    bg = Themes[theme].style
    credit = Themes[theme].credit
  }
  else {
    bg = Themes['default'].style
    credit = Themes['default'].credit
  }
  return (
    <div className={`${bg} rounded-xl my-2 h-60 md:hover:brightness-125 transition duration-200`}>
      <div className="bg-black rounded-xl bg-opacity-60 p-4 h-full overflow-scroll">
        <div className="flex flex-row justify-between">
          <span>
            <h1 className="font-black max-w-48 text-lg">{name}</h1>
            <p className="text-xs text-gray-400 italic tracking-widest">{date}</p>
          </span>
          <span className="flex flex-row">
          {github !== undefined && <a href="https://github.com/Anya-gh/" target="_blank"><img src={githubIcon} className="h-6 mr-3" alt="github" /></a>}
          {blog !== undefined && <a href="https://anya-gh.github.io/blog/" target="_blank"><img src={blogIcon} className="h-6" alt="blog" /></a>}
          </span>
        </div>
        <div className="flex flex-row overflow-x-scroll">
          {projectTags.map((tag) => { return (<SmallTag name={tag.name} color={tag.color} key={tag.name}/>) })}
        </div>
        <p className="mb-3 text-sm">{description}</p>
        {credit !== undefined && <p className="text-gray-400 text-xs">{credit}</p>}
      </div>
    </div>
  )
}