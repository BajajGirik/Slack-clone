import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import styled from "styled-components";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTimeIcon />
            </HeaderLeft>

            <HeaderMid>
                <SearchIcon />
                <input placeholder="Search" />
            </HeaderMid>

            <HeaderRight></HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0px;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.7em 1.2em;
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderMid = styled.div`
    color: gray;
    background-color: #421f44;
    flex: 0.4;
    display:flex;
    text-align: center;
    padding: 0 50px;
    border: solid 1px gray;
    border-radius: 7px;

    > input {
        background-color: transparent;
        outline: none;
        border: none;
        min-width: 30vw;
        text-align: center;
        color: white;
    }
`;
const HeaderRight = styled.div`
    display: flex;
`;