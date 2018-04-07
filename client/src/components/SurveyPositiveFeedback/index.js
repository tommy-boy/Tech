import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import changeClipboardValue from '../../actions/changeClipboardValue'
import Feedback from '../SurveyFeedbackInput';
import ShareButtons from '../SurveyShareButtons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from 'material-ui';
import Divider from 'material-ui/Divider';
import { ContentCopy } from 'material-ui-icons';
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
  @media (min-width: 320px)and (max-width: 768px) {    
    max-width: 100%;  
  }
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

const ColRight = styled.div`
  float: right;  
  vertical-align: top;
`;

const Footer = styled.div`
  display: block; 
  &::after {
    content: "";
    clear: both;
    display: table;
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
  flatbutton: {
    color: '#FFFFFF',
    marginBottom: 22,
    width: '32%',
    backgroundColor: "#094AA8",         
    hoverColor: 'transparent',
    verticalAlign: 'middle',
    textAlign: 'center',
    float: 'right'   
  },
  title: {  
    color: '#FFFFFF',      
  },
};

class SurveyPositiveFeedback extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entity: Questions,
      copied: false
    }
  }

  onCopy = () => {
    this.setState({ copied: true });
  }

  render() {
    const entity = this.state.entity[0];
    return (
      <div>        
      <Container>
        <Header><Logo img src={entity.properties.headerLogoUri} /></Header>
        <Divider style={{backgroundColor:'#979797', height: 2}} />                                     
        <Wrapper>
          <Salutation> {entity.feedbackPages.positive.salutation.value} </Salutation>
          <SurveyText>{entity.properties.introText.value} </SurveyText>
          <SurveyText> {entity.feedbackPages.positive.body.value} </SurveyText>
          <Feedback />
          <CopyToClipboard 
            text={this.props.copiedText} 
            onCopy={this.onCopy}
          >
          <Button 
                style={styles.flatbutton} 
                label="Copy to Clipboard"
                labelPosition="after"
                icon={<ContentCopy />}
              />
          </CopyToClipboard>
          <ShareButtons />
          <SurveyText>               
            Click <span style={{color:'#3B5998'}}>DONE</span> when complete. Super easy. And we really appreciate it!
          </SurveyText>   
          <Divider style={{backgroundColor:'#979797', height: 2, marginTop:32, marginBottom:32}} />
          <Footer>                                                                            
            <ColRight>
            <Link href='/thankyou'>
              <a>     
                <Button
                  style={styles.flatbutton}
                  label="DONE"
                  primary={true}
                  type="submit"                                     
                />
              </a>
            </Link>
            </ColRight>           
          </Footer>         
        </Wrapper>         
      </Container>
      <FooterRS>
        4216 N Expressway 281 Edinburg, TX 78539 | 973.442.0500
      </FooterRS> 
      </div>       
    );
  }
}

const mapStateToProps = ({ positiveFeedback }) => ({    
  copiedText: positiveFeedback   
})

const mapDispatchToProps = dispatch => ({
  actionOnCopy: newValue => {
      dispatch(changeClipboardValue(newValue))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPositiveFeedback)
