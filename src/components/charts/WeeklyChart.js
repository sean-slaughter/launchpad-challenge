import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const WeeklyChart = ({ weeklyCommits, loading }) => {

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getChartValues = () => {
    const output = {};
    for (let i = 0; i < days.length; i++) {
      output[days[i]] = loading ? 0 : weeklyCommits.days[i];
    }
    return output;
  };

  const values = getChartValues();

  const chartData = [
    {
      label: "Sun",
      value: values.Sunday,
    },
    {
      label: "Mon",
      value: values.Monday,
    },
    {
      label: "Tues",
      value: values.Tuesday,
    },
    {
      label: "Wed",
      value: values.Wednesday,
    },
    {
      label: "Thu",
      value: values.Thursday,
    },
    {
      label: "Fri",
      value: values.Friday,
    },
    {
      label: "Sat",
      value: values.Saturday,
    },
  ];

  const chartConfigs = {
    type: "column2d",
    width: "500",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        baseFont: 'Titillium Web',
        animation: 1,
        caption: "Number of commits last week by day.",
        xAxisName: "Day",
        yAxisName: "# of Commits",
        theme: "fusion",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default WeeklyChart;
