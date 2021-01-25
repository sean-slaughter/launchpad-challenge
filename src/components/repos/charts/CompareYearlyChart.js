import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const CompareYearlyChart = ({data}) => {

    const chartData = Object.entries(data).map(([key, value]) => {
        return {
          seriesName: key,
          data: value.map((week) => {
            return {
              value: week.total,
              showValue: 0
            };
          }),
        };
    });

    const chartCategories = new Array(52).map((el, idx) => {return {label: idx}});
   
    const chartConfigs = {
        type: "msline",
        width: "1200",
        height: "300",
        dataFormat: "json",
        dataSource: {
          chart: {
            drawAnchors: "0",
            baseFontColor: "#0d1b2a",
            bgColor: "#f3f3f4",
            baseFont: "Titillium Web",
            animation: 1,
            caption: "Number of commits each week over the last year.",
            xAxisName: "Last 52 weeks",
            yAxisName: "# of Commits",
            theme: "fusion",
          },
          dataset: chartData,
          categories: [
            {
                category: chartCategories
            },
          ],
        },
      };

      console.log(chartData)
    return <ReactFC {...chartConfigs} />;
}

export default CompareYearlyChart;
