import styled from 'styled-components';

const WidgetSize = styled.div`
display: inline-block;
${props => props.small && 'width: 270px;height: 270px' }
${props => props.medium && 'width: 600px;height: 400px' }
${props => props.large && 'width: 1200px;height: 400px' }
`;

export default WidgetSize;