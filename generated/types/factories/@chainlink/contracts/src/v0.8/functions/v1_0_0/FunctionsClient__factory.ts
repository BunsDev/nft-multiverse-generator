/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  FunctionsClient,
  FunctionsClientInterface,
} from "../../../../../../../@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient";

const _abi = [
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FunctionsClient__factory {
  static readonly abi = _abi;
  static createInterface(): FunctionsClientInterface {
    return new Interface(_abi) as FunctionsClientInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FunctionsClient {
    return new Contract(address, _abi, runner) as unknown as FunctionsClient;
  }
}
