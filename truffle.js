const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!

  networks: {
    // Rinkeby public test network
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          "pluck vintage mechanic twenty fall maze valve pull portion lens quote slight",
          `https://rinkeby.infura.io/v3/694e8bfc9fa64b3688333850bfb0c01d`
        );
      },
      gas: 2000000,
      gasPrice: 25000000,
      network_id: "*"
    },
    // Ganache local testing
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enable: true,
      runs: 200
    }
  }
};
