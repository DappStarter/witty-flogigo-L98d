require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stool curtain rural unfold guess kangaroo army gasp'; 
let testAccounts = [
"0x2e401f708b866b7f692b71fa68f7dd75f97b80ce82cba8f1878fc2dcf7be1b6f",
"0xa932dc522c3ac4800fb35c98c858558b6362c0d04a8ecd77c57f4fffad7acc7a",
"0xa0ced6c6d506761b7451bdddb75228a1873065da0ec34a94640cc7e12a2795d3",
"0x4d317c507e159d23277c14c6f0f6dcb86d9bc5585313c683a0f0aa529c0d1ce8",
"0x96ba499e82472f8073648da9f5c6ee9eb4d5c657c4fdf72527b5808ed1862dfe",
"0x5ce6f818ead666618340939ff6e606899a8cdf2287267cc59cf8a97e562502d7",
"0xca1c67f8375425ed19bf5b6688f80b94445094153cb3300d50ac1c56466ed54d",
"0x76c6ab040d76480f7aa466beeead62f3e2eb2a9c0ccb449da8c25f4d2ed1f203",
"0x26705fc727aee95da8149a24eceeebf3d428015fe48114158903fa3e2ac7e6ad",
"0xb8e6f9efb187a2e3d0130ac29e2ea4cb9d97ce3ff7ed649d24e9fdf7bfd29ba7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

