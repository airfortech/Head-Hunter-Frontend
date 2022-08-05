interface CheckItemType {
  value: string;
  name: string;
}

export const degrees: CheckItemType[] = [
  { value: "5", name: "5" },
  { value: "4", name: "4" },
  { value: "3", name: "3" },
  { value: "2", name: "2" },
  { value: "1", name: "1" },
];

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

export interface InitialValues {
  courseCompletion: string;
  courseEngagment: string;
  projectDegree: string;
  teamProjectDegree: string;
  expectedTypeWork: string[];
  expectedContractType: string[];
  canTakeApprenticeship: "true" | "false";
  monthsOfCommercialExp: string;
  expectedSalaryFrom: string;
  expectedSalaryTo: string;
}

export const initialValues: InitialValues = {
  courseCompletion: "1",
  courseEngagment: "1",
  projectDegree: "1",
  teamProjectDegree: "1",
  expectedTypeWork: [],
  expectedContractType: [],
  canTakeApprenticeship: "false",
  monthsOfCommercialExp: "",
  expectedSalaryFrom: "",
  expectedSalaryTo: "",
};
