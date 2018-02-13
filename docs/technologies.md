# Technology

## SSIP

The pattern used in this [proof of concept](proof-of-concept.md) is the same pattern as can be found in a Self Sovereign Identity Platforms (SSIP) such as Sovrin, uPort, Techruption, Blockcerts. We're using [`discipl-core`](https://github.com/discipl/core), developed together with ICTU, as an API for, amongst other functions, leveraging a distributed SSIP.

## IOTA Tangle

We've used [Tangle](https://iota.org/IOTA_Whitepaper.pdf) in `discipl-core` as opposed to blockchain because there are:

* No miners: meaning no fees, no power in the hands of the few
* Scalable: meaning more nodes, more transactions, more throughput
* Quantum safe

## MAM Channels

Masked Authenticated Messaging is a communication protocol to emit and access encrypted information on the Tangle.

In private mode the initiating party generates random adress under which an encrypted message is published referring to a next random adress (that can only be generated with the private key of the initiating party) and where the next message will be found. This means a channel can be joined from any message, however messages before the message used for joining are not retrievable.

In restricted mode the reader has to have a key in addition to the address, thus the initiating party can revoke access for readers, although new keys will need to be distributed at that point.

In order to subscribe to the channel others need to get a reference to a message in the channel within the Tangle along with an appropiate key for decryption.

[More about MAM on the IOTA blog](https://blog.iota.org/introducing-masked-authenticated-messaging-e55c1822d50e)
