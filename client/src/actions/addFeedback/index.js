
export function addFeedback() {
	return (dispatch, getState) => {
		const form = getState().form;
		const feedback = {
			positiveFeedback:form.surveyForm.values.postiveFeedback_input_didwell,			
		};

		dispatch({
			type: 'ADD_FEEDBACK',
			feedback: feedback.positiveFeedback
		});
	}
}