import React, { ChangeEvent, useState } from "react";
import { JsonResponseStatus, UploadCsvResponseMessage } from "../../types";
import { fetchUploadCsv } from "../../utils/fetchUploadCsv";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Spinner } from "../Spinner/Spinner";
import exampleCsv from "../../assets/images/example-csv.png";
import classes from "./UploadCsv.module.css";

interface ApiInfo {
  type: "success" | "error";
  message: string;
}

const initialApiInfo: ApiInfo = {
  type: "error",
  message: "",
};

export const UploadCsv = () => {
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(true);
  const [apiInfo, setApiInfo] = useState<ApiInfo>(initialApiInfo);
  const [file, setFile] = useState<FormData | null>(null);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  const handleUploadFile = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSpinnerLoading(true);
      const { status, data, message } = await fetchUploadCsv(file);
      if (status === JsonResponseStatus.success) {
        setIsSpinnerLoading(false);
        if (data.traineeWithBadData.length > 0)
          setApiInfo({
            type: "success",
            message: `Liczba dodanych kursantów: ${
              data.countOfAddedTrainee
            }. Błędnie wypełnieni kursanci: ${data.traineeWithBadData
              .map((row) => row.trainee.email)
              .join(", ")}.`,
          });
        else
          setApiInfo({
            type: "success",
            message: "Liczba dodanych kursantów: " + data.countOfAddedTrainee,
          });
      }
      if (message === UploadCsvResponseMessage.incorrectColumn) {
        setApiInfo({
          type: "error",
          message:
            "Niepoprawne nazwy kolumn! Zerknij na powyższy przykład struktury.",
        });
        setIsSpinnerLoading(false);
      }
    } catch (e) {
      console.log(e);

      setApiInfo({
        type: "error",
        message: "Spróbuj później!",
      });
      setIsSpinnerLoading(false);
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target?.files?.[0]) return setFile(null);
    if (event.target?.files?.[0].type !== "text/csv") {
      setApiInfo({
        type: "error",
        message: "Plik musi mieć format .csv",
      });
      return setFile(null);
    }

    setApiInfo({
      type: "error",
      message: "",
    });

    const formData = new FormData();
    formData.append("file", event.target.files[0]);

    setApiInfo({
      type: "success",
      message: "Plik: " + event.target.files[0].name,
    });

    setFile(formData);
    setIsSendButtonDisabled(false);
  };

  return (
    <div className={classes.UploadCsv}>
      <p>Dodaj plik .csv o poniższej strukturze:</p>
      <img src={exampleCsv} alt="Example csv file" />
      <div className={classes.wrapper}>
        <form onSubmit={handleUploadFile}>
          <label htmlFor="file" className={classes.chooseFileButton}>
            Wybierz plik CSV
            <input
              className={classes.chooseFileButton}
              id="file"
              name="file"
              type="file"
              onChange={handleFileSelect}
            />
          </label>
          <p
            className={`${classes.info} ${
              apiInfo.type === "success" && classes.success
            }`}
          >
            {apiInfo.message ? apiInfo.message : null}
          </p>
          <div className={classes.end}>
            <div className={classes.row}>
              {isSpinnerLoading && <Spinner />}
              <PrimaryButton
                type="submit"
                disabled={isSendButtonDisabled}
                color="primary"
                fontColor="secondary"
                size="large"
              >
                Wyślij plik
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
