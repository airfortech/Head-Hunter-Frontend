import * as yup from "yup";

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
  githubUsername?: string;
  tel: string;
  bio: string;
  education: string;
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
  expectedTypeWork: string[];
  expectedContractType: string[];
  canTakeApprenticeship: "true" | "false";
  monthsOfCommercialExp: string;
  expectedSalaryFrom: string;
  expectedSalaryTo: string;
}

export const initialInfoValues: InfoValues = {
  githubUsername: "",
  tel: "",
  bio: "",
  education: "",
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
  expectedTypeWork: [],
  expectedContractType: [],
  canTakeApprenticeship: "false",
  monthsOfCommercialExp: "",
  expectedSalaryFrom: "",
  expectedSalaryTo: "",
};

export const ValidationSchema = yup.object().shape({
  monthsOfCommercialExp: yup
    .number()
    .min(0, "Liczba musi być dodatnia!")
    .max(50, "Seniorzy pod innym adresem!")
    .integer("Liczba musi być całkowita!")
    .typeError("Wprowadź liczbę!"),
  expectedSalaryFrom: yup
    .number()
    .min(0, "Zarobki muszą być dodatnie!")
    .integer("Liczba musi być całkowita!")
    .typeError("Wprowadź liczbę!"),
  expectedSalaryTo: yup
    .number()
    .min(0, "Zarobki muszą być dodatnie!")
    .integer("Liczba musi być całkowita!")
    .typeError("Wprowadź liczbę!"),
});

export const printValues = (values: InfoValues) => {
  const {
    githubUsername,
    tel,
    bio,
    education,
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
    expectedSalaryFrom,
    expectedSalaryTo,
  } = values;

  return `
    githubUsername: ${githubUsername}
    tel: ${tel}
    bio: ${bio}
    education: ${education}
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
    expectedTypeWork: ${expectedTypeWork.join(", ")}
    expectedContractType: ${expectedContractType.join(", ")}
    canTakeApprenticeship: ${canTakeApprenticeship}
    expectedSalaryFrom: ${expectedSalaryFrom}
    expectedSalaryTo: ${expectedSalaryTo}
    monthsOfCommercialExp: ${monthsOfCommercialExp}
  `;
};
