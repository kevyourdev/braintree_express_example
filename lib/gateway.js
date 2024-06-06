const braintree = require('braintree');
const dotenv = require('dotenv');

let localEnvironment, gateway;

dotenv.config();

// if (
//   !process.env.BT_ENVIRONMENT ||
//   !process.env.BT_MERCHANT_ID ||
//   !process.env.BT_PUBLIC_KEY ||
//   !process.env.BT_PRIVATE_KEY
// ) {
//   throw new Error(
//     'Cannot find necessary environment variables. See https://github.com/braintree/braintree_express_example#setup-instructions for instructions'
//   );
// }

// localEnvironment = `${process.env.BT_ENVIRONMENT.charAt(
//   0
// ).toUpperCase()}${process.env.BT_ENVIRONMENT.slice(1)}`;

// gateway = new braintree.BraintreeGateway({
//   environment: braintree.Environment[localEnvironment],
//   merchantId: process.env.BT_MERCHANT_ID,
//   publicKey: process.env.BT_PUBLIC_KEY,
//   privateKey: process.env.BT_PRIVATE_KEY,
// });

gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  // Use your own credentials from the sandbox Control Panel here
  merchantId: '26w4qk4xxb7fxsd6',
  publicKey: 'xmwfqz9wc56vttfr',
  privateKey: '34a44197d38688d5191994504bbd9ced',
});

module.exports = gateway;
