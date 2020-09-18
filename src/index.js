import React from 'react'
// import {createUseStyles} from 'react-jss'
import styles from './styles.module.css'

const cubeStyles = {
  scene: {
    width: "100%",
    height: "100%",
    border: "1px solid #CCC",
    perspective: "1000000px",
    transform: "scale(1)",
  },
  cube: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    transformStyle: "preserve-3d",
    transform: "translateZ(-100vh)",
    transition: "all 1s 0.5s",
  },
  cubeFace: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
    lineHeight: "200px",
    fontSize: "40px",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    transition: "all 1s 0.5s",
  },
  "show-front":  { transform: "translateZ(-100vh) rotateY(   0deg);" },
  "show-right":  { transform: "translateZ(-100vh) rotateY( -90deg);" },
  "show-back":   { transform: "translateZ(-100vh) rotateY(-180deg);" },
  "show-left":   { transform: "translateZ(-100vh) rotateY(  90deg);" },
  "show-top":    { transform: "translateZ(-100vh) rotateX( -90deg);" },
  "show-bottom": { transform: "translateZ(-100vh) rotateX(  90deg);" },
  "cube__face--front":  (disp=50) => { return { transform: "rotateY(  0deg) translateZ("+ disp +"vh)" } },
  "cube__face--right":  (disp=50) => { return { transform: "rotateY( 90deg) translateZ("+ disp +"vw)" } },
  "cube__face--back":   (disp=50) => { return { transform: "rotateY(180deg) translateZ("+ disp +"vh)" } },
  "cube__face--left":   (disp=50) => { return { transform: "rotateY(-90deg) translateZ("+ disp +"vw)" } },
  "cube__face--top":    (disp=50) => { return { transform: "rotateX( 90deg) translateZ("+ disp +"vh)" } },
  "cube__face--bottom": (disp=50) => { return { transform: "rotateX(270deg) translateZ("+ disp +"vh)" } },
};

const zoomOutAnimation = [
  {transform: "scale(1)", perspective: 1000000},
  {transform: "scale(0.60)", perspective: 5000},
  {transform: "scale(0.60)", perspective: 5000},
  {transform: "scale(1)", perspective: 1000000}
]

export class CubeTransition extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      currentFace: "front"
    }

    this.sceneRef = React.createRef();
    this.cubeAnimation = null;
    
    this._renderChildren = this._renderChildren.bind(this);
  }

  componentDidUpdate() {
    this.sceneRef.current.animate(zoomOutAnimation, 2000);
    this.sceneRef.current.style.animationTimingFunction = "cubic-bezier(0.68, -0.6, 0.32, 1.6)";;
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.face !== this.state.currentFace) {
      this.setState({ currentFace: nextProps.face });
    }
  }

  render() {
    return ( 
      <div ref={this.sceneRef} className={[styles.scene, ""].join(" ")}>
        <div /*style={{...cubeStyles.cube, ...cubeStyles["show-"+this.state.currentFace]}}*/ 
          className={[styles.cube, styles["show-"+this.state.currentFace]].join(" ")}>
          {this._renderChildren()}
          {this._renderContent()}
        </div>
      </div>
    )
  }

  _renderChildren() {
    let resizeCube = ["back", "front", "top", "bottom"].includes(this.state.currentFace) ?
                          {width: "100vh", transform: "rotateY({{deg}}) translateZ({{translateZ}})", transition: "width 0.5s" } : false
    return  ["back", "front", "left", "right", "top", "bottom"].map((side) => {

      let deg;
      let translateZ;
      if(side == "left") {
        deg = "-90deg"
        translateZ = "50vh"
      } else if (side == "right") {
        deg = "90deg"
        translateZ = "calc(100vw - 50vh)"
      }

      let sideFaceStyle;
      if(resizeCube && ["left", "right"].includes(side)) {
        sideFaceStyle = {...resizeCube};
        sideFaceStyle.transform = resizeCube.transform
                                    .replace("{{deg}}", deg)
                                    .replace("{{translateZ}}", translateZ)
        
      } else {
        sideFaceStyle = {}
      }

      let finalStyles = {
        ...cubeStyles.cubeFace, 
        ...cubeStyles["cube__face--" + side](),
        ...(this.props[side+"CSS"] || {}),
        ...sideFaceStyle
      }

      return (
        <div style={finalStyles}></div>
      )
    })
  }

  _renderContent() {
    return  ["back", "front", "left", "right", "top", "bottom"].map((side) => {
      let contentStyles = {
        ...cubeStyles.cubeFace, 
        ...cubeStyles["cube__face--" + side](this.props.contentElevation + 50)
      }

      return (
        <div style={contentStyles}>{this.props[side + "Page"]}</div>
      )
    })
  }
}

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
