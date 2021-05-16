import styled from 'styled-components'

export const ContainerLogin = styled.div`
    background-color: black;
    width:100%;
    height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;


`;

export const LoginCenter = styled.div`
    width:25rem;
    height:25rem;
    background-color:#fff;
    border-radius:10px;
    display:flex;
    justify-content:center;


    @media all and (max-width: 480px){
        .login{
            padding:0.8rem;
            width:20rem;
            height:20rem;
        }
    }
    Label{
        margin:0.3rem;
        color:black;
    }

    Button{
        padding:0.5rem;
        margin-top:1rem;
        margin-bottom:1rem;
        width:100%;       
        
    }
    

`;
