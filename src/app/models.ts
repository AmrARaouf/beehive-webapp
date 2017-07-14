export interface Package {
  _id?: string;
  name: string;
  max_storage: number;
}

export interface Project {
  _id?: string;
  name: string;
  description: string;
  label_names: string[];
  package: string;
  images: string[];
}

export interface BusinessUser {
  full_name: string;
  organization: string;
  email: string;
  phone: string;
  password: string;
  message: string;
}

export interface BusinessUserCredentials {
  email: string;
  password: string;
}

export interface WorkerUser {
  username: string;
  email: string;
  password: string;
  points: Number;
  rank: Rank;
  credit: Number;
  isReviewer: Boolean;
  totalAnnotationsCount: Number;
  currentPayableCredit: Number;
  isActivated: Boolean;
}

export interface WorkerUserCredentials {
  username: string;
  password: string;
}

export interface Rank {
  title: string;
  maxPoints: number;
  icon: string;
}

export interface Image {
  path: string;
  _id: string;
}

