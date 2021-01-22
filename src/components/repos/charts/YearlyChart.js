import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const YearlyChart = ({data}) => {
    
    const chartData = data.map((week, index) => {
        return {label: index, value: week.total} 
    })

  const chartConfigs = {
    type: "line",
    width: "500",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        baseFont: 'Titillium Web',
        animation: 1,
        caption: "Number of commits over the last year by week.",
        xAxisName: "Past Year",
        yAxisName: "# of Commits",
        theme: "fusion",
      },
      data: chartData,
      trendlines: [

      ]
    },
  };
    console.log(chartData)
    return (
        <ReactFC {...chartConfigs} />
    );
}

export default YearlyChart;
