import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase';
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId, chatRef }) {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth);

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
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage:  user.photoURL
        });

        chatRef?.current.scrollIntoView({
            behaviour: 'smooth'
        });

        setInput('');
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={changeIt} placeholder={`Message #${channelName}`} />
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
