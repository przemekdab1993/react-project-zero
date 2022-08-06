import React from "react";

import styles from'./Chart.module.css';

import ChartBar from "./ChartBar";
import Card from "../UserInterface/Card";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximumValue = Math.max(...dataPointValues);

    return (
        <Card className={styles['chart-container']} >
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximumValue}
                    label={dataPoint.label}
                />
            ))}
        </Card>
    );
}

export default Chart;