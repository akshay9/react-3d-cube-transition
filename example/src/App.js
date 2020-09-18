import React from 'react'

import { CubeTransition } from 'react-3d-cube-transition'
import 'react-3d-cube-transition/dist/index.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {currentFace: "front"} 

    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
  }
  
  render () {
    return (
      <CubeTransition 
        face={this.state.currentFace}
        frontCSS={{background: "#000"}}
        rightCSS={{background: "#b43b6c"}}
        leftCSS={{background: "#5519c4"}}
        backCSS={{background: "#36d40e"}}
        topCSS={{background: "#14cccc"}}
        bottomCSS={{background: "#ad1616"}}
        frontPage={this._buttons()}
        leftPage={this._buttons()}
        rightPage={this._buttons()}
        backPage={this._buttons()}
        topPage={this._buttons()}
        bottomPage={this._buttons()}
        contentElevation={15}
        button={this._buttons()}
      />
    )
  }

  _buttons () {
    return (<div style={{height:"100%", width:"100%"}}>
      <div onClick={this.onPrevious} style={{position: "absolute", left: 0}}>Previous</div>
      <div onClick={this.onNext} style={{position: "absolute", right: 0}}>Next</div>
    </div>
    )
  } 

  onPrevious() {
    this.setState({currentFace: "left"});
  }

  onNext() {
    this.setState({currentFace: "top"});
  }
}

export default App 
