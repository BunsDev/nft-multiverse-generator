/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "FunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClient__factory>;
    getContractFactory(
      name: "IFunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFunctionsClient__factory>;
    getContractFactory(
      name: "IFunctionsRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFunctionsRouter__factory>;
    getContractFactory(
      name: "FunctionsRequest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsRequest__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IVRFCoordinatorV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus__factory>;
    getContractFactory(
      name: "IVRFMigratableConsumerV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus__factory>;
    getContractFactory(
      name: "IVRFSubscriptionV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus__factory>;
    getContractFactory(
      name: "VRFV2PlusClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFV2PlusClient__factory>;
    getContractFactory(
      name: "VRFConsumerBaseV2Plus",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus__factory>;
    getContractFactory(
      name: "EnterTheChainlinkMultiverse",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnterTheChainlinkMultiverse__factory>;

    getContractAt(
      name: "FunctionsClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClient>;
    getContractAt(
      name: "IFunctionsClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IFunctionsClient>;
    getContractAt(
      name: "IFunctionsRouter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IFunctionsRouter>;
    getContractAt(
      name: "FunctionsRequest",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsRequest>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "IOwnable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IVRFCoordinatorV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    getContractAt(
      name: "IVRFMigratableConsumerV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    getContractAt(
      name: "IVRFSubscriptionV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    getContractAt(
      name: "VRFV2PlusClient",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFV2PlusClient>;
    getContractAt(
      name: "VRFConsumerBaseV2Plus",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    getContractAt(
      name: "EnterTheChainlinkMultiverse",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EnterTheChainlinkMultiverse>;

    deployContract(
      name: "FunctionsClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunctionsClient>;
    deployContract(
      name: "IFunctionsClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IFunctionsClient>;
    deployContract(
      name: "IFunctionsRouter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IFunctionsRouter>;
    deployContract(
      name: "FunctionsRequest",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunctionsRequest>;
    deployContract(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IVRFCoordinatorV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    deployContract(
      name: "IVRFMigratableConsumerV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    deployContract(
      name: "IVRFSubscriptionV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    deployContract(
      name: "VRFV2PlusClient",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2PlusClient>;
    deployContract(
      name: "VRFConsumerBaseV2Plus",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    deployContract(
      name: "EnterTheChainlinkMultiverse",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EnterTheChainlinkMultiverse>;

    deployContract(
      name: "FunctionsClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunctionsClient>;
    deployContract(
      name: "IFunctionsClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IFunctionsClient>;
    deployContract(
      name: "IFunctionsRouter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IFunctionsRouter>;
    deployContract(
      name: "FunctionsRequest",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.FunctionsRequest>;
    deployContract(
      name: "ConfirmedOwner",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwner>;
    deployContract(
      name: "ConfirmedOwnerWithProposal",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    deployContract(
      name: "IOwnable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IOwnable>;
    deployContract(
      name: "IVRFCoordinatorV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFCoordinatorV2Plus>;
    deployContract(
      name: "IVRFMigratableConsumerV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFMigratableConsumerV2Plus>;
    deployContract(
      name: "IVRFSubscriptionV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IVRFSubscriptionV2Plus>;
    deployContract(
      name: "VRFV2PlusClient",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFV2PlusClient>;
    deployContract(
      name: "VRFConsumerBaseV2Plus",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.VRFConsumerBaseV2Plus>;
    deployContract(
      name: "EnterTheChainlinkMultiverse",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EnterTheChainlinkMultiverse>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
