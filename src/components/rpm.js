import React from 'react';
import {Box} from "grommet";
import {RadialGauge} from "react-canvas-gauges";

export const RPMGauge = ({speed}) => {

  return (
    <Box align="center" pad="medium">

      <RadialGauge
        value={speed}
        width={140}
        height={140}
        units=''
        startAngle={75}
        ticksAngle={210}
        colorPlate={"#ddd"}
        borderShadowWidth={0}
        borders={false}
        title='rpm'
        valueBox={false}
        highlights={[
          {"from": 5500, "to": 8000, "color": "#C41209"}
        ]}
        minValue={0}
        maxValue={8000}
        majorTicks={['0', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000']}
        minorTicks={4}
      />
    </Box>
  )
};
