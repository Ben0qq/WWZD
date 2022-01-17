import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Modal from '../components/Modal/Modal';

function PcaHighchartss() {
  const [open, setOpen] = React.useState(false);
  const [dialogData, setDialogData] = React.useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    plotOptions: {
      series: {
        allowPointSelect: true,
        cursor:'pointer',
        point: {
          events: {
            click: function (e) {
              fetch("http://127.0.0.1:5000/rp/" + this.name)
                .then(response => response.json())
                .then(response => setDialogData(response.data))
                .then(() => handleClickOpen(true))
            }
          }
        }
      }
    },
    series: [{ data: [] }]
  });
  useEffect(() => {
    fetch("http://127.0.0.1:5000/umap")
      .then(response => response.json())
      .then(array =>
        setOptions({ series: array.series })
      );
}, []);

  return (
    <div id="forceWrapper" style={{ width: '95vw', height: '90vh' }}>
      <Modal
        dialogData={dialogData}
        open ={open}
        handleClose={handleClose}
      >
      </Modal>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}>

      </HighchartsReact>
    </div>
  );
}
export default PcaHighchartss;