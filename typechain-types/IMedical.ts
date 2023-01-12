/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IMedicalInterface extends utils.Interface {
  functions: {
    "getMedicalData(address)": FunctionFragment;
    "isViewingAccessGranted(address,address)": FunctionFragment;
    "provideViewingAccess(address)": FunctionFragment;
    "register(string,string)": FunctionFragment;
    "updateBloodType(string)": FunctionFragment;
    "updateName(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getMedicalData"
      | "isViewingAccessGranted"
      | "provideViewingAccess"
      | "register"
      | "updateBloodType"
      | "updateName"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getMedicalData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isViewingAccessGranted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "provideViewingAccess",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBloodType",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateName",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getMedicalData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isViewingAccessGranted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "provideViewingAccess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateBloodType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateName", data: BytesLike): Result;

  events: {};
}

export interface IMedical extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMedicalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getMedicalData(
      _patientAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        name: string;
        bloodType: string;
        lastUpdatedtime: BigNumber;
      }
    >;

    isViewingAccessGranted(
      _patientAddress: PromiseOrValue<string>,
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    provideViewingAccess(
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    register(
      _name: PromiseOrValue<string>,
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateBloodType(
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getMedicalData(
    _patientAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      name: string;
      bloodType: string;
      lastUpdatedtime: BigNumber;
    }
  >;

  isViewingAccessGranted(
    _patientAddress: PromiseOrValue<string>,
    _medicalProviderAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  provideViewingAccess(
    _medicalProviderAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  register(
    _name: PromiseOrValue<string>,
    _bloodType: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateBloodType(
    _bloodType: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateName(
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getMedicalData(
      _patientAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        name: string;
        bloodType: string;
        lastUpdatedtime: BigNumber;
      }
    >;

    isViewingAccessGranted(
      _patientAddress: PromiseOrValue<string>,
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    provideViewingAccess(
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    register(
      _name: PromiseOrValue<string>,
      _bloodType: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateBloodType(
      _bloodType: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateName(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getMedicalData(
      _patientAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isViewingAccessGranted(
      _patientAddress: PromiseOrValue<string>,
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    provideViewingAccess(
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    register(
      _name: PromiseOrValue<string>,
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateBloodType(
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getMedicalData(
      _patientAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isViewingAccessGranted(
      _patientAddress: PromiseOrValue<string>,
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    provideViewingAccess(
      _medicalProviderAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    register(
      _name: PromiseOrValue<string>,
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateBloodType(
      _bloodType: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateName(
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
