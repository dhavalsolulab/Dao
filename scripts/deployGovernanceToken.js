async function main() {
    const GovernanceToken = await ethers.getContractFactory("GovernanceToken");
    console.log("Deploying GovernanceToken Contract. Hold Tight..");

    const governanceToken = await GovernanceToken.deploy("4");
    await governanceToken.deployed();
    console.log("governance token deployed to address: ", governanceToken.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })