##Installation:

'''
npm install
'''

##Usage:

###claimattest.js
writes an attestation (keyed hash of claim) to the IOTA Tangle and generates QR Code (test.png) with the claim, attestation reference and key.
'''
node claimattest.js
'''

###verifier-app.js
reads the QR code and verifies the information is also found on the tangle resulting in the message "Verified!"
'''
node verifier-app.js
'''

NB A test.png is already included, it's attestation already on the Tangle (in the given testnode), so running the verifier-app.js should work without running claimattest.js first.

Note this is work in progress

##Issues:

the following is an issue within this poc application:
- QR Code reader does not function every time somehow. just try a different seed (altering the source of the QR code).
The following are more issues of both discipl-core as this poc application:
- claimattest will always write to the first address in the MAM channel even when there are already messages there. This seems to result in an error to be raised (mentioning some Rust backtrace) when running verifier-app.js though it seems to verify the first message found. Also the mam channel is not appended this way as it should be.
- verifier-app.js does not trace the given reference back to the root of the mam channel to make sure the given did actually did publish the attestation. At the moment the reference is always the root.
