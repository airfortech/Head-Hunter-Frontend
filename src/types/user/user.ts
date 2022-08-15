export enum UserRole {
  admin = "admin",
  hr = "hr",
  trainee = "trainee",
}

export enum TraineeExpectedTypeWork {
  onsite = "W biurze",
  remote = "Zdalnie",
  readyToMove = "Gotowy na relokację",
  hybrid = "Hybrydowo",
}

enum TraineeExpectedContractType {
  uop = "uop",
  b2b = "b2b",
  uzuod = "uz/uod",
}

enum TraineeStatus {
  available = "available",
  interviewed = "interviewed",
  hired = "hired",
}

export interface TraineeProfileEntity {
  id?: string;
  tel?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  githubUsername?: string;
  portfolioUrls?: string;
  projectUrls: string;
  bio?: string;
  courseCompletion?: number;
  courseEngagment?: number;
  projectDegree?: number;
  teamProjectDegree?: number;
  expectedTypeWork?: string | null;
  targetWorkCity?: string;
  expectedContractType?: TraineeExpectedContractType | null;
  expectedSalary?: string;
  canTakeApprenticeship?: number;
  monthsOfCommercialExp?: number;
  education?: string;
  workExperience?: string;
  courses?: string;
  status?: TraineeStatus;
  registrationUrl?: string;
  userId?: string | null;
  createdAt?: Date;
}

export interface ConvertStudentInfo {
  tel: string;
  email: string;
  firstName: string;
  lastName: string;
  githubUsername: string;
  githubSrc: string;
  githubAvatarSrc: string | null;
  portfolioUrls: string[] | null;
  projectUrls: string[] | null;
  bio: string;
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: string;
  monthsOfCommercialExp: string;
  education: string;
  workExperience: string;
  courses: string;
}
