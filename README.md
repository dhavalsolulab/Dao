# Staking

# Overview
The DAO was an organization that was designed to be automated and decentralized. It acted as a form of venture capital fund, based on open-source code and without a typical management structure or board of directors. To be fully decentralized, the DAO was unaffiliated with any particular nation-state, though it made use of the ethereum network. 

# Smart Contracts
Smart contracts are deployed on [Rinkeby Testnet](https://rinkeby.etherscan.io)
- Governer Token : [0x30638A4984660b7D5307Ea1Bf8E8C18587588cF9](https://rinkeby.etherscan.io/address/0x30638A4984660b7D5307Ea1Bf8E8C18587588cF9#code)
- Governer : [0x255fF237a4a09D003c045183C8d6c96c50cECc5b](https://rinkeby.etherscan.io/address/0x255fF237a4a09D003c045183C8d6c96c50cECc5b#code)
- Timelock : [0x5467779f7fC9b4268D549AA30077a7baDb1F122e](https://rinkeby.etherscan.io/address/0x5467779f7fC9b4268D549AA30077a7baDb1F122e#code)
- Treasury : [0x2efD68Fa8eFdC47B596D4F855b9d9c4895823Db5](https://rinkeby.etherscan.io/address/0x2efD68Fa8eFdC47B596D4F855b9d9c4895823Db5#code)

# Note
Set wallet and rpc url in config file before running the project.

# Steps to run project

_This step presumes that node related all the prerequisites are installed in the machine._

1. Clone the Staking repo :
```
git clone https://github.com/dhavalsolulab/Dao.git
```
2. Go to the directory : 
```
cd Dao
```
3. Install dependencies :
``` 
npm i
```
4. Setup environment file for your project :
```
Check the .env.example file.
Create .env file with vim .env command
Configure all the values.
```
5. To compile the contracts : 
```
npx hardhat compile
```

# To deploy Governance token contract
```
npx hardhat run ./scripts/deployGovernanceToken.js --network rinkeby
```

# To deploy Box contract
```
npx hardhat run ./scripts/deployStaking.js --network rinkeby
```
# To deploy Governer contract
```
npx hardhat run ./scripts/deployGoverner.js --network rinkeby
```
# To deploy Timelock contract
```
npx hardhat run ./scripts/deployTimelock.js --network rinkeby
```

# To verify the contract on etherscan
```
npx hardhat verify --network rinkeby {contractAddress} {constructor args in any}
```
