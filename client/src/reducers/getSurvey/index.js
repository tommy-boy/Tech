
import initialState from '../initialState';

export function surveyHasErrored(state = false, action) {
  switch (action.type) {
      case 'SURVEY_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function surveyIsLoading(state = false, action) {
  switch (action.type) {
      case 'SURVEY_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function surveyDataSuccess (state = initialState.surveyData, action) {
  switch (action.type) {
      case 'SURVEY_DATA_SUCCESS':
      return action.survey;
      
      default:
          return state;
  }
}

export function entityDataSuccess (state = initialState.entityData, action) {
    switch (action.type) {
        case 'ENTITY_DATA_SUCCESS':
            return action.entity;
  
        default:
            return state;
    }
}