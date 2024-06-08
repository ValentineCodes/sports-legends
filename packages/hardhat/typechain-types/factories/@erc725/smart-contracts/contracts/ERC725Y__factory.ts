/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../common";
import type {
  ERC725Y,
  ERC725YInterface,
} from "../../../../@erc725/smart-contracts/contracts/ERC725Y";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_MsgValueDisallowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "callerAddress",
        type: "address",
      },
    ],
    name: "OwnableCallerNotTheOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableCannotSetZeroAddressAsOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
    ],
    name: "getDataBatch",
    outputs: [
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    name: "setDataBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610bc9380380610bc9833981016040819052610022916100c5565b6001600160a01b038116610049576040516306b620db60e21b815260040160405180910390fd5b61005281610058565b506100f5565b6000546001600160a01b038281169116146100c257600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0383161790555b50565b6000602082840312156100d757600080fd5b81516001600160a01b03811681146100ee57600080fd5b9392505050565b610ac5806101046000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461010c5780639790242114610134578063dedff9c614610147578063f2fde38b1461017457600080fd5b806301ffc9a71461008057806354f6127f146100b5578063715018a6146100e25780637f23690c146100f9575b600080fd5b34801561008c57600080fd5b506100a061009b36600461056a565b610194565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d036600461059b565b6101cb565b6040516100ac91906105fa565b3480156100ee57600080fd5b506100f76101d6565b005b6100f76101073660046106c4565b6101ea565b34801561011857600080fd5b506000546040516001600160a01b0390911681526020016100ac565b6100f761014236600461079a565b61021f565b34801561015357600080fd5b5061016761016236600461086f565b6102df565b6040516100ac91906108ac565b34801561018057600080fd5b506100f761018f36600461090e565b61038a565b60006001600160e01b031982166318a6a9a560e21b14806101c557506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606101c5826103c5565b6101de610467565b6101e860006104a7565b565b6101f2610467565b34156102115760405163f36ba73760e01b815260040160405180910390fd5b61021b8282610515565b5050565b610227610467565b34156102465760405163f36ba73760e01b815260040160405180910390fd5b805182511461026857604051633bcc897960e01b815260040160405180910390fd5b815160000361028a576040516397da5f9560e01b815260040160405180910390fd5b60005b82518110156102da576102d28382815181106102ab576102ab610937565b60200260200101518383815181106102c5576102c5610937565b6020026020010151610515565b60010161028d565b505050565b6060815167ffffffffffffffff8111156102fb576102fb61060d565b60405190808252806020026020018201604052801561032e57816020015b60608152602001906001900390816103195790505b50905060005b82518110156103845761035f83828151811061035257610352610937565b60200260200101516103c5565b82828151811061037157610371610937565b6020908102919091010152600101610334565b50919050565b610392610467565b6001600160a01b0381166103b9576040516306b620db60e21b815260040160405180910390fd5b6103c2816104a7565b50565b60008181526001602052604090208054606091906103e29061094d565b80601f016020809104026020016040519081016040528092919081815260200182805461040e9061094d565b801561045b5780601f106104305761010080835404028352916020019161045b565b820191906000526020600020905b81548152906001019060200180831161043e57829003601f168201915b50505050509050919050565b3361047a6000546001600160a01b031690565b6001600160a01b0316146101e85760405163bf1169c560e01b815233600482015260240160405180910390fd5b6000546001600160a01b038281169116146103c257600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0383166001600160a01b031990911617905550565b600082815260016020526040902061052d82826109cf565b50817fece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b28260405161055e91906105fa565b60405180910390a25050565b60006020828403121561057c57600080fd5b81356001600160e01b03198116811461059457600080fd5b9392505050565b6000602082840312156105ad57600080fd5b5035919050565b6000815180845260005b818110156105da576020818501810151868301820152016105be565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061059460208301846105b4565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561064c5761064c61060d565b604052919050565b600082601f83011261066557600080fd5b813567ffffffffffffffff81111561067f5761067f61060d565b610692601f8201601f1916602001610623565b8181528460208386010111156106a757600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156106d757600080fd5b82359150602083013567ffffffffffffffff8111156106f557600080fd5b61070185828601610654565b9150509250929050565b600067ffffffffffffffff8211156107255761072561060d565b5060051b60200190565b600082601f83011261074057600080fd5b813560206107556107508361070b565b610623565b82815260059290921b8401810191818101908684111561077457600080fd5b8286015b8481101561078f5780358352918301918301610778565b509695505050505050565b600080604083850312156107ad57600080fd5b823567ffffffffffffffff808211156107c557600080fd5b6107d18683870161072f565b93506020915081850135818111156107e857600080fd5b8501601f810187136107f957600080fd5b80356108076107508261070b565b81815260059190911b8201840190848101908983111561082657600080fd5b8584015b8381101561085e578035868111156108425760008081fd5b6108508c8983890101610654565b84525091860191860161082a565b508096505050505050509250929050565b60006020828403121561088157600080fd5b813567ffffffffffffffff81111561089857600080fd5b6108a48482850161072f565b949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561090157603f198886030184526108ef8583516105b4565b945092850192908501906001016108d3565b5092979650505050505050565b60006020828403121561092057600080fd5b81356001600160a01b038116811461059457600080fd5b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061096157607f821691505b60208210810361038457634e487b7160e01b600052602260045260246000fd5b601f8211156102da57600081815260208120601f850160051c810160208610156109a85750805b601f850160051c820191505b818110156109c7578281556001016109b4565b505050505050565b815167ffffffffffffffff8111156109e9576109e961060d565b6109fd816109f7845461094d565b84610981565b602080601f831160018114610a325760008415610a1a5750858301515b600019600386901b1c1916600185901b1785556109c7565b600085815260208120601f198616915b82811015610a6157888601518255948401946001909101908401610a42565b5085821015610a7f5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220d3480b52e272571da9c53056302564ddf6b57499f51eba25a844439f5d05283f64736f6c63430008140033";

type ERC725YConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC725YConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC725Y__factory extends ContractFactory {
  constructor(...args: ERC725YConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      ERC725Y & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC725Y__factory {
    return super.connect(runner) as ERC725Y__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC725YInterface {
    return new Interface(_abi) as ERC725YInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC725Y {
    return new Contract(address, _abi, runner) as unknown as ERC725Y;
  }
}
