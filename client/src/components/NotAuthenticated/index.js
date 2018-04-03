import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';

const NavBar = styled.div`
    display: flex;
    width: 100%;
    height: 84.53px;
    padding: 1rem 0 .65625rem;
    background: #4D4D4D;
`;

const Message = styled.span`
    margin-right: 1%;
`;

function NotAuthenticated (props) {
    return (
        <NavBar>
            <Message>Not Authenticated.</Message>
            <Link href='/auth/sign-in'><a>Sign In</a></Link>
        </NavBar>
    )
}

export default NotAuthenticated