import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Box, Meter, Stack, Text} from "grommet";
import {RadialGauge, LinearGauge} from "react-canvas-gauges";
import {amcred, amcblue, apple, iceberg, sunrise} from "assets/colors";

// https://coolors.co/0f3e84-c41209-79addc-adf7b6-ffd400
// amc blue #0247af -> 0f3e84
// amc red #ee1106 -> c41209
// {"Dark Cornflower Blue":"0f3e84","Venetian Red":"c41209","Iceberg":"79addc","Granny Smith Apple":"adf7b6","Cyber Yellow":"ffd400"}


export const TireGauge = ({pressure, temp}) => {

  return (
    <Box align="center" pad="medium">

      <RadialGauge
        value={pressure}
        width={140}
        height={140}
        units=''
        startAngle={75}
        ticksAngle={195}
        colorPlate={"#ddd"}
        borderShadowWidth={0}
        borders={false}
        title='psi'
        valueBox={false}
        highlights={[
          {"from": 0, "to": 15, "color": sunrise},
          {"from": 30, "to": 50, "color": iceberg},
          {"from": 55, "to": 70, "color": amcred}

          ]}
        minValue={0}
        maxValue={70}
        majorTicks={['0', '10', '20', '30','40', '50', '60', '70']}
        minorTicks={2}
      />
      <div style={{marginTop:-40, marginLeft:5}}>
        <LinearGauge
          value={temp}
          width={145}
          height={75}
          minValue={-20}
          maxValue={80}
          majorTicks={[-20, 0, 20, 40, 60, 80]}
          highlights={[
            {from: -20, to: 60, color: "#DDD"},
            {from: 60, to: 80, color: amcred }

          ]}
          minorTicks={5}
          barBeginCircle={false}
          tickSide={"left"}
          needleSide={"left"}
          numberSide={"left"}
          needleType={"line"}
          needleWidth={"3"}
          barProgress={false}
          borders={false}
          borderShadowWidth={0}
          colorPlate={"#ddd"}
          colorBar={"#ddd"}
          />
      </div>



    </Box>
  )



}
