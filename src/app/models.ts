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

export interface Rank {
  title: string;
  max_points: number;
  icon: string;
}

export interface WorkerUser {
  username: string;
  email: string;
  password: string;
  points: Number;
  rank: Rank;
  credit: Number;
  is_reviewer: Boolean;
  total_annotations_count: Number;
  current_payable_credit: Number;
  is_activated: Boolean;
}

// TODO: I think for login, we can use this interface for both type of users,
export interface UserCredentials {
  email: string;
  password: string;
}