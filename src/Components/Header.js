import React from 'react'
import styled from "styled-components";

function Header() {
    return (
        <HeaderLeft>Hello bsdk</HeaderLeft>
    )
}

export default Header

const HeaderLeft = styled.div`
    color: black;
    font-size: large;
`;