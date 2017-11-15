
// In this POC the claimdata (which should be retrieved from the central register through the municipality) is hard coded as (partial) JSON-LD
const claimdata = '"name":"John Doe","Street":"John Doestreet 7","Zipcode":"1234AA","City":"Haarlem","SSN":"123456789"';

// In this POC the private key is just some random password
const pkey = "JSdhshshdi7S8bYHS";

const attestorseed = "VERIHMSDNLKS9SDS99WQTWQEWEMNBNDSLFDHIQBQVDQBFFFLSHJSD99SDBW9SDDKEWHB9ETWYVCXNB9SD9SD9ECBG";

const attestorChannel = "";

// change this setting to an available IOTA light node server
global.iotanode = "node1.iotatoken.nl:14265";
