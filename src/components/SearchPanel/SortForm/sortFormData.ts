interface CheckItemType {
  value: string;
  name: string;
}

export const sortTypes: CheckItemType[] = [
  { value: "ascending", name: "Rosnąco" },
  { value: "descending", name: "Malejąco" },
];

export const sortByTypes: CheckItemType[] = [
  { value: "courseCompletion", name: "Ocena przejścia kursu" },
  {
    value: "courseEngagment",
    name: "Ocena aktywności i zaangażowania na kursie",
  },
  { value: "projectDegree", name: "Ocena kodu w projekcie własnym" },
  { value: "teamProjectDegree", name: "Ocena pracy w zespole w Scrum" },
  { value: "expectedTypeWork", name: "Preferowane miejsce pracy" },
  { value: "targetWorkCity", name: "Miasto" },
  { value: "expectedContractType", name: "Oczekiwany typ kontraktu" },
  { value: "expectedSalary", name: "Oczekiwane wynagrodzenie" },
  {
    value: "canTakeApprenticeship",
    name: "Zgoda na odbycie bezpłatnych praktyk/stażu na początek",
  },
  {
    value: "monthsOfCommercialExp",
    name: "Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu",
  },
];
