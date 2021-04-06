import { readFileSync } from 'fs'
import { parse as parseToml} from 'toml'


// should this be a separate object? an action to load into data store? part of the initial state?
let config = null

export const getConfig = () => {
  if(!config) {
    try {
      config = parseToml(readFileSync("/etc/renix.toml", 'utf-8'))
      console.log("SUCCESS: config file parsed")
    } catch (e) {
      console.log("ERROR: could not find toml file")
    }
  }
  return config
}

let tire_map = null

export const getTireMap = () => {

  const cfg = getConfig()

  if(!tire_map && 'tpms' in cfg) {
    tire_map = {}
    for (let pos in cfg.tpms) {
      let id = cfg.tpms[pos]
      tire_map[id] = pos
    }
  }

  return tire_map
}

console.log(tire_map)



