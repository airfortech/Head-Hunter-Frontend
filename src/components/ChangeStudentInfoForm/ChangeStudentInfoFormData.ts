import * as yup from "yup";
import { TraineeProfileRequest } from "../../types";

interface CheckItemType {
  value: string;
  name: string;
}

export const expectedTypeWork: CheckItemType[] = [
  { value: "onsite", name: "Praca w biurze" },
  { value: "remote", name: "Praca zdalna" },
  { value: "readyToMove", name: "Gotowy na relokacje" },
  { value: "hybrid", name: "Hybrydowa" },
];

export const expectedContractType: CheckItemType[] = [
  { value: "uop", name: "Umowa o pracę" },
  { value: "b2b", name: "B2B" },
  { value: "uzuod", name: "Umowa zlecenie / o dzieło" },
];

export const canTakeApprenticeship: CheckItemType[] = [
  { value: "true", name: "Tak" },
  { value: "false", name: "Nie" },
];

export interface InfoValues {
  firstName: string;
  lastName: string;
  githubUsername?: string;
  tel: string;
  bio: string;
  education: string;
  courses: string;
  targetWorkCity: string;
  workExperience: string;
  portfolioUrl1: string;
  portfolioUrl2: string;
  portfolioUrl3: string;
  portfolioUrl4: string;
  portfolioUrl5: string;
  projectUrl1: string;
  projectUrl2: string;
  projectUrl3: string;
  projectUrl4: string;
  projectUrl5: string;
  expectedTypeWork: string;
  expectedContractType: string[];
  canTakeApprenticeship: "true" | "false";
  monthsOfCommercialExp: string;
  expectedSalary: string;
}

export const initialInfoValues: TraineeProfileRequest = {
  firstName: "",
  lastName: "",
  githubUsername: "",
  tel: "",
  bio: "",
  education: "",
  courses: "",
  targetWorkCity: "",
  workExperience: "",
  portfolioUrl1: "",
  portfolioUrl2: "",
  portfolioUrl3: "",
  portfolioUrl4: "",
  portfolioUrl5: "",
  projectUrl1: "",
  projectUrl2: "",
  projectUrl3: "",
  projectUrl4: "",
  projectUrl5: "",
  expectedTypeWork: "",
  expectedContractType: [],
  canTakeApprenticeship: "false",
  monthsOfCommercialExp: "",
  expectedSalary: "",
};

export const ValidationSchema = yup.object().shape({
  firstName: yup.string().required("Imię jest wymagane!"),
  lastName: yup.string().required("Nazwisko jest wymagane!"),
  githubUsername: yup.string().required("To pole jest wymagane!"),
  monthsOfCommercialExp: yup
    .number()
    .min(0, "Liczba musi być dodatnia!")
    .max(50, "Seniorzy pod innym adresem!")
    .integer("Liczba musi być całkowita!")
    .typeError("Wprowadź liczbę!"),
  expectedSalary: yup
    .number()
    .min(0, "Zarobki muszą być dodatnie!")
    .integer("Liczba musi być całkowita!")
    .typeError("Wprowadź liczbę!"),
  portfolioUrl1: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  portfolioUrl2: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  portfolioUrl3: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  portfolioUrl4: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  portfolioUrl5: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  projectUrl1: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    )
    .required("Przynajmniej jeden adres do projektu jest wymagany!"),
  projectUrl2: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  projectUrl3: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  projectUrl4: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
  projectUrl5: yup
    .string()
    .url(
      "Wprowadź adres rozpoczynający się od http:// lub https://, np. http://joedeveloper.com"
    ),
});

export const printValues = (values: TraineeProfileRequest) => {
  const {
    firstName,
    lastName,
    githubUsername,
    tel,
    bio,
    education,
    courses,
    targetWorkCity,
    workExperience,
    portfolioUrl1,
    portfolioUrl2,
    portfolioUrl3,
    portfolioUrl4,
    portfolioUrl5,
    projectUrl1,
    projectUrl2,
    projectUrl3,
    projectUrl4,
    projectUrl5,
    expectedTypeWork,
    expectedContractType,
    canTakeApprenticeship,
    monthsOfCommercialExp,
    expectedSalary,
  } = values;

  return `
    firstName: ${firstName}
    lastName: ${lastName}
    githubUsername: ${githubUsername}
    tel: ${tel}
    bio: ${bio}
    education: ${education}
    courses: ${courses}
    targetWorkCity: ${targetWorkCity}
    workExperience: ${workExperience}
    portfolioUrl1: ${portfolioUrl1}
    portfolioUrl2: ${portfolioUrl2}
    portfolioUrl3: ${portfolioUrl3}
    portfolioUrl4: ${portfolioUrl4}
    portfolioUrl5: ${portfolioUrl5}
    projectUrl1: ${projectUrl1}
    projectUrl2: ${projectUrl2}
    projectUrl3: ${projectUrl3}
    projectUrl4: ${projectUrl4}
    projectUrl5: ${projectUrl5}
    expectedTypeWork: ${expectedTypeWork}
    expectedContractType: ${expectedContractType.join(", ")}
    canTakeApprenticeship: ${canTakeApprenticeship}
    expectedSalaryFrom: ${expectedSalary}
    monthsOfCommercialExp: ${monthsOfCommercialExp}
  `;
};
