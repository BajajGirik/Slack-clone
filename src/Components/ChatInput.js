import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function ChatInput({ }) {
    const sendMessage = () => {
    }
    
    return (
        <ChatInputContainer>
            <input placeholder={`Message #ROOM`} />
            <Button type='submit' onClick={sendMessage} hidden>Send</Button>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div``;