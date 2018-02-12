# This proof of concept

This proof of concept is made to digitise an existing common process for the City of Haarlem: in order to register with a social housing cooperative a citizen needs to present them with a proof of residency. This currently involves the citizen going to city hall to get their certificate of proof of residency and then take this to the housing cooporation.

This project proofs that this can all be done with digital certificates – or [verifiable claims](https://www.w3.org/TR/verifiable-claims-use-cases/) – citizens can print themselves.

## Why we've chosen a digital 'proof of registration' as a proof of concept

Blockchain technologies have a lot of potential in government applications. We would like to explore these applications. However to prove the case any proof of concept needs to adhere to these criteria:

* Solve a real problem for the public administration
* Have a good financial business model
* Be low risk
* Have potential for national Dutch implementation

The process of getting a 'proof of registration' is a mostly paper process. Although the citizen can request a 'proof of registration' they will have to go to city hall to identify themselves, pay €25 in fees and receive the paper document.

Thus we've decided on building a proof of concept for the digitisation of the 'proof of registration' using blockchain technologies.

## How it works

### Providing verifiable claims

![Graph of the Scenario](./assets/scenario-graph.svg)

Citizen claims (claim) data to be proofed, municipality attests claim (attest), housing corporation verifies attestation on claim (assert)

### Technology

This is the same pattern as can be found in a Self Sovereign Identity Platforms (SSIP) such as
Sovrin, uPort, Techruption, Blockcerts. We're using [Discipl Core](https://github.com/discipl/core), developed by ICTY, as an API for, amongst other functions, leveraging a distributed SSIP.

We've used [Tangle](https://iota.org/IOTA_Whitepaper.pdf) as opposed to blockchain because there are:

* No miners: no fees, no power in the hands of the few
* Scalable: more nodes, more transactions, more throughput
* Quantum safe
