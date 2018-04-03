import actionTypes from '../types'
import surveyAPI from '../../api/surveyAPI'

const {SURVEY_DATA_SUCCESS, SURVEY_IS_LOADING, SURVEY_HAS_ERRORED } = actionTypes;

export default (surveyId) => {
    return (dispatch) => {
        
        return surveyAPI.getSurveyConfig(surveyId)
            .then(json => {
                let payload = JSON.stringify(json)
                return Promise.resolve(payload)
            })
            .catch((error) => {
                console.error(error);
            });      
    }
} // fetchSurvey

export function surveyDataSuccess(payload) {
    return {
        type: SURVEY_DATA_SUCCESS,
        survey: payload
    }
}

export function surveyHasErrored(bool) {
    return {
        type: SURVEY_HAS_ERRORED,
        hasErrored: bool
    };
}

export function surveyIsLoading(bool) {
    return {
        type: SURVEY_IS_LOADING,
        isLoading: bool
    };
}

/* export function entityFetchData(entityURI) {
    
    return (dispatch) => {
        dispatch(entityIsLoading(true));

        fetch(entityURI)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(entityIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((entity) => dispatch(entityFetchDataSuccess(entity)))
            .catch(() => dispatch(entityHasErrored(true)));
    };
}

export function entityIsLoading(bool) {
    return {
        type: 'ENTITY_IS_LOADING',
        isLoading: bool
    };
}

export function entityDataSuccess(entity) {
    return {
        type: 'ENTITY_DATA_SUCCESS',
        entity: entity
       
    };
}

export function entityHasErrored(bool) {
    return {
        type: 'ENTITY_HAS_ERRORED',
        hasErrored: bool
    };
}

 */