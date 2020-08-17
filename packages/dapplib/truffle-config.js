require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strategy razor pulse quality gesture define army gentle'; 
let testAccounts = [
"0x91214631258f5c94baa0ed1c156d2023e0ff7dd572aca325cd5c4c6a11c6334b",
"0x583b4c3fb32914302882a30cc7793db6540b2975248fcb59c90c5c6781524ffa",
"0xf32dc7b92b1f06043c04f2af08201cb52a9f2d48245ed31fd81c70ca3345c761",
"0xa6f89b14c03fb827a291bdbc173f7b3526502e0b0961a393548ac344fda6765b",
"0x5ad705a2bdd91fb71a685f819c7ab696f04732dbd02bc00eeae24da9eac25fc6",
"0x0d6418138157daf724a12f172791e00078822b1b118499cf69fdf07a8fc5f6cc",
"0xdfc87e04931fbe7afa91bfaefac3eb0f5ca4abf851aa37339cdaf196c2cd739d",
"0x5c40f0ea5cfea7af8c2bcfcbdc6dd2870bbd3478def01355af5a63eddb200ae7",
"0x26a680b88f93db4f6a08815a3e92bee96e67da9971521a785ebe1435c3e0f895",
"0x00dd0391fce814815c42e0d22a7a81eae240bb0570c1dd1a17547f64eff78353"
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
            version: '^0.5.11'
        }
    }
};
