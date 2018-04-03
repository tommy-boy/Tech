import { combineReducers } from 'redux'
import userAgent from './userAgent'
import { reducer as formReducer } from 'redux-form'
import { surveyDataSuccess, entityDataSuccess, surveyIsLoading, surveyHasErrored } from './getSurvey'
import { submitData } from './submitSurvey'
import { positiveFeedback } from './addFeedback'
import clipboard from './clipboard'

const rootReducer = combineReducers({
    userAgent, surveyDataSuccess, entityDataSuccess,
    surveyIsLoading, surveyHasErrored, submitData,
    positiveFeedback, form: formReducer, clipboard
})

export default rootReducer