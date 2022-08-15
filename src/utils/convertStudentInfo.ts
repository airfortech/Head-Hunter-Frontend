import { ConvertStudentInfo, TraineeProfileEntity } from "../types";

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
    ? "https://github.com/" + info.githubUsername + ".png"
    : null;
  data.portfolioUrls = info.portfolioUrls
    ? JSON.parse(info.portfolioUrls)
    : null;
  data.projectUrls = info.projectUrls ? JSON.parse(info.projectUrls) : null;
  data.bio = info.bio || "Użytkownik jeszcze nic nie napisał o sobie.";
  data.expectedTypeWork = info.expectedTypeWork || "Brak";
  data.targetWorkCity = info.targetWorkCity || "Brak";
  data.expectedContractType = info.expectedContractType
    ? JSON.parse(info.expectedContractType).join(", ")
    : "Brak";
  data.expectedSalary = info.expectedSalary || "Brak";
  data.canTakeApprenticeship = info.canTakeApprenticeship === 1 ? "Tak" : "Nie";
  data.monthsOfCommercialExp =
    info.monthsOfCommercialExp?.toString() || "Nie podano";
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
