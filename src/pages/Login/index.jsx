import React from 'react'

import { Form, FormGroup, Label, Input, Button} from 'reactstrap'

import { ContainerLogin, LoginCenter } from '../styled'

import LoginImage from '../../utils/AltosLogin.png'



function Login(){
    return (
        <ContainerLogin>
            <LoginCenter>

                <Form className="form-signin text-center"> 
                    <img src={LoginImage} width='100' height='100'/>

                    <FormGroup controlId="form.email">
                        <Label>E-mail</Label>
                        <Input type="email" placeholder="Digite seu e-mail!" />
                    </FormGroup>

                    <FormGroup controlId="form.senha">
                        <Label>Senha</Label>
                        <Input type="password" placeholder="Digite sua senha!" />
                    </FormGroup>

                    <Button  outline color="dark" size="lg" className="mt2">Acessar</Button>   

                    <p>Esqueceu a senha?</p>             
                      
                </Form>

            </LoginCenter>           
        </ContainerLogin>
    )
}

export default Login