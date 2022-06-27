import { SET_ACCOUNT, SET_PROVIDER } from "../type";

const INITIAL_STATE = {
    account: null,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case SET_ACCOUNT:

           return {
             ...state, account: action.payload,
           };

        case SET_PROVIDER:

          return {
            ...state, account: action.payload,
          };
        default: return state;

    }

};

export default reducer;