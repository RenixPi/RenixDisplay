import { readFileSync } from 'fs'
import { parse as parseToml} from 'toml'

const config = (() => {

  try {
    const f = readFileSync("/etc/renix.toml", 'utf-8')
    return parseToml(f)
  } catch (e) {
    console.log("ERROR: could not find toml or parse")
  }
  return {}

})()

export default config

export const tire_map = (() => {
  if('tpms' in config) {
    const tire_map = {}
    for (let pos in config.tpms) {
      let id = config.tpms[pos]
      tire_map[id] = pos
    }
    return tire_map
  }
  return {}
})()
