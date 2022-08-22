import * as yup from "yup";
import { AddHrRequest } from "../../types";

export const ValidationSchema = yup.object().shape({
  maxReservedStudents: yup
    .number()
    .min(0, "Liczba musi być dodatnia!")
    .max(30, "Maksymalna liczba rezerwacji to 30!")
    .integer("Liczba musi być całkowita!")
    .required("Wprowadź liczbę!")
    .typeError("Wprowadź liczbę!"),
  fullName: yup.string().required("Wprowadź imię i nazwisko!"),
  email: yup
    .string()
    .email("Niepoprawny adres email!")
    .required("Wprowadź adres email!"),
  company: yup.string().required("Wprowadź nazwę firmy!"),
});

export const initialHrInfoValues: AddHrRequest = {
  fullName: "",
  email: "",
  company: "",
  maxReservedStudents: 10,
};
