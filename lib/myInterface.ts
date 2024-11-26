import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { StaticImageData } from "next/image"

export interface IIcon {
  name: string,
  icon: IconDefinition
  url: string
}

export interface IProject {
  title: string,
  media: StaticImageData,
  urls: IIcon[],
  projectDescription: string[],
  tech: string[]
}
