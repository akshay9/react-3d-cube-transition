# React 3D Cube Transition Component 💻📱

> A easy to use React component to create a Fullpage 3-Dimensional rotating cube website.

[![NPM](https://img.shields.io/npm/v/react-3d-cube-transition.svg)](https://www.npmjs.com/package/react-3d-cube-transition) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

 - ✅ **Highly customisable** through React props
 - ✅ **GPU accelerated** animations 
 - ✅ Zero dependencies
 - ✅ Examples included
 - 🔨 Lazy-loading cube sides (WIP)
 - 🔨 Animation events Callbacks (WIP)

## Install

```bash
npm install --save react-3d-cube-transition
```
or

```bash
yarn add react-3d-cube-transition
```

## Usage

```jsx
import React, { Component } from 'react'

import CubeTransition from 'react-3d-cube-transition'
import 'react-3d-cube-transition/dist/index.css'

class Example extends Component {
  render() {
    return <CubeTransition 
              topPage= { <FirstPage/> }
              rightPage={ <SecondPage/> }
              contentElevation={ 15 }
            />
  }
}
```

Checkout working demo - [Example folder](https://github.com/akshay9/react-3d-cube-transition/tree/master/example)

### Demo

[<img width="480" alt="react-3d-cube-transition demo" src="https://github.com/akshay9/react-3d-cube-transition/blob/master/example/public/library-demo.gif?raw=true">](https://akshay-naik.com/react-3d-cube-transition)

### Main Props
| Attributes                |    Type    |        Default        | Description                                                                                                           |
| :------------------------ | :--------: | :-------------------: | :-------------------------------------------------------------------------------------------------------------------- |
| className                 |  `string`  |        `null`         | Add a className to the component container                                                                            |
| face                      |  `string`  |        `front`        | Sets the current cube side. Possible values: `front, top, left, right, top, bottom`                                   |
| contentElevation          |  `number`  |          `0`          | Set the elevation of content for each side with respect to its background                                             |
| frontPage                 |   `node`   |        `null`         | Renders content on the front side of the cube                                                                         |
| backPage                  |   `node`   |        `null`         | Renders content on the back side of the cube                                                                          |
| leftPage                  |   `node`   |        `null`         | Renders content on the left side of the cube                                                                          |
| rightPage                 |   `node`   |        `null`         | Renders content on the right side of the cube                                                                         |
| topPage                   |   `node`   |        `null`         | Renders content on the top side of the cube                                                                           |
| bottomPage                |   `node`   |        `null`         | Renders content on the bottom side of the cube                                                                        |
| frontCSS                  |  `object`  | `{background: #000;}` | Additional styles to be applied to the front side of the cube                                                         |
| backCSS                   |  `object`  | `{background: #000;}` | Additional styles to be applied to the back side of the cube                                                          |
| leftCSS                   |  `object`  | `{background: #000;}` | Additional styles to be applied to the left side of the cube                                                          |
| rightCSS                  |  `object`  | `{background: #000;}` | Additional styles to be applied to the right side of the cube                                                         |
| topCSS                    |  `object`  | `{background: #000;}` | Additional styles to be applied to the top side of the cube                                                           |
| bottomCSS                 |  `object`  | `{background: #000;}` | Additional styles to be applied to the bottom side of the cube                                                        |
<!-- | lazyLoad (WIP)            | `boolean`  |        `false`        | Lazily load other cube side screens when user navigates to them                                                       |
| organicArrows (WIP)       | `boolean`  |        `true`         | When set to true show the organic arrow `next` and `prev` controls                                                    |
| fillParent  (WIP)         | `boolean`  |        `true`         | When set to true the cube will fill the dimensions of the parent element. Usefull for using it in full-screen mode.   |
| startupScreen (WIP)       |   `node`   |        `null`         | Set's the startup screen component to be shown before the first screen is loaded. It works like a pre-loading screen. |
| buttons (WIP)             | `boolean`  |        `true`         | Should render the default left and right navigation buttons.                                                          |
| buttonContentRight (WIP)  |   `node`   |        `null`         | Add content as children of the right button.                                                                          |
| buttonContentLeft (WIP)   |   `node`   |        `null`         | Add content as children of the left button.                                                                           |
| onFirstMount (WIP)        | `function` |        `null`         | Called on componentDidMount passing the slider reference as an argument                                               |
| onTransitionEnd (WIP)     | `function` |        `null`         | Called on at the slider transition end event passing the slider reference as an argument                              |
| onTransitionStart (WIP)   | `function` |        `null`         | Called on slider transition start passing the slider reference as an argument                                         |
| onTransitionRequest (WIP) | `function` |        `null`         | Called when a user interacts with the slider navigation (arrows or bullets)                                           | -->

## Author

#### Akshay Naik

- Checkout my <a href="https://akshay-naik.com" title="Full-Stack Web Developer, Machine Learning Specialist" target="_blank">Full-Stack Web and Machine Learning Developer Website</a>
- Other open source projects @ <a title="Web and AI Projects Laboratory" target="_blank" href="https://akshay-naik.com/projects">Project Lab</a>

## License

MIT © [akshay9](https://github.com/akshay9)
