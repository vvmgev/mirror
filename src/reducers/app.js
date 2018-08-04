import { SET_NAME } from '../constans/app';
const appReducer = (state = {
    name: 'QWERTY',
}, action) => {
    switch (action.type) {
        case SET_NAME:
            state = {
                ...state,
                name: action.payload
            };
            break;
    }
    return state;
};

export default appReducer;