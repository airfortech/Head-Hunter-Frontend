import {
  ConvertStudentInfo,
  GetTraineeProfileRequest,
  GetTraineeProfileResponse,
  GetTraineeProfileResponseMessage,
  TraineeProfileEntity,
  UserRole,
} from "../../types";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Back } from "../../components/Back/Back";
import { PersonalDetails } from "../../components/PersonalDetails/PersonalDetails";
import { TechDetails } from "../../components/TechDetails/TechDetails";
import { config } from "../../config/config";
import { convertStudentInfo } from "../../utils/convertStudentInfo";
import classes from "./CVView.module.css";

const fetchGetTraineeProfile = async ({
  id,
}: GetTraineeProfileRequest): Promise<GetTraineeProfileResponse> => {
  const response = await fetch(config.apiUrl + "trainees/" + id, {
    credentials: "include",
  });
  return response.json();
};

export const CVView = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { id } = useParams();
  const [traineeInfo, setTraineeInfo] = useState<ConvertStudentInfo>(
    convertStudentInfo({
      monthsOfCommercialExp: 0,
    } as TraineeProfileEntity)
  );

  useEffect(() => {
    (async () => {
      try {
        const { data, message } = await fetchGetTraineeProfile({
          id: auth.role === UserRole.trainee ? auth.id : id,
        });
        console.log(message, data);
        if (message === GetTraineeProfileResponseMessage.success)
          setTraineeInfo(convertStudentInfo(data.traineeProfile));
        else if (message === GetTraineeProfileResponseMessage.notFound)
          navigate("/notFound", {
            state: "Nie ma takiego kursanta",
          });
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
        <TechDetails traineeInfo={{ ...traineeInfo }} />
      </div>
    </div>
  );
};
