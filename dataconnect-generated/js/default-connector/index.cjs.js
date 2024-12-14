const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'smartlarm',
  location: 'europe-west1'
};
exports.connectorConfig = connectorConfig;

