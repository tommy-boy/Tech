import actionTypes from '../types'
import submitAPI from '../../api/submitAPI'

const { SUBMIT_DATA_SUCCESS, SUBMIT_IS_LOADING, SUBMIT_HAS_ERRORED } = actionTypes;

export default function(surveyId, formData) {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
      return submitAPI.postSurveyData(surveyId, formData)
      .then(payload => {        
        dispatch(submitDataSuccess(payload));
      }).catch(error => {
        throw(error);
      });
    };
}

export function submitHasErrored(bool) {
    return {
        type: SUBMIT_HAS_ERRORED,
        hasErrored: bool
    };
}

export function submitIsLoading(bool) {
    return {
        type: SUBMIT_IS_LOADING,
        isLoading: bool
    };
}

export function submitDataSuccess(submitData) {
    return {
        type: SUBMIT_DATA_SUCCESS,
        submitData
    };
}