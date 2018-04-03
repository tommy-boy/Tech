import initialState from '../initialState';


export function submitIsLoading(state = false, action) {
    switch (action.type) {
        case 'SUBMIT_IS_LOADING':
            return action.isLoading;
  
        default:
            return state;
    }
  }

export function submitHasErrored(state = false, action) {
    switch (action.type) {
        case 'SUBMIT_HAS_ERRORED':
            return action.hasErrored;
  
        default:
            return state;
    }
}
   
export function submitData(state = initialState.submitData, action) {
    switch (action.type) {
        case 'SUBMIT_DATA_SUCCESS':
            return action.submitData;

        default:
            return state;
    }
}