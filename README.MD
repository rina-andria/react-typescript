## React project setup with typescript

An example of **react + typescript** setup with **props** and **state** passed to **Home** component using **_generics_**.
The following commands walk you through the different required installation.

### Typescript global installation

```sh
npm install -g typescript
```

### React

```sh
npm install react react-dom --save
```

### Install @Types for react and react-dom

```sh
npm install @types/react @types/react --save-dev
```

### Webpack and the loader

```sh
npm install webpack ts-loader --save-dev
```

### Webpack workflow

[cf webpack 4](https://webpack.js.org/concepts/)

### Locally install typescript as Dev dependency

```sh
npm install typescript --save-dev // to keep a version of typescript for your project
```

### Init ts compiler options

```sh
tsc --init
```

Update jsx option to 'react':
{
...
"jsx": "react"
}

## To run the sample

```sh
npm install
npm start
```
