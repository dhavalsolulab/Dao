async function main() {
    const TimeLock = await ethers.getContractFactory("TimeLock");
    console.log("Deploying TimeLock Contract. Hold Tight..");

    const timeLock = await TimeLock.deploy("4");
    await timeLock.deployed();
    console.log("timeLock deployed to address: ", timeLock.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })