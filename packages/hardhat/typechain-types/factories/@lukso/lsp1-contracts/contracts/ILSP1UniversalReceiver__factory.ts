/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILSP1UniversalReceiver,
  ILSP1UniversalReceiverInterface,
} from "../../../../@lukso/lsp1-contracts/contracts/ILSP1UniversalReceiver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "typeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "receivedData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnedValue",
        type: "bytes",
      },
    ],
    name: "UniversalReceiver",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "typeId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "universalReceiver",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ILSP1UniversalReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): ILSP1UniversalReceiverInterface {
    return new Interface(_abi) as ILSP1UniversalReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILSP1UniversalReceiver {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ILSP1UniversalReceiver;
  }
}
