import React from 'react'
import "./Form.css"
import { Container, TextField, Button } from '@mui/material'

const Form = () => {
  return (
    <Container>
      <h1 className='titleForm'>Comunícate con nosotros</h1>
      <form action="https://formsubmit.co/info@cgiconsulting.co" method="POST" className='containerInputs'>
        <TextField className="outlined-basic-nombre" label="Nombre" name="Nombre" variant="outlined" type="text"/>
        <TextField className="outlined-basic-correo" label="Correo Electronico" name="email" variant="outlined" type="email"/>
        <TextField className="outlined-basic-tel" label="Telefono" name="Telefono" variant="outlined" type="tel"/>
        <TextField className="outlined-basic-org" label="Organizacion" name="Organizacion" variant="outlined" type="text"/>
        <TextField className="outlined-basic-mensaje" label="Mensaje" name="Mensaje" variant="outlined" type="text"/>
        <Button className="send" variant="contained" type='submit'>ENVIAR</Button> 
        <input type="hidden" name="_next" value="http://localhost:3000/contacto"></input>
        <input type="hidden" name="_captcha" value="false"></input>
      </form>
    </Container>
  )
}

export default Form