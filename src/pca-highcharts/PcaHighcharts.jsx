import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

function PcaHighchartss() {
  const [options, setOptions] = useState({
    chart: {
      type: 'scatter',
      zoomType: 'xy',
      height: '60%'
    },
    title: {
      text: 'PCA'
    },
    boost: {
      useGPUTranslations: true,
      usePreAllocated: true
    },
    xAxis: {
      min: -4,
      max: 4,
      gridLineWidth: 1
    },
    yAxis: {
      // Renders faster when we don't have to compute min and max
      min: -4,
      max: 4,
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: null
      }
    },
    series: [{ data: [] }]
  });
  useEffect(() => {
    fetch("http://127.0.0.1:5000/pca")
    .then(response => response.json())
    .then(array => 
      setOptions({ series: [{ data: array.data }] })
    );
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
export default PcaHighchartss;