import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { StaticImageData } from "next/image"

export interface IIcon {
  name: string,
  icon: IconDefinition
  url: string
}

export interface IProject {
  title: string,
  status: string,
  media: StaticImageData,
  urls: IIcon[],
  projectDescription: string[],
  tech: string[]
}

export interface IBio {
  type: string;
  text: string;
  subText?: string;
  icon?: IIcon;
}
