const  main = async () => {
  const profileImageFactory = await hre.ethers.getContractFactory('ProfileImageNfts',
    )
  const profileImageContract = await profileImageFactory.deploy()

  await profileImageContract.deployed()
}

;(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()