import React from 'react'
import styled from 'styled-components'
import facebookIcon from '../Shared/icons/Facebook.png'

const Icon = styled.img`
    margin-right: 8px;
    padding-left: 8px;    
    padding-right: 8px;
    border-right: 1px solid #ffffff;
    vertical-align: middle;
`;

export default () => <Icon src={facebookIcon} />
