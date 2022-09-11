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
import { FETCH_USERS_COUNT } from "./usersChart.quries";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// 날짜에 맞게 일자별로 실시간으로 가져와야 해

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "유저 가입 수",
      // data: labels.map(() => data?.fetchUsersCount.number({ max: 100 })),
      data: [10, 20, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function UsersChart() {
  const { data } = useQuery<Pick<IQuery, "fetchUsersCount">, IQuery>(
    FETCH_USERS_COUNT
  );
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
}
