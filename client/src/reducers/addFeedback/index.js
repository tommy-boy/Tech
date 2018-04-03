export function positiveFeedback(state = '', action) {
  switch (action.type) {
      case 'ADD_FEEDBACK':
          return action.feedback;

      default:
          return state;
  }
}