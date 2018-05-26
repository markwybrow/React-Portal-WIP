import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

export default const reducers = combineReducers({
    form: reduxFormReducer // mount required on Form
})