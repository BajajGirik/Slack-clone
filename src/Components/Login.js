import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';

function Login() {
    const signIn = e => {
        auth.signInWithPopup(provider).catch(
            (error) => alert(error.message)
        );
    }

    return (
        <LoginContainer>
            <LoginMid>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnhZtcTvJEkvuZMdTzjhPLvZGIQSo9nel4btx7j9rg=s900-c-k-c0x00ffffff-no-rj" alt="" />
                <h2>Slack</h2>
                <Button onClick={signIn}>Sign In</Button>
            </LoginMid>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginMid = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 10em;
    border-radius: 1em;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
    }

    >button {
        margin-top: 2em;
        padding: 0.7em 1.7em;
        background-color: #0a8d48 !important;
        color: white;
    }

`;