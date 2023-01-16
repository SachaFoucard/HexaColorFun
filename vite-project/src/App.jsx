import { useState } from 'react'
import Input from './Components/Input'
import Square from './Components/Square'
import './styles/index.css'


function App() {
  const [colorValue, setColorValue] = useState('');
  const [HexValue, setHexValue] = useState('');
  const [isDarkText,setisDarkText]=useState(true)

  return (
    <>
      <Square colorValue={colorValue}
        HexValue={HexValue}
        isDarkText={isDarkText}
      />
      <Input colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setisDarkText={setisDarkText}
      />
    </>
  )
}

export default App
