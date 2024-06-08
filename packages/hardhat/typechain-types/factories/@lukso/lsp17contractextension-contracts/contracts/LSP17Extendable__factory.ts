/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  LSP17Extendable,
  LSP17ExtendableInterface,
} from "../../../../@lukso/lsp17contractextension-contracts/contracts/LSP17Extendable";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class LSP17Extendable__factory {
  static readonly abi = _abi;
  static createInterface(): LSP17ExtendableInterface {
    return new Interface(_abi) as LSP17ExtendableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LSP17Extendable {
    return new Contract(address, _abi, runner) as unknown as LSP17Extendable;
  }
}
