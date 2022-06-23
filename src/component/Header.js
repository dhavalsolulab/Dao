import React, { useEffect, useState } from "react";
import moralisLogo from "../images/Moralis.png";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { contract, balanceOf } from "../utils/token";
import { setAccount } from "../redux/actions/user.action";
import { useDispatch } from "react-redux/es/exports";
const Header = () => {
  const [add, setAdd] = useState(0);
  const dispatch = useDispatch();

  const handleConnectWallet = async () => {
    // console.log('%c 🍷 contract: ', 'font-size:20px;background-color: #465975;color:#fff;', contract);

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const acc = await provider.send("eth_requestAccounts", []);
    setAdd(acc[0]);
    if (acc && acc.length > 0) {
      dispatch(setAccount(acc[0]));
    }
    console.log(
      "%c 🍝 acc[0]: ",
      "font-size:20px;background-color: #4b4b4b;color:#fff;",
      acc[0]
    );
    balanceOf(acc[0]);

    const network = await provider.getNetwork();
    console.log(
      "%c 🥤 network: ",
      "font-size:20px;background-color: #93C0A4;color:#fff;",
      network.chainId
    );
    if (network.chainId == 4) {
      toast.success("Connected Succefully");
    } else {
      toast.error("Please switch to Rinkeby Testnet");
      setAdd(0);
    }
  };

  return (
    <div className="header">
      <img width="160px" src={moralisLogo} alt="logo" />
      <button className="connect-wallet-btn" onClick={handleConnectWallet}>
        {add && add != 0
          ? add.substr(0, 5) + "..." + add.substr(-4)
          : "Connect Wallet"}
      </button>
    </div>
  );
};
export default Header;
