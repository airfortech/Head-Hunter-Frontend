import {
  ConvertStudentInfo,
  TraineeExpectedTypeWork,
  TraineeProfileEntity,
} from "../types";

export const convertStudentInfo = (
  info: TraineeProfileEntity
): ConvertStudentInfo => {
  const data: any = {};
  data.tel = info.tel || "Nie podano";
  data.email = info.email || "Nie podano";
  data.firstName = info.firstName || "John";
  data.lastName = info.lastName || "Doe";
  data.githubUsername = info.githubUsername || "Nie podano";
  data.githubSrc = info.githubUsername
    ? "https://github.com/" + info.githubUsername
    : "https://github.com/";
  data.githubAvatarSrc = info.githubUsername
    ? "https://github.com/" + info.githubUsername + ".png"
    : null;
  data.portfolioUrls = info.portfolioUrls
    ? JSON.parse(info.portfolioUrls)
    : null;
  data.projectUrls = info.projectUrls ? JSON.parse(info.projectUrls) : null;
  data.bio = info.bio || "Użytkownik jeszcze nic nie napisał o sobie.";
  data.courseCompletion = info.courseCompletion;
  data.courseEngagment = info.courseEngagment;
  data.projectDegree = info.projectDegree;
  data.teamProjectDegree = info.teamProjectDegree;
  data.expectedTypeWork = "Brak";
  if (info?.expectedTypeWork === "hybrid")
    data.expectedTypeWork = TraineeExpectedTypeWork.hybrid;
  if (info?.expectedTypeWork === "remote")
    data.expectedTypeWork = TraineeExpectedTypeWork.remote;
  if (info?.expectedTypeWork === "readyToMove")
    data.expectedTypeWork = TraineeExpectedTypeWork.readyToMove;
  if (info?.expectedTypeWork === "onsite")
    data.expectedTypeWork = TraineeExpectedTypeWork.onsite;
  data.targetWorkCity = info.targetWorkCity || "Brak";
  data.expectedContractType = info.expectedContractType
    ? JSON.parse(info.expectedContractType).join(", ")
    : "Brak";
  data.expectedSalary = info.expectedSalary || "Brak";
  data.canTakeApprenticeship = info.canTakeApprenticeship === 1 ? "Tak" : "Nie";
  data.monthsOfCommercialExp =
    info.monthsOfCommercialExp?.toString() + " miesięcy" || "Nie podano";
  data.education =
    info.education ||
    "Użytkownik jeszcze nic nie napisał na temat swojej edukacji.";
  data.workExperience =
    info.workExperience ||
    "Użytkownik jeszcze nic nie napisał na temat swojego doświadczenia zawodowego.";
  data.courses =
    info.courses ||
    "Użytkownik jeszcze nic nie napisał na temat odbytych kursów.";
  return data;
};
