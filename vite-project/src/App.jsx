import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Headernav from './Header.jsx'
import './CCS/backgroundcss.css'
import Nosotros from './Nosotros.jsx'
import Proceso from './Proceso.jsx'
import Home from './Home.jsx'
import Pie from './Footer.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <BrowserRouter>

        <Headernav/>
        <div className='headerapp'>
          <Routes>
            <Route path = "/home" element = {<Home/>} />
            <Route path = "/proceso" element = {<Proceso/>} />
            <Route path = "/nosotros" element = {<Nosotros/>} />
          </Routes>
        </div>
        <div className='fondocomp'>
        </div>
        </BrowserRouter>
        </body>
        <Pie/>
      </>
  )
}

export default App
