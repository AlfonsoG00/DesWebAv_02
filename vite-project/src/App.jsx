import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headernav from './Header.jsx'
import './CCS/backgroundcss.css'
import Nosotros from './Nosotros.jsx'
import Proceso from './Proceso.jsx'
import Home from './Home.jsx'
import Pie from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <div className='headerapp'>
          <Headernav/>
          <Home/>
        </div>
        <div className='fondocomp'>
        </div>
        </body>
        <Pie/>
      </>
  )
}

export default App
