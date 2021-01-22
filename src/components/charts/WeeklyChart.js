import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const WeeklyChart = ({ days, loading }) => {

  const chartDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const chartData = chartDays.map((day, index) => {
    return loading
      ? { label: day, value: 0 }
      : { label: day, value: days[index] };
  });

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
