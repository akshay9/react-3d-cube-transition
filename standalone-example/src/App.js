import React from 'react'

import { CubeTransition } from 'react-3d-cube-transition'
import 'react-3d-cube-transition/dist/index.css'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Gallery from './Pages/Gallery';

import Home from './Pages/Home';
import Intro from './Pages/Intro';

class App extends React.Component {
  constructor() {
    super();

    this.state = {currentFace: "left"} 

    this._handleButtonClick = this._handleButtonClick.bind(this)
  }
  
  render () {
    return (
      <>
        <CubeTransition 
          className="cube-container"
          face={this.state.currentFace}
          frontCSS={{background: "#9d848f"}}
          rightCSS={{background: "#aa9583"}}
          leftCSS={{background: "#aa9583"}}
          backCSS={{background: "#aa9583"}}
          topCSS={{background: "#aa9583"}}
          bottomCSS={{background: "#aa9583"}}
          frontPage={(<Home />)}
          leftPage={<Intro />}
          rightPage={<Features />}
          backPage={<About />}
          topPage={<Gallery />}
          bottomPage={<Contact />}
          contentElevation={0}
        />
        <div style={{position: "absolute", bottom: "5vh", width:"100vw", transform: "translateX(20%)"}}>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("front"))}>Home</button>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("left"))}>Bio</button>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("right"))}>Features</button>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("back"))}>About</button>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("top"))}>Gallery</button>
          <button style={{margin: 10}} onClick={() => (this._handleButtonClick("bottom"))}>Contact</button>
        </div>
      </>
    )
  }

  _handleButtonClick(face) {
    this.setState({currentFace: face});
  }
}

export default App 
