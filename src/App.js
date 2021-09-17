import './App.css'
import AnimationFramer from './components/AnimationFramer'
import ButtonFramer from './components/ButtonFramer'
import Hr from './components/Hr'
import PhotoView from './components/Examples/PhotoView'

function App() {
  return (
    <div className="App">
      <AnimationFramer />
      <Hr />
      <ButtonFramer />
      <PhotoView />
    </div>
  )
}

export default App
