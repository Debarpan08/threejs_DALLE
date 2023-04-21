import Canvas from "./Canvas"
import Customizer from "./Customizer"
import Home from "./Home"


function App() { 
  return (
    <div className="app transition-all ease-in">
     <Home/>
     <Customizer/>
     <Canvas/>
    </div>
  )
}

export default App
