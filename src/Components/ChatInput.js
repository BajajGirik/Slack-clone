import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput({ }) {
    const sendMessage = e => {
        e.preventDefault();
    }

    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message #ROOM`} />
                <Button type='submit' onClick={sendMessage} hidden>Send</Button>
            </form>    
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    
    >form {
        display: flex;
        justify-content: center;
    }

    >form > input {
        outline: none;
        padding:1em;
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: solid 1px gray;
        border-radius: 5px;
    }

    >form > button {
        display: none !important;
    }
`;
