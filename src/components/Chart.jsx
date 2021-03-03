import React, { useState, useEffect } from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { fetchDailyData } from '../api';
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        <Line
            data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    label: "Infected",
                    data: dailyData.map(({ confirmed: { total } }) => total),
                    borderColor: "#20a8d8",
                    backgroundColor: "rgba(32, 168, 216, 0.5)",
                    fill: true,
                }, {
                    label: "Deaths",
                    data: dailyData.map(({ deaths: { total } }) => total),
                    borderColor: "#fa4659",
                    backgroundColor: "rgba(250, 70, 89, 0.5)",
                    fill: true,
                }]
            }}
        />
    );

    const doughnutChart = (
        confirmed && <Doughnut
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [{
                    // label: "People",
                    backgroundColor: [
                        "#20a8d8",
                        "#2eb872",
                        "#fa4659",
                    ],
                    hoverBackgroundColor: [
                        "#20a8d8",
                        "#2eb872",
                        "#fa4659",
                    ],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
            }}
        />
    );

    const barChart = (
        confirmed && <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [{
                    label: "People",
                    backgroundColor: [
                        "#20a8d8",
                        "#2eb872",
                        "#fa4659",
                    ],
                    data: [confirmed.value, recovered.value, deaths.value],
                }]
            }}
        />
    );

    return (
        <div className={styles.container}>
            {
                country ? barChart : (
                    dailyData ? lineChart : null
                )
            }
            <br />
            {
                country && doughnutChart
            }
        </div>
    )
}

export default Chart;