import {
  ConvertStudentInfo,
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
import { PageLoader } from "../../components/PageLoader/PageLoader";
import { fetchGetStudentProfile } from "../../utils/fetchGetStudentProfile";
import { convertStudentInfo } from "../../utils/convertStudentInfo";
import classes from "./CVView.module.css";

export const CVView = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [traineeInfo, setTraineeInfo] = useState<ConvertStudentInfo>(
    convertStudentInfo({
      monthsOfCommercialExp: 0,
    } as TraineeProfileEntity)
  );
  const [refresh, setRefresh] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const { data, message } = await fetchGetStudentProfile({
          id: auth.role === UserRole.trainee ? auth.id : id,
        });
        if (message === GetTraineeProfileResponseMessage.success) {
          setTraineeInfo(convertStudentInfo(data.traineeProfile));
          setIsLoading(false);
        } else if (message === GetTraineeProfileResponseMessage.notFound)
          navigate("/notFound", {
            state: {
              message: "Nie ma takiego kursanta",
              back: -2,
            },
          });
        else console.log("Something went wrong");
      } catch (e) {
        console.log("error");
      }
    })();
  }, [refresh]);

  return (
    <div className={classes.CVView}>
      {auth.role !== UserRole.trainee && <Back />}
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className={classes.row}>
          <PersonalDetails
            traineeInfo={traineeInfo}
            id={id}
            setRefresh={setRefresh}
          />
          <TechDetails traineeInfo={{ ...traineeInfo }} />
        </div>
      )}
    </div>
  );
};
