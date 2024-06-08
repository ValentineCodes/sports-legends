/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IEurocupLegends {
  export type CreatorStruct = { creator: AddressLike; share: BigNumberish };

  export type CreatorStructOutput = [creator: string, share: bigint] & {
    creator: string;
    share: bigint;
  };
}

export interface IEurocupLegendsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimPrize"
      | "getCountryPrize"
      | "getCreators"
      | "getPrize"
      | "getWinners"
      | "isClaimed"
      | "isMintOpen"
      | "setMintStatus"
      | "setWinners"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "MintStatus" | "PrizeClaimed" | "WinnersSet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimPrize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCountryPrize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreators",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPrize",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWinners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isMintOpen",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMintStatus",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setWinners",
    values: [
      [AddressLike, AddressLike, AddressLike],
      [BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "claimPrize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCountryPrize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getWinners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMintOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMintStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setWinners", data: BytesLike): Result;
}

export namespace MintStatusEvent {
  export type InputTuple = [isMintOpen: boolean];
  export type OutputTuple = [isMintOpen: boolean];
  export interface OutputObject {
    isMintOpen: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PrizeClaimedEvent {
  export type InputTuple = [owner: AddressLike, prize: BigNumberish];
  export type OutputTuple = [owner: string, prize: bigint];
  export interface OutputObject {
    owner: string;
    prize: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WinnersSetEvent {
  export type InputTuple = [winners: [AddressLike, AddressLike, AddressLike]];
  export type OutputTuple = [winners: [string, string, string]];
  export interface OutputObject {
    winners: [string, string, string];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IEurocupLegends extends BaseContract {
  connect(runner?: ContractRunner | null): IEurocupLegends;
  waitForDeployment(): Promise<this>;

  interface: IEurocupLegendsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claimPrize: TypedContractMethod<
    [_recipient: AddressLike, _country: AddressLike],
    [void],
    "nonpayable"
  >;

  getCountryPrize: TypedContractMethod<
    [_country: AddressLike],
    [bigint],
    "view"
  >;

  getCreators: TypedContractMethod<
    [],
    [IEurocupLegends.CreatorStructOutput[]],
    "view"
  >;

  getPrize: TypedContractMethod<
    [_user: AddressLike, _country: AddressLike],
    [bigint],
    "view"
  >;

  getWinners: TypedContractMethod<[], [[string, string, string]], "view">;

  isClaimed: TypedContractMethod<
    [_country: AddressLike, _tokenId: BytesLike],
    [boolean],
    "view"
  >;

  isMintOpen: TypedContractMethod<[], [boolean], "view">;

  setMintStatus: TypedContractMethod<
    [_isMintOpen: boolean],
    [void],
    "nonpayable"
  >;

  setWinners: TypedContractMethod<
    [
      _winners: [AddressLike, AddressLike, AddressLike],
      _shares: [BigNumberish, BigNumberish, BigNumberish]
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimPrize"
  ): TypedContractMethod<
    [_recipient: AddressLike, _country: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCountryPrize"
  ): TypedContractMethod<[_country: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCreators"
  ): TypedContractMethod<[], [IEurocupLegends.CreatorStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getPrize"
  ): TypedContractMethod<
    [_user: AddressLike, _country: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getWinners"
  ): TypedContractMethod<[], [[string, string, string]], "view">;
  getFunction(
    nameOrSignature: "isClaimed"
  ): TypedContractMethod<
    [_country: AddressLike, _tokenId: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isMintOpen"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "setMintStatus"
  ): TypedContractMethod<[_isMintOpen: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setWinners"
  ): TypedContractMethod<
    [
      _winners: [AddressLike, AddressLike, AddressLike],
      _shares: [BigNumberish, BigNumberish, BigNumberish]
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "MintStatus"
  ): TypedContractEvent<
    MintStatusEvent.InputTuple,
    MintStatusEvent.OutputTuple,
    MintStatusEvent.OutputObject
  >;
  getEvent(
    key: "PrizeClaimed"
  ): TypedContractEvent<
    PrizeClaimedEvent.InputTuple,
    PrizeClaimedEvent.OutputTuple,
    PrizeClaimedEvent.OutputObject
  >;
  getEvent(
    key: "WinnersSet"
  ): TypedContractEvent<
    WinnersSetEvent.InputTuple,
    WinnersSetEvent.OutputTuple,
    WinnersSetEvent.OutputObject
  >;

  filters: {
    "MintStatus(bool)": TypedContractEvent<
      MintStatusEvent.InputTuple,
      MintStatusEvent.OutputTuple,
      MintStatusEvent.OutputObject
    >;
    MintStatus: TypedContractEvent<
      MintStatusEvent.InputTuple,
      MintStatusEvent.OutputTuple,
      MintStatusEvent.OutputObject
    >;

    "PrizeClaimed(address,uint256)": TypedContractEvent<
      PrizeClaimedEvent.InputTuple,
      PrizeClaimedEvent.OutputTuple,
      PrizeClaimedEvent.OutputObject
    >;
    PrizeClaimed: TypedContractEvent<
      PrizeClaimedEvent.InputTuple,
      PrizeClaimedEvent.OutputTuple,
      PrizeClaimedEvent.OutputObject
    >;

    "WinnersSet(address[3])": TypedContractEvent<
      WinnersSetEvent.InputTuple,
      WinnersSetEvent.OutputTuple,
      WinnersSetEvent.OutputObject
    >;
    WinnersSet: TypedContractEvent<
      WinnersSetEvent.InputTuple,
      WinnersSetEvent.OutputTuple,
      WinnersSetEvent.OutputObject
    >;
  };
}
