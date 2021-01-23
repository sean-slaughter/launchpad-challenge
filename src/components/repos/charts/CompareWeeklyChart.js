import React from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Line2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Line2D, FusionTheme);

const CompareWeeklyChart = ( {data} ) => {
    
   const getChartData = () => {
     const chartData = [];
     Object.entries(data).forEach(([key, value]) => {
       chartData.push({
         seriesName: key,
         data: [
           {
             value: value[0].days[0],
           },
           {
             value: value[0].days[1],
           },
           {
             value: value[0].days[2],
           },
           {
             value: value[0].days[3],
           },
           {
             value: value[0].days[4],
           },
           {
             value: value[0].days[5],
           },
           {
             value: value[0].days[6],
           },
         ],
       });
     });
     return chartData;
   };

   const chartConfigs = {
     type: "msline",
     width: "500",
     height: "300",
     dataFormat: "json",
     dataSource: {
       chart: {
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
             {
               label: "Sun",
             },
             {
               label: "Mon",
             },
             {
               label: "Tue",
             },
             {
               label: "Wed",
             },
             {
               label: "Thu",
             },
             {
               label: "Fri",
             },
             {
               label: "Sat",
             },
             {
               label: "Sun",
             },
           ],
         },
       ],
       dataset: getChartData(),
     },
   };

    return <ReactFC {...chartConfigs} />;
}

export default CompareWeeklyChart;
