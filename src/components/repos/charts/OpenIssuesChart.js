import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Bar2D, FusionTheme);


const OpenIssuesChart = ({data}) => {

    const chartData = Object.entries(data).map(([key, value]) => {
        return {
            label: key,
            value: value.open_issues_count
        }
    })
    
    const chartConfigs = {
    type: "bar2d",
    width: "500",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        baseFont: "Titillium Web",
        animation: 1,
        caption: "Number of Current Open Issues",
        yAxisName: "# of Issues",
        theme: "fusion",
      },
      data: chartData,
    }}

    return <ReactFC {...chartConfigs} />
    
}

export default OpenIssuesChart;
