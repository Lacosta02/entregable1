/* eslint-disable react/prop-types */
const Form = (props) => {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
            <label>Nombre: </label>
            <input type='text' value={props.nombre} placeholder="Ingresa tu nombre" onChange={(e)=> props.setNombre(e.target.value)}></input>
            <label>Mascota: </label>
            <input type="text" value={props.mascota} placeholder="Mascota preferida" onChange={(e)=> props.setMascota(e.target.value)}></input>

            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form