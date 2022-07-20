// 

require("@nomiclabs/hardhat-waffle");

module.exports={
   solidity: '0.8.0',
   networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rQKp173vJdc_MSIALpT8nvnEYAJ3a8MV',
      accounts: ['57e59890551deba6f38ce967d81b1ba72310d46826a110de01f813a5136e1559']
    }
   }
}
