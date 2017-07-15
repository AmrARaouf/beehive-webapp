export interface Package {
  _id?: string;
  name: string;
  maxStorage: number;
}

export interface Project {
  _id?: string;
  name: string;
  description: string;
  images: string[];
  numberOfAnnotations: number;
  labelNames: string[];
  package: Package;
  imagesPath: string;
  tutorialPath: string;
}

export interface BusinessUser {
  _id?: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  password: string;
  message: string;
}

export interface BusinessUserCredentials {
  _id?: string;
  email: string;
  password: string;
}

export interface Label {
  _id?: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface WorkerUser {
  _id?: string;
  username: string;
  email: string;
  password: string;
  points: number;
  rank: Rank;
  credit: number;
  isReviewer: boolean;
  totalAnnotationsCount: number;
  currentPayableCredit: number;
  isActivated: boolean;
}

export interface WorkerUserCredentials {
  _id?: string;
  username: string;
  password: string;
}

export interface Rank {
  _id?: string;
  title: string;
  maxPoints: number;
  icon: string;
}

export interface Image {
  path: string;
  _id: string;
}
