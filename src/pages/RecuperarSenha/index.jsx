import React from 'react'

import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

import { ContainerLogin, LoginCenter } from '../styled'

import LoginImage from '../../utils/AltosLogin.png'



function RecuperarSenha(){
    return (
        <ContainerLogin>
            <LoginCenter>

                <Form className="form-signin text-center"> 
                    <img src={LoginImage} width='100' height='100'/>

                    <FormGroup controlId="form.email">
                        <Label>E-mail</Label>
                        <Input type="email" placeholder="Digite seu e-mail!" />
                    </FormGroup>

                    <p>Envie seu e-mail para recuperar a senha</p>

                   
                    <Button  outline color="dark" size="lg" className="mt2">Recuperar</Button>                             
                      
                </Form>

            </LoginCenter>           
        </ContainerLogin>
    )
}

export default RecuperarSenha