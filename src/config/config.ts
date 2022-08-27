export const config = {
  resultsPerPageOptions: [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  defaultResultsPerPageOption:
    Number(process.env.REACT_APP_defaultResultsPerPageOption) || 5,
  apiUrl: process.env.REACT_APP_apiUrl || "http://localhost:3001/api/v1/",
};
