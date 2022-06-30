import React from 'react'
import "./Form.css"
import { Container, TextField, Button } from '@mui/material'

const Form = () => {
  return (
    <Container>
      <h1 className='titleForm'>Comunícate con nosotros</h1>
      <div className='containerInputs'>
          <TextField className="outlined-basic-nombre" label="Nombre" variant="outlined" type="text"/>
          <TextField className="outlined-basic-correo" label="Correo Electronico" variant="outlined" type="email"/>
          <TextField className="outlined-basic-tel" label="Telefono" variant="outlined" type="tel"/>
          <TextField className="outlined-basic-org" label="Organizacion" variant="outlined" type="text"/>
          <TextField className="outlined-basic-mensaje" label="Mensaje" variant="outlined" type="text"/>
          <Button className="enviar" variant="contained">ENVIAR</Button>
      </div>
    </Container>
  )
}

export default Form