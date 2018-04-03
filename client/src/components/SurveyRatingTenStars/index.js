import React, { Component } from 'react'
import { Field } from 'redux-form'
import styled, {ThemeProvider} from 'styled-components'
import SurveyRating from 'react-stars'

const renderReferralRating = ({
  input,
  meta: { touched, error },
}) => (
  <SurveyRating
    value={input.value}
    onChange={(event, value) => {input.onChange(event, value)}} 
    count={10}        
    size={46}
    half={false}
    color2={'#094AA8'}      
    {...input.value}
  />
)

  class ReferralRating extends React.Component {
  
    constructor(props) {
      super(props);
    }

    render() {
      return (  
        <Field name="referralRating" component={renderReferralRating} />
      )
    }
}

export default (ReferralRating);