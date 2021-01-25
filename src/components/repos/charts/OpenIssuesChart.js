import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Bar2D, FusionTheme);

const OpenIssuesChart = ({ data }) => {
    //format chart data
  const chartData = Object.entries(data).map(([key, value]) => {
    return {
      label: key,
      value: value.open_issues_count,
    };
  });
  //format chart configuration
  const chartConfigs = {
    type: "bar2d",
    width: "400",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        baseFontColor: "#0d1b2a",
        bgColor: "#f3f3f4",
        baseFont: "Titillium Web",
        animation: 1,
        caption: "Number of Current Open Issues",
        yAxisName: "# of Issues",
        theme: "fusion",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default OpenIssuesChart;
