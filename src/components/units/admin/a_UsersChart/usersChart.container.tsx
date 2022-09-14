import UsersChartUI from "./usersChart.presenter";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { FETCH_USERS_COUNT_BY_DATE } from "./usersChart.queries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";
import moment from "moment";

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};

const labels = Array(14)
  .fill(0)
  .map((e, i) => moment().subtract(i, "d").format("YYYY/MM/DD"))
  .reverse();

console.log("dates", labels);

export const data = {
  labels,
  datasets: [
    {
      label: "신규 유저 가입 수",
      data: [10, 60, 30, 40, 28, 5, 70, 80, 15, 2, 50, 40, 25, 42],
      // data: labels.map(() =>
      //   data?.fetchUsersCountByDate.number({ min: 0, max: 100 })
      // ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function UsersChart() {
  // const number = useQuery<Pick<IQuery, "fetchUsersCountByDate">>(
  //   FETCH_USERS_COUNT_BY_DATE
  // );

  return (
    <Line
      options={options}
      data={data}
      // number={number}
    />
  );
}
