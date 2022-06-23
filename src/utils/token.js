import {tokenABI} from "./abi/token";
import {GOV_TOKEN_ADDRESS} from "../utils/config";
import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(GOV_TOKEN_ADDRESS, tokenABI, provider);

export const balanceOf = async (address) => {
    let bal = await contract.balanceOf(address);
    return bal;
}
