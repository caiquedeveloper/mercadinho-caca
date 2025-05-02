import { useState } from 'react'
import Agua from  './assets/agua.png'
import gas from './assets/gas.png'
import './App.css'
import caca from './assets/caca.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <h1>Mercadinho do Caca</h1><img src={caca} alt="" />
    </header>

    <div className="itens">
      <div className="card">
          <img src={Agua} alt="" />
          <h1>
            agua vitalli/Açai
          </h1>
          <p>
            com galão: R$12,00
          </p>
          <p>
            sem galão: R$35,00
          </p>
          <button>
            Comprar agora
          </button>
          
      </div> 

      <div className="card">
          <img src={gas} alt="" />
          <h1>
        gas de caca
          </h1>
          <p>
            com butija: R$100,00
          </p>
          <p>
            sem butija: R$180,00
          </p>
          <button>
            comprar agora 
          
          </button>
      </div>
    </div>
    </>
  )
}

export default App
