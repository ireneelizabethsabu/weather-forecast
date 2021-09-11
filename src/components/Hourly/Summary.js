import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Summary = ({ time, temp }) => {
  const styles = {
    container: {
      height: "12rem",
      margin: "2rem auto",
    },
    chart: {
      height: "100%",
    },
  };

  const data = {
    labels: time,
    datasets: [
      {
        label: "Temperature",
        data: temp,
        fill: false,
        backgroundColor: "transparent",
        borderColor: "#fff",
        pointHoverBackgroundColor: "#082D39",
        tension: 0.1,
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          
        },
        ticks: {
          display: true,
          color: "#fff"
        }
      },
    },
    plugins: {
      
      legend: {
        display: false,
        labels: {
          boxWidth: 30,
          boxHeight: 10,
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        displayColors: true,
        titleColor: "#082D39",
        bodyColor: "#082D39",
        padding: 12,
      },
    },
  };

  return (
    <Container fluid className="py-5 px-0">
      <Line styles={styles.chart} data={data} options={options} />
    </Container>
  );
};

export default Summary;
