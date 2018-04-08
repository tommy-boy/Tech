import React from 'react'
import Divider from 'material-ui/Divider'
import VisitButtons from '../VisitButtons'
import styled from 'styled-components'
import Questions from '../../mock/surveyQuestions'

const Container = styled.div`
  display: block;
  width: 600px;
  height: auto;
  margin: 32px auto;
  padding-top: 8px;
  background-color: #FFFFFF;
`;

const Wrapper = styled.div`
  display: block;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
`;

const Header = styled.div`
  display: block; 
  text-align: center; 
  height: 122px;
  padding-top: 22px; 
`;

const Logo = styled.img`  
  flex: 0 0 96px; 
  height: 73px;
  margin-left: auto;
  margin-right: auto;  
  padding-top: 12px; 
  @media (min-width: 320px)and (max-width: 768px) {    
    max-width: 100%;  
  }
`;

const Salutation = styled.p`
  font-size: 1.0em;
  text-align: left;
  color: #4D4D4D;
  font-size: 20px;
  font-weight: 700;
`;

const ReplyText = styled.p`
  font-size: 1.0em;
  text-align: left;
  color: #4D4D4D;
`;

const FooterRS = styled.div`
  display: block;
  width: 600px;
  margin: 32px auto;
  font-size: 0.8em;
  text-align: center;
  color: #4D4D4D; 
`;

class SurveyThankYou extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {                   
      entity: Questions 
    }; 
  }
 
    render() { 
      const entity = this.state.entity[0];     
     /*  const data = this.props.entity.company.map((info, index) => {
        return (
          <div>
            <Logo src={info.logo}  /> 
            <Text key={index}>{info.name} | <a href="{info.url}">{info.url}</a></Text>
          </div>
        )
      });
      const address = this.props.entity.company.map(company => {
        return (
        <span>{company.address}</span>
        )
      }); */
          
    return (   
      <div>  
      <Container>
      <Header><Logo img src={entity.properties.headerLogoUri} /></Header>
        <Divider style={{backgroundColor:'#979797', height: 2}} />                                     
        <Wrapper>
          <Salutation> {entity.thankYouPages.salutation.value} </Salutation>          
          <ReplyText>               
          {entity.thankYouPages.bodyContent.value}
          </ReplyText>
          <VisitButtons />                               
        </Wrapper>                                                                                          
      </Container> 
      <FooterRS>
        4216 N Expressway 281 Edinburg, TX 78539 | 973.442.0500
      </FooterRS> 
    </div>
     
    );
  }
}

export default (SurveyThankYou)
