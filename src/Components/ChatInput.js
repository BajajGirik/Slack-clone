import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import firebase from 'firebase'

function ChatInput({channelName, channelId }) {
    const [input, setInput] = useState('');
    
    const changeIt = e => {
        setInput(e.target.value);
    }

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={changeIt} placeholder={`Message #ROOM`} />
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
