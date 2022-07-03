export interface IHero {
  name: string;
  title: string;
  description: string;
}

export interface IProject {
  name: string;
  stack: string;
  description: string;
  images: { url: string }[];
}

export interface IAbout {
  aboutMe: string;
  headshot: { url: string };
}

export interface IContact {
  blurb: string;
  email: string;
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

export interface IQuery {
  hero: IHero;
  allProjects: IProject[];
  about: IAbout;
  contact: IContact;
}
