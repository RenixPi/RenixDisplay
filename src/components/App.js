import React from 'react';
import {Grommet, Box, Grid, Card, Image} from 'grommet';
import {TireGauge} from "./tire";
import {useSelector} from "react-redux";
import logo from "../assets/amcicon.png"

import '../assets/css/App.scss'

function App() {

  const lf = useSelector(state => state.tire.lf);
  const rf = useSelector(state => state.tire.rf);
  const lr = useSelector(state => state.tire.lr);
  const rr = useSelector(state => state.tire.rr);


  return (
    <Grommet>
      <Grid
        fill
        columns={['flex', 'flex']}
        rows={['auto','small', 'small']}
        gap='small'
        areas={[
          { name: 'header', start: [0,0], end: [1,0]},
          { name: 'UL', start: [0,1], end: [0,1] },
          { name: 'UR', start: [1,1], end: [1,1] },
          { name: 'LL', start: [0,2], end: [1,2] },
          { name: 'LR', start: [1,2], end: [1,2] },

        ]}>
        <Box gridArea='header' className={"header"}>
          <Grid
            columns={['flex','flex']}

            >
            <Box><img className={"logo"} src={logo} width={50} height={34}/></Box>
            <Box><h2 className={"appname"}>RenixPi</h2></Box>

          </Grid>


        </Box>
      <Box gridArea="UL">
        <Card background="light-4" height="small">
          <TireGauge pressure={lf.pressure} temp={lf.temp}/>



        </Card>
      </Box>
        <Box gridArea="UR">
          <Card background="light-4" height="small">b</Card>
        </Box>
        <Box gridArea="LL">
          <Card background="light-4" height="small">c</Card>
        </Box>
        <Box gridArea="LR">
          <Card background="light-4" height="small">d</Card>
        </Box>

      </Grid>
    </Grommet>
  )
}

export default App
