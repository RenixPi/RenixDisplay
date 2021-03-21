import React from 'react';
import {useSelector} from "react-redux";
import {Grommet, Box, Grid, Card, Image, Clock} from 'grommet';
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
        columns={['auto', 'flex', 'flex', 'flex']}
        rows={['30px','small', 'small',]}
        gap='small'
        areas={[
          { name: 'logo', start: [0,0], end: [0,0]},
          { name: 'name', start: [1,0], end: [2,0]},
          { name: 'clock', start: [3,0], end: [3,0]},
          { name: 'UL', start: [0,1], end: [2,1] },
          { name: 'UR', start: [2,1], end: [3,1] },
          { name: 'LL', start: [0,2], end: [2,2] },
          { name: 'LR', start: [2,2], end: [3,2] },

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


      <Box gridArea="UL">
        <Card background="light-4" height="small">
          <TireGauge pressure={43} temp={75}/>
        </Card>
      </Box>
        <Box gridArea="UR">
          <Card background="light-4" height="small">
            <RPMGauge speed={rpm}/>
          </Card>
        </Box>
        <Box gridArea="LL">
          <Card background="light-4" height="small">
            <TempGauge temp={205} type={TEMP_TYPES.COOLANT}/>
          </Card>
        </Box>
        <Box gridArea="LR">
          <Card background="light-4" height="small">
            <Card background="light-4" height="small">
              <TempGauge temp={60} type={TEMP_TYPES.AIRINTAKE}/>
            </Card>
          </Card>
        </Box>

      </Grid>
    </Grommet>
  )
}

export default App
