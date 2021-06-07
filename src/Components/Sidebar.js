import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import styled from 'styled-components'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarTop>
                <SidebarText>
                    <h2>USICT HQ</h2>
                    <h3><FiberManualRecordIcon /> Girik Bajaj</h3>
                </SidebarText>
            </SidebarTop>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    flex: 0.3;
`;
const SidebarTop = styled.div``;
const SidebarText = styled.div``;

