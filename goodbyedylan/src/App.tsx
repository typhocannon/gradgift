import './App.css'
import { BackgroundGradientAnimation } from './components/background-gradient-animation'
function App() {

  return (
      <div className="w-screen v-screen">
      <BackgroundGradientAnimation>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
      </BackgroundGradientAnimation>
      </div>
  )
}

export default App
