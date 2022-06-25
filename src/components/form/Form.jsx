import React from 'react'
import "./Form.css"
import { Container, TextField, Button } from '@mui/material'

const Form = () => {
  return (
    <Container>
        <h1 >Comunícate con nosotros</h1>
        <div className='containerInputs'>
            <TextField id="nombre" className="outlined-basic" label="Nombre" variant="outlined" type="text"/>
            <TextField id='correo' className="outlined-basic" label="Correo Electronico" variant="outlined" type="email"/>
            <TextField id='tel' className="outlined-basic" label="Telefono" variant="outlined" type="tel"/>
            <TextField id='org' className="outlined-basic" label="Organizacion" variant="outlined" type="text"/>
            <TextField id='mensaje' className="outlined-basic-mensaje" label="Mensaje" variant="outlined" type="text"/>
            <Button className="enviar" variant="contained">ENVIAR</Button>
        </div>
        
    </Container>
  )
}

export default Form