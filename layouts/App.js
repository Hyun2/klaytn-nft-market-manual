import React from "react";
import Caver from "caver-js";
import StorageABI from "../public/abi/storage.json";
// import CaverExtKAS from "caver-js-ext-kas";

const CHAIN_ID = "1001"; // main net: 8217, test net: 1001;

const STORAGE_CONTRACT = "0x71aA4C48153EDE850F35a3861A6B24755478bBbA";

console.log(process.env.secretAcessValue);

const option = {
  headers: [
    {
      name: "Authorization",
      value: process.env.secretAcessValue,
    },
    { name: "x-chain-id", value: "1001" },
  ],
};

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option));

// const caver = new CaverExtKAS(
//   CHAIN_ID,
//   process.env.accessKeyId,
//   process.env.secretAccessKey
// );

const App = () => {
  const readStorage = async () => {
    const storageContract = new caver.contract(StorageABI, STORAGE_CONTRACT);
    const value = await storageContract.methods.retrieve().call();
    console.log(value);
    // const blockNumber = await caver.rpc.klay.getBlockNumber();
    // console.log(blockNumber);
  };
  readStorage();
  return <div>Hello Klaytn</div>;
};

export default App;
