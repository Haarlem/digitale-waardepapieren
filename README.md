# Digitale Waardepapieren

This project is an example of how to use the [IOTA](iota.org) [tangle](https://learn.iota.org/faq/tangle) with [Discipl](https://discipl.org/) library to publish digital [verifiable claims](https://www.w3.org/TR/verifiable-claims-use-cases/). These digital certificates replace the certificates the City of Haarlem has to print on expensive forge-proof paper. Thus increasing the speed and decreasing the cost of our digital service delivery.

* [Why we've made this this Proof of Concept.](docs/proof-of-concept.md)
* [The scenario this Proof of Concept fulfills](docs/scenario.md)
* [The technologies we use, why we've used them and how they work](docs/technologies.md)

## Components

This proof of concept is made out of three components that the three handle discrete steps set out in [the scenario](docs/scenario.md).

* [ClaimPage](./ClaimPage/README.md): A webserver that hosts the web-page where citizens can download their certificate.
* [ClaimServer](./ClaimServer/README.md): A server for the public administration that can handle the claim for a certificate and return it to the client of the _ClaimPage_.
* [Scanner](./Scanner/README.md): A webserver that hosts the web-app that can be used to scan the generated QR code and verify the certificate.

## Building, Installing and Running

With Docker you can instantiate the whole stack of components of this proof of concept using `docker-compose up`.

## Contributing

Please feel free to file Issues and Pull Requests against this project. Thanks for contributing.

## Licence

© 2018 [Gemeente Haarlem](https://haarlem.nl)  
This project is licenced under the [GNU General Public Licence](LICENCE)
