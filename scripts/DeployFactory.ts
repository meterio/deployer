import { ethers } from 'hardhat';
import { selectNetwork, deployContractV2 } from './helper';

const main = async () => {
  const network = await selectNetwork();
  let { override, netConfig } = network;

  await deployContractV2(ethers, network, 'CodeDeployerFactory', [], override);
};

main();
