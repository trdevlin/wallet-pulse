// wallet-pulse — one call, all your wallet balances.
const { getBalances } = require("wallet-watcher");

const WALLET = process.argv[2] || "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

getBalances(WALLET).then((b) => {
  for (const [chain, info] of Object.entries(b)) {
    console.log(`${chain.padEnd(9)} ${String(info.balance).padStart(12)} ${info.symbol}`);
  }
});
