import React from "react";
import { Container } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Summary = ({ time,temp }) => {
  const styles = {
    container: {
      height: "12rem",
      margin: "2rem auto",
    },
    chart: {
      height: "100%"
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
        borderColor: "#333333",
        pointHoverBackgroundColor: "white",
        tension: 0.3,
        borderWidth: 3
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
        },
        ticks: {
            display: false,
        },
        min: temp.reduce((a, b) => Math.min(a, b)) - 5,
        max: temp.reduce((a, b) => Math.max(a, b)) + 5,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
        legend: {
          labels: {
            boxWidth: 0,
            boxHeight: 0,
          },
        },
        tooltip: {
            
          backgroundColor: '#ced4da',
          displayColors: true,
          titleColor: '#333333',
          bodyColor: '#333333',
          padding: 9
        },
      },
  };

  return (
    <Container fluid className="py-5">
      <Line styles={styles.chart} data={data} options={options} />
    </Container>
  );
};

export default Summary;
