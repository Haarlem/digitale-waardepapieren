##Installation:

'''
npm install
'''

##Usage:

###claimattest.js
writes an attestation (keyed hash of claim) to the IOTA Tangle and generates QR Code (test.png) with the claim, attestation reference and key. The same information is stored in "attestedClaim.dat"
which can be used with verifier-app.js to skip reading QR codes within NodeJS for now. It should be possible to scan the test.png at webqr.com and get the same information as stored in attestedClaim.dat
claimattest.js stores the MAM channel state in state.tmp and reads it at startup to continue the MAM channel where it left a previous time. Do not edit this by hand unless you know what you are doing as this might break the channel.
storing a second message at an address already used will not verify. Note that claimattest.js has a hardcoded attestor seed and local private key. Edit this by hand to make sure you are testing with your own channel.
'''
node claimattest.js
'''

###verifier-app.js
reads the QR code source and verifies the information is also found on the tangle resulting in the message "Verified!" .. requires the file with the attested claim source (attestedClaim.dat) to verify as first argument
'''
node verifier-app.js
'''

NB running "node verifier-app.js a2.dat" should work without running claimattest.js first.

##Issues:

- verifying involves retrieving every message in the channel every time a verification is performed which when there are a lot of attestations
can take quite some time. The discipl-core API should be able to cache this.

the following issues were solved:
- claimattest would always write to the first address in the MAM channel even when there are already messages there. This resulted in an error to be raised (mentioning some Rust backtrace) when running verifier-app.js though it seems to verify the first message found. Also the mam channel is not appended this way as it should be.
- verifier-app.js did not trace the given reference back to the root of the mam channel to make sure the given did actually did publish the attestation. At the moment the reference is always the root.
