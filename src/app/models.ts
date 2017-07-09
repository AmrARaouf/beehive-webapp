export interface Project {
  name: string;
  description: string;
  label_names: string;
  package: string;
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