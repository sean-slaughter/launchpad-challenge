import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const YearlyChart = ({ data }) => {

  const chartData = data.map((week, index) => {
    return { label: index, value: week.total };
  });

  const chartConfigs = {
    type: "line",
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
        caption: "Number of commits each week over the last year.",
        xAxisName: "Past Year",
        yAxisName: "# of Commits",
        theme: "fusion",
      },
      data: chartData,
      trendlines: [],
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default YearlyChart;
