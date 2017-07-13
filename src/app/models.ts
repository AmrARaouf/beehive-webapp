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
  package: Package;
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
  firstName: string;
  lastName: string;
  Username: string;
  email: string;
  phone: string;
  password: string;
}

export interface WorkerUserCredentials {
  Username: string;
  password: string;
}