
# Basqet NodeJS SDK

The Official Node.js library for the Basqet API.

## Installation

Install node-client with npm

```bash
  npm i basqet-node
```

## Usage/Examples

#### Fetch Available currency

```javascript
const Basqet = require('basqet-node')

const basqet = new Basqet(secretKey)

// Fetch all fiat currency
const currencies = basqet.fetchAllCurrency("FIAT")

```


#### Initialize transaction


```javascript
const Basqet = require('basqet-node')

const basqet = new Basqet(secretKey)

const paymentData = {
     "customer": {
          "name": "tunde",
          "email": "customer@example.com"
     },
     "amount": "1000",
     "currency": "NGN",
     "meta": {
          "reference": "bghggbbvv"
     }
};

const transactionObj = basqet.initializeTransaction(paymentData);

```


#### Initiate transaction

```javascript
const Basqet = require('basqet-node')

const basqet = new Basqet(secretKey)

const transactionObj = basqet.initiateTransaction(<transactionId>, {'currency_id': <currency_id>})

```


#### Verify transaction

```javascript
const Basqet = require('basqet-node')

const basqet = new Basqet(secretKey)

const transactionObj = basqet.verifyTransaction(<transactionId>)

```

#### Mock webhook events

```javascript
const Basqet = require('basqet-node')

const basqet = new Basqet(secretKey)

const transactionObj = basqet.triggerWebhook(<transactionId>, { status: 'SUCCESSFUL' })

```

## Documentation/API reference

[Documentation](https://docs.basqet.com/docs)