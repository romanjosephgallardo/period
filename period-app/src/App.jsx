import { useState } from 'react'
import Canvas from './components/Canvas/Canvas'
import DotControls from './components/DotControls/DotControls'
import Header from './components/Header/Header'
import ImageUpload from './components/ImageUpload/ImageUpload'

import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ImageUpload />
      <DotControls />
      <Canvas />
    </>
  )
}

export default App
