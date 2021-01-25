import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const CompareWeeklyChart = ({ data }) => {

//format chart data
  const chartData = Object.entries(data).map(([key, value]) => {
    return {
      seriesName: key,
      data: value[0].days.map((day) => {
        return {
          value: day,
        };
      }),
    };
  });
//format chart configs
  const chartConfigs = {
    type: "msline",
    width: "400",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        drawAnchors: "0",
        baseFontColor: "#0d1b2a",
        bgColor: "#f3f3f4",
        baseFont: "Titillium Web",
        animation: 1,
        caption: "Number of commits each day over the last week.",
        xAxisName: "Day",
        yAxisName: "# of Commits",
        theme: "fusion",
      },
      categories: [
        {
          category: [
            { label: "Sun" },
            { label: "Mon" },
            { label: "Tue" },
            { label: "Wed" },
            { label: "Thu" },
            { label: "Fri" },
            { label: "Sat" },
          ],
        },
      ],
      dataset: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default CompareWeeklyChart;
