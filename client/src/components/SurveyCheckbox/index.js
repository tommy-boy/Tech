import React from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'material-ui';

const styles = {
    checkbox: {
        float: 'left',
        display:'inline-block',         
        verticalAlign: 'middle',        
        width: 46,
        height: 92        
    },
    iconStyle: {
        width: 24,
        height: 24,
        fill: '#094AA8'
    },
};

const SurveyCheckbox = () => {
    const renderSurveyCheckbox = ({ input }) => (
        <Checkbox
            checked={input.value ? true : false}
            onCheck={input.onChange}
            style={styles.checkbox}
            iconStyle={styles.iconStyle}
            color="#094AA8"
        />
    );
    return (
        <Field name="acceptTermsAndConditions" component={renderSurveyCheckbox} />
    )
}

export default SurveyCheckbox;