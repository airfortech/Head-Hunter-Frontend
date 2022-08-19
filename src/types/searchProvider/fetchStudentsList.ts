export interface FetchStudentsList {
  search?: string;
  page?: string;
  limit?: string;
  courseCompletion?: string;
  courseEngagment?: string;
  projectDegree?: string;
  teamProjectDegree?: string;
  expectedTypeWork?: string;
  expectedContractType?: string[];
  canTakeApprenticeship?: string;
  monthsOfCommercialExp?: string;
  expectedSalaryFrom?: string;
  expectedSalaryTo?: string;
  sortType?: string;
  sortByType?: string;
}

export interface FetchStudentsListRequest {
  search?: string;
  page?: string;
  limit?: string;
  courseCompletion?: string;
  courseEngagment?: string;
  projectDegree?: string;
  teamProjectDegree?: string;
  expectedTypeWork?: string;
  expectedContractType?: string;
  canTakeApprenticeship?: string;
  monthsOfCommercialExp?: string;
  expectedSalaryFrom?: string;
  expectedSalaryTo?: string;
  sortType?: string;
  sortByType?: string;
}
