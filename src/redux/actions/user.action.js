import { SET_ACCOUNT, SET_PROVIDER } from "../type"

export const setAccount = (account)=>{
    return{
        type:SET_ACCOUNT,
        payload:account
    }
}

export const setProvider = (provider)=>{
    return{
        type:SET_PROVIDER,
        payload:provider
    }
}