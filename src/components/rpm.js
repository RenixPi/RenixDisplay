import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Box, Meter, Stack, Text} from "grommet";


export const RPMGauge = () => {

  const rpm = useSelector(state => state.ecu.rpm);

  const meterValue = 20;

  return (
    <Box align="center" pad="xsmall">
    <Stack anchor="center">
      <Meter
        type="circle"
        background="light-2"
        values={[{ value: 25 }, {value:70}, {value: 25}]}
        size="small"
        thickness="medium"
      />
      <Meter
        type="circle"
        background="light-3"
        values={[{ value: 25, label: "psi" }]}
        size="xsmall"
        thickness="medium"

      />
    </Stack>
    </Box>
  )



}
