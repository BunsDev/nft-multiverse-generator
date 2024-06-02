/** @format */

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { EnterTheChainlinkMultiverse__factory } from "../../generated/types";
import { task } from "hardhat/config";

/**
 * Deploy Multiverse contract
 */

const deployMultiverse = async (hre: HardhatRuntimeEnvironment) => {
  const [deployer] = await hre.ethers.getSigners();
  const initialOwner = deployer.address;
  console.log("initialOwner : ", initialOwner);

  // Deploy EnterTheChainlinkMultiverse NFT contract
  const multiVerseNftFactory = new EnterTheChainlinkMultiverse__factory(
    deployer
  );
  const multiVerseNft = await multiVerseNftFactory.deploy();
  await multiVerseNft.waitForDeployment();
  console.log(
    "EnterTheChainlinkMultiverseNFT deployed to: ",
    await multiVerseNft.getAddress()
  );
};

task("deploy-multiverse", "Deploy multiverse contract").setAction(
  async (args, hre) => {
    console.log("Running HH task");
    await deployMultiverse(hre);
    console.log("Successfully ran HH task");
  }
);
