# circleenv [![npm version](https://badge.fury.io/js/circleenv.svg)](https://badge.fury.io/js/circleenv)

Synchronizes your CircleCI environment variables with a local file.

## Features

* 🔎 Specify all the environment variables locally
* 🚀 Easily add multiple environment variables
* ✨ Incredibly flexible and easy to use 

## Install

```sh
npm install -g circleenv
```

## Usage

Just run `circleenv` in your terminal or add it to the `scripts` as part of your build step in your `package.json`.

```sh
  Usage: circleenv <circleConfig>
```

In order to configure the environment variables, you need to specifiy them in a JSON config file with the following schema. This file is **required**.

```js
// circle.json

{
  "vcs": "github", // Either "github" or "bitbucket"
  "token": "xxxxxx", // Your API token
  "username": "brene", // Username of individual or organisation
  "project": "botbuilder-es6-template", // Project name of the individual or organisation
  "variables": [
    {
      "name": "API_TOKEN", // The name of your environment variable
      "value": "yyyyy", // The value of the environment variable
    }
  ]
}
```
You can get your CircleCI token here: [https://circleci.com/account/api](https://circleci.com/account/api)