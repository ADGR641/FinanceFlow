import { BorderColor, Dataset } from "@mui/icons-material";

export const AnalysisData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Income",
      data: [
        6360, 7163, 5926, 7360, 7182, 6003, 3963, 6158, 5668, 6922, 6390, 5188,
      ],
      borderColor: "rgb(0,128,0)",
    },
    {
      label: "Expenses",
      data: [
        2005, 6509, 3506, 8563, 8699, 6649, 4375, 5120, 6728, 3621, 6081, 5253,
      ],
      borderColor: "rgb(255,0,0)",
    },
  ],
};
