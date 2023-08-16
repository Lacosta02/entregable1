import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  
  const [nombre, setNombre] = useState('')
  const [mascota, setMascota] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nombre.length >= 3 && nombre.trim() == nombre && mascota.length >= 6) {
      setMostrar(true)
      setError(false)
    }else{
      setMostrar(false)
      setError('Por favor chequea que la información sea correcta')
    }
  }

  return(
    <div className='App'>
      <Form handleSubmit={handleSubmit} setNombre={setNombre} nombre={nombre} setMascota={setMascota} mascota={mascota}/>
      {mostrar &&<Card nombre={nombre} mascota={mascota}/>}
      {error && <h3>{error}</h3>}
    </div>
  )
}

export default App
