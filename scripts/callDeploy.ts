import { selectNetwork } from './helper';
import { CodeDeployerFactory__factory } from '../typechain';

const main = async () => {
  const network = await selectNetwork();
  let { wallet } = network;

  const addr = '0x88E5132fDd6aEaA72789ED37BDAaE90211Ee695d';

  const contract = CodeDeployerFactory__factory.connect(addr, wallet);
  const deployRes = await contract.deploy(Buffer.from('abcdef'), false);
  console.log(deployRes);
};

main();
