# iota-board

> IOTA async/await ES modules example using https://npm.im/iotap

## Setup

1. Clone this repo and cd into the directory
2. `npm install`
3. Rename `.env.example` to `.env`
4. Edit `.env` to fill in information about some seeds, addresses and the node you're going to use.
5. **IMPORTANT** Make sure the server you are connecting to has attachToTangle enabled.
6. Run `node index.js`

## Expected output

Here is an example output. Of course I have substituted some of the things that will look different. Additionally the balances of the two seeds will be different from the two shown below.

```
Using node http://IOTA_HOST:IOTA_PORT
9999895 100
ALONGADDRESSWILLAPPEARHERE
9999895 100
```
