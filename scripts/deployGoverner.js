async function main() {
    const MyGovernor = await ethers.getContractFactory("MyGovernor");
    console.log("Deploying Governor Contract. Hold Tight..");

    const governor = await MyGovernor.deploy("0x30638A4984660b7D5307Ea1Bf8E8C18587588cF9", "0x5467779f7fC9b4268D549AA30077a7baDb1F122e");
    await governor.deployed();
    console.log("governor deployed to address: ", governor.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error  => {
      console.log(error);
      process.exit(1);
    })