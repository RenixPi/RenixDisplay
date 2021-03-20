import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Box, Meter, Stack, Text} from "grommet";
import ReactSpeedometer from "react-d3-speedometer"


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
    <Stack anchor="center">
      <ReactSpeedometer {...options} />
    </Stack>
    </Box>
  )



}
