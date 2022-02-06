require("@nomiclabs/hardhat-waffle");
const fs = require('fs')
const privkey = fs.readFileSync(".secret").toString()

//const projectId = env.projectId;

module.exports = {
  networks:{
    hardhat:{
      chainId: 1337
    }
  },
  solidity: "0.8.10",
};


