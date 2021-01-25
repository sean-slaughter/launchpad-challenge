import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const WeeklyChart = ({ data }) => {

  //days for labels
  const chartDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //format chart data
  const chartData = chartDays.map((day, index) => {
    return { label: day, value: data[index] };
  });
  //format chart configuration
  const chartConfigs = {
    type: "column2d",
    width: "500",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        baseFontColor: "#0d1b2a",
        bgColor: "#f3f3f4",
        drawAnchors: "0",
        baseFont: "Titillium Web",
        animation: 1,
        caption: "Number of commits each day over the last week.",
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
