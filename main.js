import IOTA from 'iota.lib.js';
import iotap from 'iotap';

const {
  IOTA_SOURCE_SEED,
  IOTA_PROTOCOL,
  IOTA_HOST,
  IOTA_PORT,
  IOTA_DESTINATION_ADDRESS,
  IOTA_DESTINATION_SEED
} = process.env;

console.log(`Using node ${IOTA_PROTOCOL}://${IOTA_HOST}:${IOTA_PORT}`)

const iota = new IOTA({
    'host': `${IOTA_PROTOCOL}://${IOTA_HOST}`,
    'port': IOTA_PORT
});

const i = iotap.create(iota);

//
// const sendTransaction = (destinationAddress) => {
//   // here we define the transfers object, each entry is an individual transaction
//   const transfer = [{
//       'address': destinationAddress,
//       'value': 100,
//       'message': 'ODGABDPCADTCGADBGANBCDADXCBDXCZCGAQAGAADTCGDGDPCVCTCGADBGAWBMDEAUCXCFDGDHDEAADTCGDGDPCVCTCEAGDTCBDHDEAKDXCHDWCEASBYBCCKBSAGAQD'
//   }];
//   // We send the transfer from this seed, with depth 4 and minWeightMagnitude 18
//   sendTransfer(IOTA_SOURCE_SEED, 4, 18, transfer, function(e, bundle) {
//       if (e) throw e;
//       console.log("Successfully sent your ", bundle);
//   });
// };
//
//
// .then(( address ) => {
//         console.log("Sending to: ", IOTA_DESTINATION_ADDRESS)
//         //sendTransaction(IOTA_DESTINATION_ADDRESS);
// });

const getSourceBalance = i.getAccountData(IOTA_SOURCE_SEED)
const getDestinationBalance = i.getAccountData(IOTA_DESTINATION_SEED);

const getBalances = () => {
  return Promise.all([getSourceBalance, getDestinationBalance])
    .then(([sourceAccountData, destinationAccountData]) => console.log(sourceAccountData.balance, destinationAccountData.balance))
    .catch(e => console.error(e));
}

async function main() {
  await getBalances();
  const address = await i.getNewAddress( IOTA_SOURCE_SEED, {
    'checksum': true
  });
  console.log(address);
  await getBalances();
}

main().catch(e=>console.error(e));


// const convertBytesToTrytes = () => {
//   const messageToSend = {
//       'name': 'Jim',
//       'message': 'My first message sent with IOTA.'
//   }
//   // Stringify to JSON
//   const messageStringified = JSON.stringify(messageToSend);
//   // Convert the string to trytes
//   const messageTrytes = iota.utils.toTrytes(messageStringified);
//   console.log(messageTrytes)
// }
