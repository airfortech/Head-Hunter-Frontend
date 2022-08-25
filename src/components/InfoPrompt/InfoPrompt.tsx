import React, { MouseEventHandler, useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { AddInterviewResponseMessage, JsonResponseStatus } from "../../types";
import { fetchAddInterview } from "../../utils/fetchAddInterview";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Spinner } from "../Spinner/Spinner";
import classes from "./InfoPrompt.module.css";

interface Props {
  title: string;
  info: string;
  id: string;
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

export const InfoPrompt = ({ title, info, id, closeModal }: Props) => {
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const { refreshList } = useSearch();

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

  useEffect(() => {
    (async () => addInterview(id))();
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
            refreshList();
            closeModal(e);
          }}
        >
          OK
        </PrimaryButton>
      </div>
    </div>
  );
};
