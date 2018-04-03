import React from 'react'
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import Survey from '../../mock/surveyQuestions';
import Divider from 'material-ui/Divider';
import { FlatButton } from 'material-ui';
import { HelpOutline } from 'material-ui-icons'
import styled, {ThemeProvider} from 'styled-components';
import StarRating from '~/StarRating'
import SelectOptions from '~/SurveySelectOption'
import TextInput from '~/SurveyTextInput'

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
  height: 146px; 
`;

const Logo = styled.img`  
  flex: 0 0 96px; 
  height: 73px;
  margin-left: auto;
  margin-right: auto;  
  padding-top: 12px; 
`;

const Text = styled.div`
  color: #4D4D4D;
  font-size: 0.8em; 
  line-height: normal;
  text-align: center;
  vertical-align: middle;
`;

const Footer = styled.div`
  display: block; 
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const EmailText = styled.p`
  font-size: 0.9em;
  text-align: left;
  color: #4D4D4D;
`;

const ColMiddle = styled.div`
  display: block;
  padding-top: 24px;
  text-align: center;    
  font-size: 0.8em;
  font-family: Roboto;
  color: #4D4D4D;
`;

const Label = styled.label`
  display: inline-flex;
  color: #4D4D4D;
  font-size: 1.1em;
  padding-top: 30px;
`;

const styles = {  
  flatbutton: {    
    color: '#ffffff',
    backgroundColor: "#094AA8",
    hoverColor: "#063679",
    width: '155px',
    height: '43px',
    borderRadius: '2px',
    textAlign: 'center',
    verticalAlign: 'middle',
  },  
  icon: {
    width: 20,
    height: 20
  },
  iconStyle: {
    width: 24,
    height: 24,
    fill: '#094AA8'
  },
  errorStyle: {
    color: 'orange500',
  },
  textField: {
    height: 80,
    width: '100%',
    padding: 0,
    display: 'block',
    textAlign: 'left',    
    'label + &': {
      marginTop: 12,
    },    
  },
};

class SurveyEmail extends React.Component {
  
    constructor(props, context) {
      super(props, context);

      this.state = {
        surveyid: 1,       
      };     
    }

    componentDidMount() {      
   
    }
 
    render() {
      const customer = this.props.entity.customer.map((person, index) => {
        return (
          <EmailText key={index}>{person.firstname},</EmailText>
        )
      });
      const data = this.props.entity.company.map((info, index) => {
        return (
          <div>
            <Logo src={info.logo}  /> 
            <Text key={index}>{info.name} | <a href="{info.url}">{info.url}</a></Text>
          </div>
        )
      });
      const entity = this.props.entity.company.map(company => {
        return (
        <span>{company.name}</span>
        )
      });
          
    return (     
      <Container>
        <Header>
          {data}
        </Header>
        <Divider style={{backgroundColor:'#979797', height: 2}} />                                     
        <Wrapper>
          {customer}
          <EmailText>               
            On behalf of everyone at {entity} we thank you for being our valued customer.<br /><br />
            We are always looking for ways to improve, and we'd like to get your feedback on your<br />
            experience with us. It will take just a minute (really) to answer a couple of quick<br />
            questions. We would greatly appreciate it.<br /><br />
            Thank you!
          </EmailText>                                        
          <Divider style={{backgroundColor:'#979797', height: 2, marginTop:32,}} />          
          <Footer>                                                                          
            <ColMiddle>
            <Link href="/survey">
              <FlatButton              
                style={styles.flatbutton}
                label="LAUNCH SURVEY"
                primary={true}
                type="button"                                          
              />
            </Link>
            </ColMiddle>                  
          </Footer>
        </Wrapper>                                                                                          
      </Container>       
    );
  }
}

/* const mapStateToProps = (state: survey) => ({
    isSurvey: state.surveySetup.isSurvey
  });
  
export default connect(mapStateToProps)(Survey); */

export default (SurveyEmail);
