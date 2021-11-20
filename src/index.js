import React from 'react'
import styles from './styles.module.css'

const cubeStylesGenerator = (animationDuration) => {
  return {
    scene: {
      width: '100%',
      height: '100%',
      border: '1px solid #CCC',
      perspective: '1000000px',
      transform: 'scale(1)'
    },
    cube: {
      // width: '100vw',
      // height: '100vh',
      // position: 'relative',
      // transformStyle: 'preserve-3d',
      // transform: 'translateZ(-100vh)',
      transition:
        'all cubic-bezier(0.34, 1.56, 0.64, 1) ' +
        animationDuration / 1000 +
        's ' +
        animationDuration / 2000 +
        's'
    },
    cubeFace: {
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      transition:
        'all ' +
        animationDuration / 1000 +
        's ' +
        animationDuration / 2000 +
        's'
    },
    'show-front': { transform: 'translateZ(-100vh) rotateY(   0deg);' },
    'show-right': { transform: 'translateZ(-100vh) rotateY( -90deg);' },
    'show-back': { transform: 'translateZ(-100vh) rotateY(-180deg);' },
    'show-left': { transform: 'translateZ(-100vh) rotateY(  90deg);' },
    'show-top': { transform: 'translateZ(-100vh) rotateX( -90deg);' },
    'show-bottom': { transform: 'translateZ(-100vh) rotateX(  90deg);' },
    'cube__face--front': (disp = 50) => {
      return { transform: 'rotateY(  0deg) translateZ(' + disp + 'vh)' }
    },
    'cube__face--right': (disp = 50) => {
      return { transform: 'rotateY( 90deg) translateZ(' + disp + 'vw)' }
    },
    'cube__face--back': (disp = 50) => {
      return { transform: 'rotateY(180deg) translateZ(' + disp + 'vh)' }
    },
    'cube__face--left': (disp = 50) => {
      return { transform: 'rotateY(-90deg) translateZ(' + disp + 'vw)' }
    },
    'cube__face--top': (disp = 50) => {
      return { transform: 'rotateX( 90deg) translateZ(' + disp + 'vh)' }
    },
    'cube__face--bottom': (disp = 50) => {
      return { transform: 'rotateX(270deg) translateZ(' + disp + 'vh)' }
    }
  }
}

const zoomOutAnimation = [
  { transform: 'scale(1)', perspective: 1000000 },
  { transform: 'scale(0.60)', perspective: 5000 },
  { transform: 'scale(0.70)', perspective: 5000 },
  { transform: 'scale(1)', perspective: 1000000 }
]

export class CubeTransition extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      currentFace: 'front',
      animationDuration: props.animationSpeed || 1000
    }

    this.sceneRef = React.createRef()
    this.cubeAnimation = null

    this._renderChildren = this._renderChildren.bind(this)
  }

  componentDidUpdate() {
    this.sceneRef.current.animate(
      zoomOutAnimation,
      this.state.animationDuration * 1.9
    )
    this.sceneRef.current.style.animationTimingFunction =
      'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.face !== this.state.currentFace) {
      this.setState({ currentFace: nextProps.face })
    }

    if (nextProps.animationDuration !== this.state.animationSpeed) {
      this.setState({ animationDuration: nextProps.animationDuration })
    }
  }

  render() {
    const cubeStyles = cubeStylesGenerator(this.state.animationDuration)
    return (
      <div
        ref={this.sceneRef}
        className={[styles.scene, '', this.props.className].join(' ')}
      >
        <div /* style={{...cubeStyles.cube, ...cubeStyles["show-"+this.state.currentFace]}} */
          style={{ ...cubeStyles.cube }}
          className={[
            styles.cube,
            styles['show-' + this.state.currentFace]
          ].join(' ')}
        >
          {this._renderChildren()}
          {this._renderContent()}
        </div>
      </div>
    )
  }

  _renderChildren() {
    const cubeStyles = cubeStylesGenerator(this.state.animationDuration)
    const resizeCube = ['back', 'front', 'top', 'bottom'].includes(
      this.state.currentFace
    )
      ? {
          width: '100vh',
          transform: 'rotateY({{deg}}) translateZ({{translateZ}})',
          transition: 'width ' + this.state.animationDuration / 1000 + 's'
        }
      : false
    return ['back', 'front', 'left', 'right', 'top', 'bottom'].map(
      (side, index) => {
        let deg
        let translateZ
        if (side === 'left') {
          deg = '-90deg'
          translateZ = '50vh'
        } else if (side === 'right') {
          deg = '90deg'
          translateZ = 'calc(100vw - 50vh)'
        }

        let sideFaceStyle
        if (resizeCube && ['left', 'right'].includes(side)) {
          sideFaceStyle = { ...resizeCube }
          sideFaceStyle.transform = resizeCube.transform
            .replace('{{deg}}', deg)
            .replace('{{translateZ}}', translateZ)
        } else {
          sideFaceStyle = {}
        }

        const finalStyles = {
          ...cubeStyles.cubeFace,
          ...cubeStyles['cube__face--' + side](),
          ...(this.props[side + 'CSS'] || {}),
          ...sideFaceStyle
        }

        return <div key={index} style={finalStyles} />
      }
    )
  }

  _renderContent() {
    const cubeStyles = cubeStylesGenerator(this.state.animationDuration)
    const resizeCube = ['back', 'front', 'top', 'bottom'].includes(
      this.state.currentFace
    )
      ? {
          width: '100vh',
          transform: 'rotateY({{deg}}) translateZ({{translateZ}})',
          transition: 'width ' + this.state.animationDuration / 1000 + 's'
        }
      : false

    return ['back', 'front', 'left', 'right', 'top', 'bottom'].map(
      (side, index) => {
        let deg
        let translateZ
        if (side === 'left') {
          deg = '-90deg'
          translateZ = '50vh'
        } else if (side === 'right') {
          deg = '90deg'
          translateZ = 'calc(100vw - 50vh)'
        }

        let sideFaceStyle
        if (resizeCube && ['left', 'right'].includes(side)) {
          sideFaceStyle = { ...resizeCube }
          sideFaceStyle.transform = resizeCube.transform
            .replace('{{deg}}', deg)
            .replace('{{translateZ}}', translateZ)
        } else {
          sideFaceStyle = {}
        }

        const contentStyles = {
          ...cubeStyles.cubeFace,
          ...cubeStyles['cube__face--' + side](
            this.props.contentElevation + 50
          ),
          ...{ sideFaceStyle }
        }

        return (
          <div key={index} style={contentStyles}>
            {this.props[side + 'Page']}
          </div>
        )
      }
    )
  }
}

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
