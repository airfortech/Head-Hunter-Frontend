import * as yup from "yup";

export const ValidationSchema = yup.object().shape({
  maxReservedStudents: yup
    .number()
    .min(0, "Liczba musi być dodatnia!")
    .max(30, "Maksymalna liczba rezerwacji to 30!")
    .integer("Liczba musi być całkowita!")
    .required("Wprowadź liczbę!")
    .typeError("Wprowadź liczbę!"),
});
