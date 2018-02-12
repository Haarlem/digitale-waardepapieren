# Digitale Waardepapieren

This project is an example of how to use the [IOTA](iota.org) [tangle](https://learn.iota.org/faq/tangle) with [Discipl](https://discipl.org/) library to publish digital [verifiable claims](https://www.w3.org/TR/verifiable-claims-use-cases/). These digital certificates replace the certificates the City of Haarlem has to print on expensive forge-proof paper. Thus increasing the speed and decreasing the cost of our digital service delivery.

[Read more about this Proof of Concept and how it works.](docs/proof-of-concept.md)

## Components

This project is made out of three components that all handle discrete steps in the process.

* [ClaimPage](./ClaimPage/README.md): A webserver that hosts the web-page where citizens can download their certificate.
* [ClaimServer](./ClaimServer/README.md): A server that can handle the claim for a certificate and return it to the client of the _ClaimPage_.
* [Scanner](./Scanner/README.md): A webserver that hosts the web-app that can be used to scan the generated QR code and retreive the certificate.

## Building, Installing and Running

With Docker you can instantiate the whole stack of components of this proof of concept using `docker-compose up`.

## Contributing

Please feel free to file Issues and Pull Requests against this project. Thanks for contributing.

## Licence

© 2018 [Gemeente Haarlem](https://haarlem.nl)  
This project is licenced under the [GNU General Public Licence](LICENCE)
