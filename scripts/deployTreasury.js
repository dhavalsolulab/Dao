async function main() {
    const Treasury = await ethers.getContractFactory("Treasury");
    console.log("Deploying Treasury Contract. Hold Tight..");

    const treasury = await Treasury.deploy("0xB5AB4255cf3BBaFA5d2f2886d707604918E4D4Bf");
    await treasury.deployed();
    console.log("treasury deployed to address: ", treasury.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })