import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Modal from '../components/Modal/Modal';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function TsneHighchartss() {
  const [open, setOpen] = React.useState(false);
  const [dialogData, setDialogData] = React.useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currentModel, setValue] = React.useState('herbert');

  const handleModelChange = (event) => {
    setValue(event.target.value);
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
    fetch("http://127.0.0.1:5000/tsne?data="+ currentModel)
    .then(response => response.json())
    .then(array => 
      setOptions({ series: array.series })
    );
}, [currentModel]);

  return (
    <div id="forceWrapper">
      <FormControl>
      <h3>Model językowy</h3>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={currentModel}
        onChange={handleModelChange}
      >
        <FormControlLabel value="herbert" control={<Radio />} label="HerBERT" />
        <FormControlLabel value="dKleczekBert" control={<Radio />} label="PolBERT" />
        <FormControlLabel value="stDistiluse" control={<Radio />} label="Distiluse" />
        <FormControlLabel
          value="tfidf"
          control={<Radio />}
          label="TFIDF"
        />
      </RadioGroup>
    </FormControl>
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
export default TsneHighchartss;