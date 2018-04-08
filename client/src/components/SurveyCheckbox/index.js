import React from 'react'
import { Field } from 'redux-form'
import { Checkbox } from 'material-ui'

const styles = {
    checkbox: {
        float: 'left',
        display:'inline-block',         
        verticalAlign: 'middle',        
        width: 46,
        height: 92        
    },
};

const SurveyCheckbox = () => {
    const renderSurveyCheckbox = ({ input }) => (
        <Checkbox
            color='primary'
            style={styles.checkbox}
            checked={input.value ? true : false}
            onChange={input.onChange}                    
        />
    );
    return (
        <Field name="acceptTermsAndConditions" component={renderSurveyCheckbox} />
    )
}

export default SurveyCheckbox;
