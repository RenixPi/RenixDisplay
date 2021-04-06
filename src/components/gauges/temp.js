import React from 'react';
import {Box} from "grommet";
import {RadialGauge} from "react-canvas-gauges";
import _ from "lodash"
import {amcred, iceberg} from "../../assets/colors";

export const TYPES = {
  COOLANT:'coolant',
  AIRINTAKE:'air intake'
}

const type_map = {
  'coolant' :{
    highlights:[
      {from:-40, to:40, color: iceberg},
      {from:200, to:280, color: amcred}
    ],
    minValue:-40,
    maxValue:280,
    majorTicks:[-40, 0, 40, 80, 120, 160, 200, 240, 280],
    minorTicks:4,
  },
  'air intake':
    {
      highlights:[
        {from:-20, to:120, color: "#ddd"}
      ],
      minValue:-20,
      maxValue:120,
      majorTicks:[-20, 0, 20, 40, 60, 80, 100, 120],
      minorTicks:4,
    },

}



export const TempGauge = ({temp, type}) => {

  let start = 0
  let end = 300

  const options = type_map[type];

  return (
    <Box align="center" pad="medium">

      <RadialGauge
        value={temp}
        width={140}
        height={140}
        units=''
        startAngle={75}
        ticksAngle={210}
        colorPlate={"#ddd"}
        borderShadowWidth={0}
        borders={false}
        title={type}
        valueBox={true}
        valueDec={0}
        valueInt={2}
        valueText={temp.toFixed(1) + ' °F'}
        fontValueSize={40}
        {...options}
      />
    </Box>
  )
}

