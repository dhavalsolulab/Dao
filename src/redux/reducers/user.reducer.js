import { SET_ACCOUNT } from "../type";

const INITIAL_STATE = {
    account: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_ACCOUNT:

           return {
             ...state, account: action.payload,
           };
         default: return state;

    }

};

export default reducer;