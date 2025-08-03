import { useState } from 'react'
import Canvas from './components/Canvas/Canvas'
import DotControls from './components/DotControls/DotControls'
import Header from './components/Header/Header'
import ImageUpload from './components/ImageUpload/ImageUpload'

import './App.css'
import './index.css'

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };

  return (
    <>
      <Header />
      <ImageUpload 
        onImageUpload={handleImageUpload}
        hasImage={!!uploadedImage}
        uploadedImage={uploadedImage}
      />
      <DotControls />
      <Canvas />
    </>
  )
}

export default App