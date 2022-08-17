import React, { useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
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
  const [apiInfo /* setApiInfo */] = useState<ApiInfo>(initialApiInfo);

  const handleUploadFile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("sending file...");
  };

  return (
    <div className={classes.UploadCsv}>
      <p>Dodaj plik .csv</p>
      <form onSubmit={handleUploadFile}>
        <label htmlFor="file" className={classes.chooseFileButton}>
          Wybierz plik CSV
          <input
            className={classes.chooseFileButton}
            id="file"
            name="file"
            type="file"
            onChange={() => {
              setIsSendButtonDisabled(false);
            }}
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
      </form>
    </div>
  );
};
