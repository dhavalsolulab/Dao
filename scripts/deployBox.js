async function main() {
    const Box = await ethers.getContractFactory("Box");
    console.log("Deploying Box Contract. Hold Tight..");

    const box = await Box.deploy("4");
    await box.deployed();
    console.log("box deployed to address: ", box.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })