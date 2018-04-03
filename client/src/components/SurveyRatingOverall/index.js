import React, { Component } from 'react'
import { Field } from 'redux-form'
import styled, {ThemeProvider} from 'styled-components'
import SurveyRating from 'react-stars'

const renderReviewRating = ({
    input,
    meta: { touched, error },
  }) => (
    <SurveyRating
      value={input.value}
      onChange={(event, value) => {input.onChange(event, value)}} 
      count={5}        
      size={46}
      half={false}
      color2={'#094AA8'}
      {...input.value}
    />
  )

  class RatingOverall extends React.Component {
  
    constructor(props) {
      super(props);
    }

    render() {
    
      return (
        <Field name="rating_overall" component={renderReviewRating} />
      )
    }
}

export default (RatingOverall);