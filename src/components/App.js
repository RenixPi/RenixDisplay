import React from 'react';
import {Grommet,Box, Grid, Card} from 'grommet';
import {RPMGauge} from "./rpm";



// import '../assets/css/App.css'

function App() {
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
        <Box gridArea='header'>b</Box>
      <Box gridArea="UL">
        <Card background="light-4" height="small">
          <RPMGauge/>



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
