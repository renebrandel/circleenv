import fetch from 'node-fetch'

const BASE_URL = 'https://circleci.com/api/v1.1'

export function addEnvVariable(name, value, config) {
  return fetch(
    `${BASE_URL}/project/${config.vcs}/${config.username}/${config.project}/envvar?circle-token=${config.token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, value}),
    })
    .then(result => result.json())
}

export function removeEnvVariable(name, config) {
  return fetch(
    `${BASE_URL}/project/${config.vcs}/${config.username}/${config.project}/envvar/${name}?circle-token=${config.token}`,
    {
      method: 'DELETE',
    }
  ).then(result => result.json())
}

export function listEnvVariables(config) {
  return fetch(`${BASE_URL}/project/${config.vcs}/${config.username}/${config.project}/envvar?circle-token=${config.token}`)
    .then(result => result.json())
}
