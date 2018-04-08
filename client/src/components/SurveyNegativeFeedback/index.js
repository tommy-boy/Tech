import React from 'react'
import { connect } from 'react-redux'
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import Questions from '../../mock/surveyQuestions'

const Container = styled.div`
  display: block;
  width: 600px;
  height: auto;
  margin: 32px auto;
  padding-top: 8px;
  background-color: #FFFFFF;
  @media (min-width: 320px) 
  and (max-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    width: 100%;
    margin: 12px auto;
  }
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
`;

const Salutation = styled.p`
  font-size: 1.0em;
  text-align: left;
  color: #4D4D4D;
`;

const SurveyText = styled.p`
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

class SurveyNegativeFeedback extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {                   
      entity: Questions 
    }; 
  }
 
    render() {
      const entity = this.state.entity[0];
      /*
      const entity = this.props.entity.company.map(company => {
        return (
        <span>{company.name}</span>
        )
      }); */
          
    return ( 
      <div>    
      <Container>
        <Header><Logo img src={entity.properties.headerLogoUri} /></Header>
        <Divider style={{backgroundColor:'#979797', height: 2}} />                                     
        <Wrapper>
          <Salutation> {entity.feedbackPages.negative.salutation.value} </Salutation>
          <SurveyText>{entity.properties.introText.value} </SurveyText>
          <SurveyText> {entity.feedbackPages.negative.body.value} </SurveyText>                                        
        </Wrapper>                                                                                          
      </Container>
      <FooterRS>
        4216 N Expressway 281 Edinburg, TX 78539 | 973.442.0500
      </FooterRS> 
      </div> 
    );
  }
}

const mapStateToProps = (state) => ({
   
  });
  
export default connect(mapStateToProps)(SurveyNegativeFeedback)

