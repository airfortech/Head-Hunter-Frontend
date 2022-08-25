import React, { MouseEventHandler, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useSearch } from "../../hooks/useSearch";
import { AddInterviewResponseMessage, JsonResponseStatus } from "../../types";
import { fetchAddInterview } from "../../utils/fetchAddInterview";
import { fetchDeleteInterview } from "../../utils/fetchAddInterview copy";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Spinner } from "../Spinner/Spinner";
import classes from "./InfoPrompt.module.css";

interface Props {
  title: string;
  purpose?: "addInterview" | "deleteInterview";
  info: string;
  id: string | undefined;
  closeModal: MouseEventHandler;
}

interface ApiInfo {
  type: "success" | "error";
  message: string;
}

const initialApiInfo: ApiInfo = {
  type: "error",
  message: "",
};

export const InfoPrompt = ({ title, purpose, info, id, closeModal }: Props) => {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const { refreshList } = useSearch();
  const { auth } = useAuth();

  const addInterview = async (id: string) => {
    console.log(id);

    try {
      setIsSpinnerLoading(true);
      const { status, message } = await fetchAddInterview(id);
      if (status === JsonResponseStatus.success) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "success",
          message: "Dodałeś użytkownika do interview!",
        });
      }
      if (message === AddInterviewResponseMessage.isHired) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "error",
          message: "Użytkownik został już zatrudniony!",
        });
      }
      if (message === AddInterviewResponseMessage.hrMaxReservedStudents) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "error",
          message: "Osiągnąłeś limit interview!",
        });
      }
    } catch (e) {
      setApiInfo({
        type: "error",
        message: "Spróbuj później!",
      });
      setIsSpinnerLoading(false);
    }
  };

  const deleteInterview = async (hrId: string, traineeId: string) => {
    console.log(hrId);
    console.log(traineeId);

    try {
      setIsSpinnerLoading(true);
      const { status } = await fetchDeleteInterview({
        hrId,
        traineeId,
      });
      if (status === JsonResponseStatus.success) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "success",
          message: "Usunąłeś użytkownika z interview!",
        });
      }
    } catch (e) {
      setApiInfo({
        type: "error",
        message: "Spróbuj później!",
      });
      setIsSpinnerLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (purpose === "addInterview" && id) addInterview(id);
      if (purpose === "deleteInterview" && auth.id && id)
        deleteInterview(auth.id, id);
    })();
  }, []);

  return (
    <div className={classes.InfoPrompt}>
      <div className={classes.row}>
        <h2>{title}</h2>
      </div>
      <p className={classes.infoText}>{info}</p>
      <p
        className={`${classes.info} ${
          apiInfo.type === "success" && classes.success
        }`}
      >
        {apiInfo.message ? apiInfo.message : null}
      </p>
      <div className={classes.actions}>
        {isSpinnerLoading && <Spinner />}
        <PrimaryButton
          color="primary"
          onClick={(e) => {
            if (apiInfo.type === "success") refreshList();
            closeModal(e);
          }}
        >
          OK
        </PrimaryButton>
      </div>
    </div>
  );
};
