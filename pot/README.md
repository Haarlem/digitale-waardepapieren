# Waardepapieren IOTA MAM proof of technology

## usage
example of using IOTA MAM based on https://github.com/iotaledger/mam.client.js/tree/master/examples.

npm install iota.lib.js
npm install mam.client.js

main.js puts a MAM message on the ledger (when you set node settings and channel key manually)
getmsg.js should retrieve it (when you set seed, node settings and channel key manually)

## goal
actually provide an example in which a claim can be made, attested (creating a MAM message) and verified (retrieving the MAM message) 
through a discipl core API (https://github.com/discipl/core)

## current status
NOTE This code is work in progress not to be used in production nor finished.

the MAM.client.js package is deprecated and the examples did not work well at first.
After some hacks to make it actually work, a MAM message seems to be put on the tangle
retrieving has not been succesfull yet. Currently IOTA is saying
it will announce the release of MAM as part of the ledger soon.

We couldn't find another example of a project that takes a MAM message from the tangle, though there is this ruuvi project.
We haven't tested it yet with a node with the MAM extension module (enabling the command mam.getmessage). It should be possible to do the work of this module at the client side
though we haven't been succesful yet.

###About the hacks
The mam.client.js is deprecated. Wait for IOTA to announce MAM release officially or try to go with what you find in here at your own risk.

files that need to be altered can be found in the node_modules_hack folder:

	- mam.client.js/lib/encryption.js : removed 2 second empty arguments that caused syntax error, also replaced all occurences of curl.HASH_LENGTH with just 243
	- iota.crypto.js/lib/utils.js : commented some lines in transactionTrytes ... there seems to be some version / compatibility mismatch here. Made the method stick to the original make up of transaction objects (see https://domschiener.gitbooks.io/iota-guide/content/chapter1/transactions-and-bundles.html)


 