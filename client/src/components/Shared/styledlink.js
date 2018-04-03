import styled from 'styled-components';

const styles = `
  color: ${props => props.color ||  '#ffffff'};
  margin-left: 0;
  margin-top: 4px;
  text-align: left;   
  padding-left: 1%;
  opacity: .75;
  text-decoration: none;
`;

const StyledLink = styled.span`
  ${styles}  
  &:hover {
    opacity: 1;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default StyledLink;