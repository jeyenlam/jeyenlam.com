import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export interface IIcon {
  name: string,
  icon: IconDefinition
  url: string
}

export interface IProject {
  title: string,
  urls: IIcon[],
  projectDescription: string[],
  tech: string[]
}
