import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { TextField } from 'material-ui';

const Fieldset = styled.fieldset`
  width: 100%;
  border: 0;
  padding: 0;
`;

const styles = {        
  textField: {
    textAlign: 'left',    
    'label + &': {
      marginTop: 12,
      marginLeft: 12
    },    
  },    
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
                placeholder=""
                multiline              
                rows={4}
                rowsMax={8}
                fullWidth={true}                                                 
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
