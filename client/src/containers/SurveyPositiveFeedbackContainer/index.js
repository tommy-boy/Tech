import { connect } from 'react-redux'
import SurveyPositiveFeedback from '../components/SurveyPositiveFeedback'
import changeClipboardValue from '../actions/changeClipboardValue'
import { positiveFeedback } from '../reducers/addFeedback';

const mapStateToProps = ({ positiveFeedback }) => ({    
    copiedText: positiveFeedback   
})

const mapDispatchToProps = dispatch => ({
    actionOnCopy: newValue => {
        dispatch(changeClipboardValue(newValue))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveyPositiveFeedback)