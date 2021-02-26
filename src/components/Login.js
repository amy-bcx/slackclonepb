import React from 'react'
import styled from 'styled-components'
import {auth, provider} from '../firebase'

function Login(props) {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
            name:result.user.displayName,
            photo: result.user.photoURL,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
        props.setUser(newUser);
        })
        .catch((error) => {
            alert(error.message)
        })

    }
    return (
        <Container>
            <Content>
                <SlackImg src="https://s1.qwant.com/thumbr/0x0/2/d/987c10c76bcfec2983e9cef0e841798e173ee168cfc03da9ddb5e01d83b87f/AAuE7mDBBS00E88tbJONrBTNiWDBhHSfBKSM3889QA=s900-mo-c-c0xffffffff-rj-k-no.jpg?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mDBBS00E88tbJONrBTNiWDBhHSfBKSM3889QA%3Ds900-mo-c-c0xffffffff-rj-k-no&q=0&b=1&p=0&a=1" />
                <h1>Sign in Slakc</h1>
                <SignInButton onClick={()=>signIn()}>
                    Sign in With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
width: 100;
height: 100vh;
background-color: #f8f8f8;
display: flex;
justify-content: center;
align-items: center;
`

const Content = styled.div`
background: white;
padding: 100px;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 / 24%);

`

const SlackImg = styled.img`

height: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #0a8d48;
    color: white;
    border: none;
    height: 40px;
    border-radius: 40px;
    cursor: pointer;
    font-size: 15px;

`