import {governanceABI} from "./abi/governance";
import {GOVERNANCE_ADDRESS} from "../utils/config";
import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(GOVERNANCE_ADDRESS, governanceABI, provider);

export const createProposal = async (desc, canVote, signer) => {
    let contractSigner = contract.connect(signer);
    let proposal = await contractSigner.createProposal(desc, canVote);
    return proposal;
}

export const castVote = async (proposalId, support, signer) => {
    let contractSigner = contract.connect(signer);
    let tx = await contractSigner.castVote(proposalId, support);
    return tx;
}

export const getPro = async (proposalId, signer) => {
    let contractSigner = contract.connect(signer);
    let proposalStatus = await contractSigner.proposalStatus(proposalId);
    return proposalStatus;
}
