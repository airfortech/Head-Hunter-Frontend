import React, { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useSearch } from "../../hooks/useSearch";
import { AddInterviewResponseMessage, JsonResponseStatus } from "../../types";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Spinner } from "../Spinner/Spinner";
import { fetchAddInterview } from "../../utils/fetchAddInterview";
import { fetchDeleteInterview } from "../../utils/fetchAddInterview copy";
import { fetchApproveHire } from "../../utils/fetchApproveHire";
import { fetchHire } from "../../utils/fetchHire";
import classes from "./InfoPrompt.module.css";

interface Props {
  title: string;
  purpose?: "addInterview" | "deleteInterview" | "hire" | "approveHire";
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
  const navigate = useNavigate();

  const addInterview = async (id: string) => {
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

  const hire = async (traineeId: string) => {
    console.log(traineeId);

    try {
      setIsSpinnerLoading(true);
      const { status } = await fetchHire({
        traineeId,
      });
      if (status === JsonResponseStatus.success) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "success",
          message:
            "Użytkownik został powiadomiony mailowo o chęci zatrunienia!",
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

  const approveHire = async () => {
    try {
      setIsSpinnerLoading(true);
      const { status } = await fetchApproveHire();
      if (status === JsonResponseStatus.success) {
        setIsSpinnerLoading(false);
        setApiInfo({
          type: "success",
          message:
            "Gratulacje, zostałeś zatrudniony! Po kliknięciu OK zostaniesz wylogowany i utracisz dostęp do platformy.",
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
      if (purpose === "hire" && id) hire(id);
      if (purpose === "approveHire") approveHire();
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
            if (apiInfo.type === "success" && purpose !== "hire") {
              refreshList();
              closeModal(e);
            }
            if (apiInfo.type === "success" && purpose === "approveHire") {
              refreshList();
              closeModal(e);
              navigate("/");
            }
          }}
        >
          OK
        </PrimaryButton>
      </div>
    </div>
  );
};
