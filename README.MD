#Setup

## Typescript globally

npm install -g typescript

## React

npm install react react-dom --save

## Install typings globally

npm install -g typings (sudo with mac)

## Typings for react

typings install dt~react dt~react-dom --save

## Webpack and the loader

npm install webpack ts-loader --save-dev

## Lite server (webpack-dev-server can be used as well)

npm install lite-server --save-dev

## Webpack workflow

cf webbacl 4

## Locally install typescript as Dev dependency

npm install typescript --save-dev // to keep a version of typescript for your project

## Init ts compiler options

tsc --init

Update jsx option to 'react':
{
...
"jsx": "react"
}
