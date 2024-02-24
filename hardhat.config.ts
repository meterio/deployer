import '@nomicfoundation/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-solhint';
import '@typechain/hardhat';
import 'hardhat-contract-sizer';
import 'hardhat-gas-reporter';
import 'hardhat-tracer';
import 'hardhat-contract-sizer';

// import './tasks';
import { compileSetting } from './scripts/compileSetting';
import { config } from 'dotenv';
config();

// tslint:disable-next-line:no-var-requires
export default {
  defaultNetwork: 'hardhat',
  networks: {
    metertest: {
      url: 'http://rpctest.meter.io',
      chainId: 83,
      timeout: 99999,
      gasPrice: 500000000000,
      accounts: [],
    },
    metermain: {
      url: 'http://rpc.meter.io',
      chainId: 82,
      timeout: 99999,
      gasPrice: 500000000000,
      accounts: [],
    },
    ganache: {
      url: 'http://localhost:8545',
      chainId: 1337,
      accounts: [],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: {
      arbitrum: process.env.ARBISCAN_API_KEY,
      ethereum: process.env.ETHERSCAN_API_KEY,
      basemain: process.env.BASESCAN_API_KEY,
      sepolia: process.env.ETHERSCAN_API_KEY,
    },

    customChains: [
      {
        network: 'metertest',
        chainId: 83,
        urls: {
          apiURL: 'https://api-goerli.etherscan.io/api',
          browserURL: 'https://scan-warringstakes.meter.io',
        },
      },
      {
        network: 'arbitrum',
        chainId: 42161,
        urls: {
          apiURL: 'https://api.arbiscan.io/api',
          browserURL: 'https://arbiscan.io/',
        },
      },
      {
        network: 'basemain',
        chainId: 8453,
        urls: { apiURL: 'https://api.basescan.org/api', browserURL: 'https://basescan.org' },
      },
    ],
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
  solidity: {
    compilers: [compileSetting('0.7.1', 200)],
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 9999999999,
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    enabled: false,
    currency: 'USD',
    gasPrice: 21,
  },
  typechain: {
    outDir: 'typechain',
  },
  vyper: {
    // version: "0.2.15"
    // version: "0.2.16"
    version: '0.3.7',
  },
};
