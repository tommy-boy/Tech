import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'
import styled, {ThemeProvider} from 'styled-components'
import { TextField } from 'material-ui';

const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  padding: 0;
`;

const styles = {
  textField: {
    marginBottom: 30,
    height: 80,
    width: '100%',
    padding: 0,
    display: 'block',
    textAlign: 'left',    
    'label + &': {
      marginTop: 12,
    },    
  },
  textFieldInput: {    
    borderRadius: 2,
    border: '1px solid #9B9B9B',
    fontSize: '1.0em',
    padding: '0px 12px',
    width: 'calc(100% - 26px)',
    transition: 'width 2s, height 2s, background-color 2s, transform 2s',
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },    
  hintTextStyle: {
    top: 10,
    left: 12,
    fontSize: '0.85em',
    color: 'rgba(0,0,0,0.38)'
  }
};

class FeedbackInput extends React.Component {
  
    constructor(props) {
      super(props);

      this.state = {            
        copied: false,
      };     
    }
    render() {                  
      return (
        <div> 
          <form id='feedbackForm'> 
            <Fieldset disabled>                          
              <TextField
                name="positiveFeedback"              
                style={styles.textField} 
                defaultValue={this.props.positiveFeedback}                         
                underlineShow={false}
                placeholder=""
                hintStyle={styles.hintTextStyle}
                multiLine={true}
                rows={4}
                rowsMax={8}
                fullWidth={true}
                inputStyle = {styles.textFieldInput}                                    
              />                
            </Fieldset>
          </form> 
        </div>          
      )
    }
}

const mapStateToProps = (state) => ({
  positiveFeedback: state.positiveFeedback
});

export default connect(mapStateToProps)(FeedbackInput)