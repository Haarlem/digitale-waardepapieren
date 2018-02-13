# Scenario: providing digital 'proof of residence' for housing cooperative registration

Currently the process for a citizen is:

1. A citizen can request a 'proof of residence' online or at city hall.
2. The citizen will have to go to city hall to identify themselves, pay €25 in fees and receive the paper document.
3. The citizen has to mail the document to the housing cooperative.

This [proof of concept](proof-of-concept.md) fulfills the following scenario:

1. A _Citizen_ retreives a digital 'proof of residency' on the _Public Administration_ webpage as a _Claim_.
2. The _Citizen_ provides this claim to the _Housing Cooperative_ when they register for social housing.
3. The _Housing Cooperative_ verifies this claim with the _Attestations_.

![Graph of the Scenario](./assets/scenario-graph.svg)

* Housing corporation subscribes to MAM channel of municipality (can be done at a later moment too).
* Website for providing information out of central register, citizen claiming this information and attesting of these claims on MAM channel of municipality. Claim and attestation provided as QR code.
* App for asserting (assert) of claim (through QR code scan)
* Information itself is not put on a public distributed ledger platform, only the hash of the hash of it, and also in encrypted form
