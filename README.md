# wallet-pulse

One call, every balance. `wallet-pulse` prints a wallet's native balances
across Ethereum, Base, Polygon, Arbitrum and Optimism.

## Usage

```bash
npm install
node index.js 0xYourWalletAddress
```

```
eth          4.294 ETH
base         0.512 ETH
polygon    592.719 POL
...
```

Balances come from public RPC endpoints via
public RPCs — no API keys, no signup. Wrap `getBalances()` in a loop and you have a monitor; point it at
Telegram/Discord and you have an alert bot.
