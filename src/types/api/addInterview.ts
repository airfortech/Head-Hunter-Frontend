import { JsonResponseStatus } from "..";

export enum AddInterviewResponseMessage {
  success = "Trainee's profile successfully fetched.",
  isHired = "This user is already hired.",
  hrMaxReservedStudents = "Hr have max reserved of students to interview",
}

export interface AddInterviewResponse {
  code: number;
  status: JsonResponseStatus;
  message: string;
  data: {
    id: string;
    date: Date;
  };
}
