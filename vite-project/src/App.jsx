import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headernav from './Header.jsx'
import './CCS/backgroundcss.css'
import Nosotros from './Nosotros.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <div className='headerapp'>
          <Nosotros/>
        </div>
        <div className='fondocomp'>
          <p>Hola</p>
        </div>
        </body>
    </>
  )
}

export default App
