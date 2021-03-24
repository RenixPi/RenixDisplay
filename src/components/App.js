import React from 'react';
import {useSelector} from "react-redux";
import {Grommet, Box, Grid, Card, Image, Clock, Stack} from 'grommet';
import {TireGauge} from "components/gauges/tire";
import {RPMGauge} from "components/gauges/rpm";

import 'assets/css/App.scss'
import logo from "assets/amcicon.png"
import {TempGauge, TYPES as TEMP_TYPES} from "./gauges/temp";

function App() {

  const lf = useSelector(state => state.tire.lf);
  const rf = useSelector(state => state.tire.rf);
  const lr = useSelector(state => state.tire.lr);
  const rr = useSelector(state => state.tire.rr);
  const rpm = useSelector(state => state.ecu.rpm);


  return (
    <Grommet>
      <Grid
        fill
        columns={['flex', 'flex', 'flex', 'flex']}
        rows={['30px','small', 'small','small']}
        gap='small'
        areas={[
          { name: 'logo', start: [0,0], end: [0,0]},
          { name: 'name', start: [1,0], end: [2,0]},
          { name: 'clock', start: [3,0], end: [3,0]},
          { name: 'LF', start: [0,1], end: [2,1] },
          { name: 'RF', start: [2,1], end: [3,1] },
          { name: 'LR', start: [0,2], end: [2,2] },
          { name: 'RR', start: [2,2], end: [3,2] },
          { name: 'gauge1', start: [0,3], end:[2,3]},
          { name: 'gauge2', start: [2,3], end:[3,3]}
        ]}>

        <Box gridArea='logo'><img src={logo} /></Box>
        <Box gridArea='name'><p className={"header"}>RenixPi</p></Box>
        <Box gridArea='clock' className={'clock'}>
          <Clock
            type={'digital'}
            precision={'minutes'}
            size={'xxlarge'}
          />
        </Box>


      <Box gridArea="LF">
        <Card background="light-4" height="small">
          <Stack>
          <p className={'gauge-title'}>Left<br/>Front</p>
          <TireGauge pressure={43} temp={75}/>
          </Stack>
        </Card>
      </Box>
      <Box gridArea="RF">
        <Card background="light-4" height="small">
          <Stack>
            <p className={'gauge-title'}>Right<br/>Front</p>
            <TireGauge pressure={46} temp={72}/>
          </Stack>
        </Card>
      </Box>
      <Box gridArea="LR">
        <Card background="light-4" height="small">
          <Stack>
            <p className={'gauge-title'}>Left<br/>Rear</p>
            <TireGauge pressure={41} temp={72}/>
          </Stack>
        </Card>
      </Box>
      <Box gridArea="RR">
        <Card background="light-4" height="small">
          <Stack>
            <p className={'gauge-title'}>Right<br/>Rear</p>
            <TireGauge pressure={45} temp={77}/>
          </Stack>
        </Card>
      </Box>
        <Box gridArea="gauge1">
          <Card background="light-4" height="small">
            <Stack>
              <p className={'gauge-title'}>Coolant<br/>Temp</p>
              <TempGauge temp={205} type={TEMP_TYPES.COOLANT}/>
            </Stack>
          </Card>
        </Box>
        <Box gridArea="gauge2">
          <Card background="light-4" height="small">
            <Stack>
              <p className={'gauge-title'}>Air Intake<br/>Temp</p>
              <TempGauge temp={60} type={TEMP_TYPES.AIRINTAKE}/>
            </Stack>
          </Card>
        </Box>

      </Grid>
    </Grommet>
  )
}

export default App
