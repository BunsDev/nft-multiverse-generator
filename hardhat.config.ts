/** @format */

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "hardhat-deploy";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  paths: {
    cache: "./generated/cache",
    artifacts: "./generated/artifacts",
  },
  typechain: {
    outDir: "./generated/types",
    target: "ethers-v6",
  },
  networks: {
    sepolia: {
      url: String(process.env.INFURA_RPC_URL),
      accounts: [String(process.env.PRIVATE_KEY)],
    },
    arbSepolia: {
      url: String(process.env.INFURA_ARB_SEP_RPC_URL),
      accounts: [String(process.env.PRIVATE_KEY)],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: String(process.env.ETHERSCAN_SEP_API_KEY),
      arbSepolia: String(process.env.ETHERSCAN_ARB_SEP_API_KEY),
    },
    customChains: [
      {
        network: "arbSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
    ],
  },
};

export default config;
