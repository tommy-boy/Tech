import styled from 'styled-components';

const Button = styled.button`  
  border-radius: 2px;
  cursor: pointer; 
  font-size: 1em; 
  padding: .8em;
  transition: all .25s;
  text-transform: uppercase;
  color: ${props => props.theme.buttonDefaultColor};
  background-color: ${props => props.theme.buttonDefaultBackgroundColor};
  border: 1px solid ${props => props.theme.buttonDefaultBorderColor};
    &.primary {
      color: ${props => props.theme.buttonPrimaryColor};
      background-color: ${props => props.theme.buttonPrimaryBackgroundColor};
      border: 1px solid ${props => props.theme.buttonPrimaryBorderColor};
    }
    &.secondary {
      color: ${props => props.theme.buttonSecondaryColor};
      background-color: ${props => props.theme.buttonSecondaryBackgroundColor};
      border: 1px solid ${props => props.theme.buttonSecondaryBorderColor};
    }
    &:hover {
      color: ${props => props.theme.buttonPrimaryBackgroundColor};
      background-color: ${props => props.theme.buttonPrimaryColor};     
      border: 1px solid ${props => props.theme.buttonPrimaryBordercolor};
    }
`;

export default Button;