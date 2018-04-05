import React, { Component } from 'react'
import { Field } from 'redux-form'
import styled, {ThemeProvider} from 'styled-components'
import { TextField } from 'material-ui';

const styles = {        
    textField: {
      width: '80%',
      paddingTop: 10,
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
      width: 'calc(100% - 24px)',
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

const renderFreeText = ({
  input,
  meta: { touched, error },
}) => (
  <TextField                        
    style={styles.textField} 
    underlineShow={false}
    placeholder="Write your comments here..."
    hintStyle={styles.hintTextStyle}
    multiLine={true}
    rows={4}
    rowsMax={8}
    fullWidth={true}
    inputStyle={styles.textFieldInput}
    {...input}
  />
)

class FreeText extends React.Component {
  
    constructor(props) {
      super(props);
    }

    render() {
      return (  
        <Field name={`postiveFeedback_${this.props.id}`} component={renderFreeText} type="text" />
      )
    }
}

export default (FreeText);