import React from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

function highcharts() {
    const options = {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }

    return (
        <div id="forceWrapper" style={{ width: '95vw', height: '90vh' }}>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}>

            </HighchartsReact>
        </div>
    );
}
export default highcharts;