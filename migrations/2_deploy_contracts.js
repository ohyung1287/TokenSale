var Sale = artifacts.require("./Sale.sol");
var Token = artifacts.require("./Token.sol");

module.exports = function(deployer) {
  // number of token I deployed
  deployer.deploy(Token, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(Sale, Token.address);
  });
};
