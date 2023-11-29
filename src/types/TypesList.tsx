import { ReactNode } from "react"

export enum navbarTypes {
   About = "About",
   Skills = "Skills",
   Projects = "Projects",
   Contact = "Contact"
}

export enum skillsTypes {
  FrontEnd = "Front-End",
  BackEnd = "Back-End",
  Tools = "Tools",
  Others = "Others",
}

export interface skillsListType {
  id: number,
  category: string,
  listSkills: string[]
}

export interface categorySkillListType {
  filter: (category: string) => void,
  categoryList: string[]
}

export interface skillsListTypeProps {
  skillsList: skillsListType[]
}

export interface skillListData {
  data: string[]
}

export interface useTitleTypes {
  id?: string,
  heading: string
}
export interface useButtonTypes {
  to?: any
  text?: any,
  onClick?: any,
  key?: number,
  target?: string,
  rel?:string
}

export interface socialMediaTypes {
  id: number,
  link: string,
  name: string,
  icon: ReactNode
}

export interface projectTypes {
  id: number,
  link1: string,
  link2: string,
  icon1: string,
  icon2: string,
  img: string,
  alt: string,
  title: string,
  desc: string,
  teckStack: string
}