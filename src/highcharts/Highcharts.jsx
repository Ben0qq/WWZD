import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { getPoints, getUmap } from './highchartsSlice'
import { useDispatch, useSelector } from 'react-redux';

function Highchartss() {
  const points = useSelector(getPoints)
  const dispatch = useDispatch();

  const options = {
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      height: '60%'
    },
    title: {
      text: 'Umap'
    },
    boost: {
      useGPUTranslations: true,
      usePreAllocated: true
    },
    xAxis: {
      min: -20,
      max: 20,
      gridLineWidth: 1
    },
    yAxis: {
      // Renders faster when we don't have to compute min and max
      min: -20,
      max: 20,
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: null
      }
    },
    series: [{
      data: points
    }]
  }

  useEffect(() => {
    dispatch(getUmap())
    console.log(points)
  }, []);

  return (
    <div id="forceWrapper" style={{ width: '95vw', height: '90vh' }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}>

      </HighchartsReact>
    </div>
  );
}
export default Highchartss;