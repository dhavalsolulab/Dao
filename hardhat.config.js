require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config({path:__dirname+'/.env'})


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    'rinkeby': {
      url: process.env.RPC_URL,
      accounts: [process.env.ACC_PRIVATE_KEY],
      timeout: 15000000
    }
  },
  solidity: {
    compilers:[
      {
        version: "0.8.9"
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 100
      }
    },
},
mocha: {
  timeout: 21000000,
},
etherscan: {
  // Your API key for Etherscan
  // Obtain one at https://etherscan.io/
  apiKey: process.env.API_KEY
}
};
