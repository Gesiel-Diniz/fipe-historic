import React, { Component } from 'react';
import CanvasJSReact from '../../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class HistoricChart extends Component {

    
    render() {


        const options = {
            animationEnabled: true,
            theme: "light",
            // title: {
            //     text: ""
            // },
            axisX: {
                //valueFormatString: "DD MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                // title: "Closing Price (in EUR)",
                valueFormatString: "R$ ##0.000,00",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function (e) {
                        return "R$ " + CanvasJS.formatNumber(e.value, "##0.000,00");
                    }
                }
            },
            data: [{
                type: "area",
                xValueFormatString: "MMM YYYY",
                yValueFormatString: "RS ##0.000,00",
                dataPoints: []
            }]
        }


        var { result } = this.props;

       if(result != null){
           options.data[0].dataPoints = result;
       }
       

        return (
            <div className="col-lg-12 col-md-12">
                <CanvasJSChart options={options}
                /* onRef = {ref => this.chart = ref} */
                />
            </div>
        );
    }
}

export default HistoricChart




    // [
    // { x: new Date("2018-03-01"), y: 85.3},
    // { x: new Date("2018-03-02"), y: 83.97},
    // { x: new Date("2018-03-05"), y: 83.49},
    // { x: new Date("2018-03-06"), y: 84.16},
    // { x: new Date("2018-03-07"), y: 84.86},
    // { x: new Date("2018-03-08"), y: 84.97},
    // { x: new Date("2018-03-09"), y: 85.13},
    // { x: new Date("2018-03-12"), y: 85.71},
    // { x: new Date("2018-03-13"), y: 84.63},
    // { x: new Date("2018-03-14"), y: 84.17},
    // { x: new Date("2018-03-15"), y: 85.12},
    // { x: new Date("2018-03-16"), y: 85.86}
    // ]