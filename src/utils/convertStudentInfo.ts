import {
  ConvertStudentInfo,
  TraineeExpectedTypeWork,
  TraineeProfileEntity,
  TraineeProfileRequest,
  TraineeShortProfileEntity,
} from "../types";

export const convertStudentInfo = (
  info: TraineeProfileEntity
): ConvertStudentInfo => {
  const data: any = {};
  data.status = info.status;
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
  data.courseCompletion = info.courseCompletion || 1;
  data.courseEngagment = info.courseEngagment || 1;
  data.projectDegree = info.projectDegree || 1;
  data.teamProjectDegree = info.teamProjectDegree || 1;
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
    info.monthsOfCommercialExp !== undefined
      ? info.monthsOfCommercialExp.toString()
        ? info.monthsOfCommercialExp.toString() + " miesięcy"
        : "Nie podano"
      : "Nie podano";
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

export const convertStudentInfoForEditing = (
  info: TraineeProfileEntity
): TraineeProfileRequest => {
  const data: any = {};
  data.firstName = info.firstName || "";
  data.lastName = info.lastName || "";
  data.githubUsername = info.githubUsername || "";
  data.tel = info.tel || "";
  data.bio = info.bio || "";
  data.education = info.education || "";
  data.courses = info.courses || "";
  data.targetWorkCity = info.targetWorkCity || "";
  data.workExperience = info.workExperience || "";
  const projectUrls = info.projectUrls ? JSON.parse(info.projectUrls) : [];
  data.projectUrl1 = projectUrls[0] || "";
  data.projectUrl2 = projectUrls[1] || "";
  data.projectUrl3 = projectUrls[2] || "";
  data.projectUrl4 = projectUrls[3] || "";
  data.projectUrl5 = projectUrls[4] || "";
  const portfolioUrls = info.portfolioUrls
    ? JSON.parse(info.portfolioUrls)
    : [];
  data.portfolioUrl1 = portfolioUrls[0] || "";
  data.portfolioUrl2 = portfolioUrls[1] || "";
  data.portfolioUrl3 = portfolioUrls[2] || "";
  data.portfolioUrl4 = portfolioUrls[3] || "";
  data.portfolioUrl5 = portfolioUrls[4] || "";
  data.expectedTypeWork = info.expectedTypeWork || "";
  data.expectedContractType = info.expectedContractType
    ? JSON.parse(info.expectedContractType)
    : [];
  data.expectedSalary = info.expectedSalary || "";
  data.canTakeApprenticeship =
    info.canTakeApprenticeship === 1 ? "true" : "false";
  data.monthsOfCommercialExp =
    info.monthsOfCommercialExp !== undefined
      ? info.monthsOfCommercialExp.toString()
        ? info.monthsOfCommercialExp.toString()
        : ""
      : "";
  return data;
};

export const convertShortStudentInfo = (
  info: TraineeShortProfileEntity
): ConvertStudentInfo => {
  const data: any = {};
  data.id = info.id;
  data.email = info.email || "Nie podano";
  data.firstName = info.firstName || "John";
  data.lastName = info.lastName || "Doe";
  data.githubAvatarSrc = info.githubUsername
    ? "https://github.com/" + info.githubUsername + ".png"
    : null;
  data.courseCompletion = info.courseCompletion || 1;
  data.courseEngagment = info.courseEngagment || 1;
  data.projectDegree = info.projectDegree || 1;
  data.teamProjectDegree = info.teamProjectDegree || 1;
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
    info.monthsOfCommercialExp !== undefined
      ? info.monthsOfCommercialExp.toString()
        ? info.monthsOfCommercialExp.toString() + " miesięcy"
        : "Nie podano"
      : "Nie podano";
  return data;
};
