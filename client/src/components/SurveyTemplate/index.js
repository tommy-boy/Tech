import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Questions from '../../mock/surveyQuestions' //will be removed
import { fetchSurveyData } from '../../actions/getSurvey'
/* import { submitSurvey } from '../../actions/submitSurvey' */
import { addFeedback } from '../../actions/addFeedback'
import Divider from 'material-ui/Divider'
import { Button } from 'material-ui'
import RatingOverall from '../SurveyRatingOverall'
import RatingReferral from '../SurveyRatingReferral'
import FreeText from '../SurveyFreeText'
import TOSCheckbox from '../SurveyCheckbox'
import Terms from '../SurveyTermsOfUse'
import Loader from '../RefreshIndicator'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  width: 600px;
  height: auto;
  margin: 32px auto; 
  background-color: #FFFFFF;

  @media (min-width: 320px)and (max-width: 768px) {    
    width: 100%;
    margin: 12px auto;
  }
`;

const Wrapper = styled.div` 
  padding-top: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 0px;
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

const TextBox = styled.div`
  border: 1px solid #828282;
  padding: 10px;
`;

const Text = styled.span`
  padding-right: 4px;
  text-align: justify;  
  font-size: 0.9em; 
  line-height: normal;  
  vertical-align: middle;  
  color: #4D4D4D;    
`;

const SurveyText = styled.p`
  font-size: 1.0em;
  color: #4D4D4D;
`;

const Overall = styled.div` 
  width: 192px;
  padding-top: 14px;  
  padding-left: 6px;  
  font-size: 0.9em;
  margin-bottom: 0;
  color: #4D4D4D;
  & span:last-of-type {
    float: right;
  }
`;

const ColLeft = styled.div`
  display: inline-block;
  text-align: left; 
  width: 80%;
`;

const ColRight = styled.div`   
  float: right;
  text-align: right;
  @media (min-width: 320px)and (max-width: 768px) {    
    display: block;
    width: 100%;
    text-align: center;
    float: none;
  }  
`;

const Label = styled.label`
  display: inline-flex;
  color: #4D4D4D;
  font-size: 1.1em;
  padding-top: 30px;
  & span {
    padding-left: 4px;
  }
`;

const Footer = styled.div`
  display: inline-block;  
  padding-bottom: 20px;
  width: 100%; 
  @media (min-width: 320px)and (max-width: 768px) {     
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;    
    text-align: center;  
  }
`;

const FooterRS = styled.div`
  display: block;
  width: 600px;
  margin: 32px auto;
  font-size: 0.8em;
  text-align: center;
  color: #4D4D4D; 
`;

const styles = {
  root: {
    flexGrow: 1,
  },
  block: {
    display: 'inline',
  },
  submitbutton: {
    color: '#ffffff',
    backgroundColor: "#094AA8",
    hoverColor: "#063679",
    width: '98px',
    height: '43px',
    verticalAlign: 'middle',
  },
  freeText: {
    color: '#ffffff',
    backgroundColor: "#094AA8",
    hoverColor: "#063679",
    width: '98px',
    height: '43px',
    verticalAlign: 'middle',
  },
};

class SurveyTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      survey: [],
      entity: Questions
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount(props) {
    const { fetchSurveyData, surveyId } = this.props;
    console.log(this.props);
    /* fetchSurveyData(parseInt(props.match.params.number)).then(survey => {
      this.setState({survey});
    }) */
  }

  handleFormSubmit(formValues) {

    //handle submit dispatch    
    //this.props.dispatch(submitSurvey(formValues));

    if (this.props.isLoading) {
      return <Loader />
    }
    
    if (formValues.rating_overall > 3) {
      const path = '/plus'; 
      return (
        this.props.dispatch(addFeedback(formValues.postiveFeedback__input_didwell)),
        this.props.history.push(path)
      )
    } else {  
      const path = '/minus';     
      return (
        this.props.dispatch(addFeedback(formValues.postiveFeedback_input_didwell)),
        this.props.history.push(path)
      )
    }
  }
  
  render() {
    const { handleSubmit } = this.props;
    const entity = this.state.entity[0];

    const sections = entity.questions.map((question, i) => {
      switch (question.questionDescriptor) {
        case 'Star5':
          return (
            <div key={i}>
              <Label>
                {i + 1}. <span>{question.label.value}</span>
              </Label>
              <Overall >
                <span>Poor</span>
                <span style={{color:'#094AA8', fontWeight:700}}>Excellent</span>
                <RatingOverall />
              </Overall>              
            </div>
          )
        case 'OptionGroup':
          return (
            <div key={i}>
              <Label >
                {i + 1}. <span>{question.label.value}</span>
              </Label>
                <RatingReferral />              
            </div>
          )
        case 'FreeText':
          return (
            <div key={i} >
              <Label style={{paddingBottom: 4}}>
                {i + 1}. <span>{question.label.value}</span>
              </Label>
              <TextBox>
                <FreeText id={question.context} />
              </TextBox>
            </div>
          )
        default:
          break;
      }
      return sections
    });

    return (
      <div>
        {this.state.entity ?
        <div>           
          <Container>
            <Header><Logo img src={entity.properties.headerLogoUri} /></Header>
            <Divider style={{ backgroundColor: '#979797', height: 2 }} />
            <Wrapper>
              <SurveyText>{entity.properties.introText.value} </SurveyText>
              <form id="surveyForm" onSubmit={handleSubmit(this.handleFormSubmit)} >
                {sections}
                <Divider style={{ backgroundColor: '#979797', height: 2, marginTop: 48, marginBottom: 32 }} />
                <Footer>
                  <ColLeft>
                    <TOSCheckbox />                  
                    <Text>{entity.properties.finePrintText.value}</Text>
                    <Terms />
                  </ColLeft>
                  <ColRight>
                    <Button style={styles.submitbutton} label="Submit" type="submit" form="surveyForm">Submit</Button>
                  </ColRight>                
                </Footer>
              </form>
            </Wrapper>
          </Container>
          <FooterRS>
            4216 N Expressway 281 Edinburg, TX 78539 | 973.442.0500
          </FooterRS>
          </div> : 
          <div>You need to provide id=... in the query string.</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
 /*  surveyId: this.state.surveyId */
});

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: bindActionCreators(addFeedback, dispatch),
    fetchSurveyData: bindActionCreators(fetchSurveyData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'surveyForm',
  fields: ['positiveFeedback', 'rating_overall', 'rating_referral', 'acceptTermsAndConditions'],
  initialValues: {
    rating_overall: 5,
    rating_referral: 10,
    acceptTermsAndConditions: true,
  },
  enableReinitialize: true
},
)(SurveyTemplate));
