import {tokenABI} from "./abi/token";
import {GOV_TOKEN_ADDRESS} from "../utils/config";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
const provider = new ethers.providers.Web3Provider(window.ethereum);

const contract = new ethers.Contract(GOV_TOKEN_ADDRESS, tokenABI, provider);

export const balanceOf = async (address) => {
    // const state = useSelector(state=>state.user)
    // console.log('%c 🥦 state: ', 'font-size:20px;background-color: #465975;color:#fff;', state);
    let bal = await contract.balanceOf(address);
    return bal;
}
