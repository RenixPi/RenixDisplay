import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Box, Meter, Stack, Text} from "grommet";
import {RadialGauge} from "react-canvas-gauges";


export const RPMGauge = () => {

  const rpm = useSelector(state => state.ecu.rpm);

  let options = {
    minValue: 0,
    maxValue: 8000,
    segments: 1,
    width:175,
    startColor: "#007700",
    endColor: "#00FF00",
    ringWidth: 20,
    currentValueText: "${value} rpm"
  }

  return (
    <Box align="center" pad="xsmall">

      <RadialGauge
        width={140}
        height={140}
        units=''
        minValue={0}
        startAngle={75}
        ticksAngle={195}
        colorPlate={"#ddd"}
        borderShadowWidth={0}
        borders={false}
        title='psi'
        valueBox={false}
        highlights={[
          {"from": 0, "to": 15, "color": "#00FF00"},
          {"from": 30, "to": 50, "color": "#0000FF"},
          {"from": 55, "to": 70, "color": "#FF0000"}

          ]}
        value={10}
        minValue={0}
        maxValue={70}
        majorTicks={['0', '10', '20', '30','40', '50', '60', '70']}
        minorTicks={2}
      ></RadialGauge>
      <div style={{marginTop:-40}}>
      <RadialGauge
        width={140}
        height={140}
        units=''
        minValue={0}
        startAngle={90}
        ticksAngle={180}
        colorPlate={"#ddd"}
        borderShadowWidth={0}
        borders={false}
        title='oF'
        valueBox={false}
        highlights={[{"from": 0, "to": 15, "color": "#00FF00"}]}
        value={10}
        minValue={0}
        maxValue={50}
        majorTicks={['0', '10', '20', '30','40', '50']}
        minorTicks={2}
      ></RadialGauge>
      </div>



    </Box>
  )



}
