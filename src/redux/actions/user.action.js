import { SET_ACCOUNT } from "../type"

export const setAccount = (account)=>{
    return{
        type:SET_ACCOUNT,
        payload:account
    }
}