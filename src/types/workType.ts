import { StaticImageData } from "next/image";

export type WorksType = {
  title: string,
  image: StaticImageData,
  url: string,
  description: string,
  type: string
  techs: string[],
};
