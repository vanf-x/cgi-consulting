import React from 'react'
import "./Form.css"
import { Container, TextField, Button } from '@mui/material'

const Form = () => {
  return (
    <Container>
        <h1 >Comunícate con nosotros</h1>
        <div id='uno'>
            <TextField className="outlined-basic" label="Nombre" variant="outlined" type="text"/>
            <TextField className="outlined-basic" label="Correo Electronico" variant="outlined" type="email"/>
        </div>
        <div id='dos'>
            <TextField className="outlined-basic" label="Telefono" variant="outlined" type="tel"/>
            <TextField className="outlined-basic" label="Organizacion" variant="outlined" type="text"/>
        </div>
        <div id='tres'>
            <TextField label="Mensaje" variant="outlined" type="text"/>
        </div>
        <Button className="enviar" variant="contained">ENVIAR</Button>
    </Container>
  )
}

export default Form