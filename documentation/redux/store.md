# Redux State Tree

## Introduction

Though this document mostly uses JavaScript notation for objects, all JavaScript objects are
actually Immutable maps - including the state tree as a whole.

## Structure

```js
{
  auth: {
    token: String,
    userId: String,
  },
  account: {
    profile: {
      avatar: String,
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      isFaceBookUser: Boolean,
    },
    services: List<String>,
  },
  connections: {
    accepted: List<Connection>,
    pending: List<Connection>,
  },
  transactions: {
    [TRANSACTION_ID]: Transaction
  }
  services: {
    [SERVICE_ID]: {
      label: String,
      wallets: List<String>,
    },
  },
  wallets: {
    [WALLET_ID]: {
      label: String,
      symbol: String,
      balance: Number,
      disabled: Boolean,
    },
  },
  currencis: {
    [CURRENCY_ID]: {
      label: String,
      symbol: String,
      price_usd: Number,
      last_updated: String,
      rate_hour: Number,
      rate_day: Number,
      rate_week: Number,
      rate_month: Number,
      rate_year: Number,
    },
  },
}
```

## Types

Most of these types are just Immutable maps of what the API returns.

### Loading

```js
type Loading = {
  loading: Boolean,
};
```
