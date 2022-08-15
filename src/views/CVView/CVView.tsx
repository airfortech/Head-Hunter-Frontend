import {
  ConvertStudentInfo,
  GetTraineeProfileRequest,
  GetTraineeProfileResponse,
  GetTraineeProfileResponseMessage,
  TraineeProfileEntity,
  UserRole,
} from "../../types";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Back } from "../../components/Back/Back";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import { config } from "../../config/config";
import classes from "./CVView.module.css";
import { convertStudentInfo } from "../../utils/convertStudentInfo";

const fetchGetTraineeProfile = async ({
  id,
}: GetTraineeProfileRequest): Promise<GetTraineeProfileResponse> => {
  const response = await fetch(config.apiUrl + "trainees/" + id, {
    credentials: "include",
  });
  return response.json();
};

export const CVView = () => {
  const { auth } = useAuth();
  const [traineeInfo, setTraineeInfo] = useState<ConvertStudentInfo>(
    convertStudentInfo({} as TraineeProfileEntity)
  );

  useEffect(() => {
    (async () => {
      try {
        const { data, message } = await fetchGetTraineeProfile({ id: "u4" });
        console.log(message, data);
        if (message === GetTraineeProfileResponseMessage.success)
          setTraineeInfo(convertStudentInfo(data.traineeProfile));
        else console.log("Something went wrong");
      } catch (e) {
        console.log("error");
      }
    })();
  }, []);

  return (
    <div className={classes.CVView}>
      {auth.role !== UserRole.trainee && <Back />}
      <div className={classes.row}>
        <PersonalDetails traineeInfo={traineeInfo} />
        <TechDetails traineeInfo={traineeInfo} />
      </div>
    </div>
  );
};
