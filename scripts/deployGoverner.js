async function main() {
    const MyGovernor = await ethers.getContractFactory("MyGovernor");
    console.log("Deploying Governor Contract. Hold Tight..");

    const governor = await MyGovernor.deploy("4");
    await governor.deployed();
    console.log("governor deployed to address: ", governor.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })