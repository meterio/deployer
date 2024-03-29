/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  CodeDeployerFactory,
  CodeDeployerFactoryInterface,
} from "../CodeDeployerFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "destination",
        type: "address",
      },
    ],
    name: "CodeDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "preventExecution",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610269806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80635615296014610030575b600080fd5b6100d86004803603604081101561004657600080fd5b81019060208101813564010000000081111561006157600080fd5b82018360208201111561007357600080fd5b8035906020019184600183028401116401000000008311171561009557600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050505035151590506100da565b005b60006100e6838361012b565b604080516001600160a01b038316815290519192507fea3e8fadbb616efc14cb41f88bca45fca14e4eb41f13eb4c8d2ffcf8695a62c4919081900360200190a1505050565b60008082610159577f602038038060206000396000f3fefefefefefefefefefefefefefefefefefefe61017b565b7f60fe600053602038038060206001396001016000f3fefefefefefefefefefefe5b9050835181855260208101856000f090855291506101a66001600160a01b03831615156101ac6101ad565b5092915050565b816101bb576101bb816101bf565b5050565b6101cf816210905360ea1b6101d2565b50565b62461bcd60e51b600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fdfea264697066735822122064ed1c3da678b36d29bb87b2578b980db03591a4b5633a7cce9025fe8d1e1f4564736f6c63430007010033";

type CodeDeployerFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CodeDeployerFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CodeDeployerFactory__factory extends ContractFactory {
  constructor(...args: CodeDeployerFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CodeDeployerFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): CodeDeployerFactory__factory {
    return super.connect(runner) as CodeDeployerFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CodeDeployerFactoryInterface {
    return new Interface(_abi) as CodeDeployerFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CodeDeployerFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as CodeDeployerFactory;
  }
}
