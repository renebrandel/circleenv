#!/usr/bin/env node

import program from 'commander'
import fs from 'fs'
import {listEnvVariables, addEnvVariable, removeEnvVariable} from './circleapi'

let configPath;

program
  .version('0.0.1')
  .description('CLI to edit CircleCI environment variables')
  .arguments('<configFile>')
  .action((conf) => {
    configPath = conf;
  })

program.parse(process.argv)

const config = JSON.parse(fs.readFileSync(configPath));

listEnvVariables(config)
  .then(variables => variables.map(variable => removeEnvVariable(variable.name, config)))
  .then(promises => Promise.all(promises))
  .then(() => config.variables.map(variable => addEnvVariable(variable.name, variable.value, config)))
  .then(() => listEnvVariables(config))
  .then(result => {
    console.log('New Environment Variables: 🚀')
    result
      .map(variable => `${variable.name}="${variable.value}"`)
      .forEach(line => console.log(line))
  })
  .catch(err => console.log(err))