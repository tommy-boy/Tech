import React from 'react'
import { Field } from 'redux-form'
import { TextField } from 'material-ui'

const styles = {        
  textField: {
    textAlign: 'left',    
    'label + &': {
      marginTop: 12,
      marginLeft: 12
    },    
  },    
};

const renderFreeText = ({
  input,
  meta: { touched, error },
}) => (
  <TextField                        
    style={styles.textField} 
    placeholder="Write your comments here..."
    multiline
    rows={4}
    rowsMax={8}
    fullWidth={true}
    {...input}
  />
)

class FreeText extends React.Component {
  
    render() {
      return (  
        <Field name={`postiveFeedback_${this.props.id}`} component={renderFreeText} type="text" />
      )
    }
}

export default (FreeText);
