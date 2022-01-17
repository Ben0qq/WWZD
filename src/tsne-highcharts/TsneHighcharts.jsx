import React, { useState, useEffect } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TsneHighchartss() {
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
      text: 'TSNE'
    },
    boost: {
      useGPUTranslations: true,
      usePreAllocated: true
    },
    xAxis: {
      min: -150,
      max: 150,
      gridLineWidth: 1
    },
    yAxis: {
      // Renders faster when we don't have to compute min and max
      min: -150,
      max: 150,
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: null
      }
    },
    plotOptions: {
      series: {
        allowPointSelect: true,
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
    fetch("http://127.0.0.1:5000/tsne")
    .then(response => response.json())
    .then(array => 
      setOptions({ series: array.series })
    );
}, []);

  return (
    <div id="forceWrapper" style={{ width: '95vw', height: '90vh' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle>{dialogData.title}</DialogTitle>
        <p>{dialogData.publicationDate}</p>
        <p>{dialogData.teaser}</p>
        <img src={dialogData.imageUrl} />
        <p>{dialogData.text}</p>

      </Dialog>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}>
      </HighchartsReact>
    </div>
  );
}
export default TsneHighchartss;