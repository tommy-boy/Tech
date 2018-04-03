import { CHANGE_CLIPBOARD_VALUE } from '../actions/changeClipboardValue'

const initialState = ''

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CLIPBOARD_VALUE:
            return action.newValue
        default:
            return state
    }
}