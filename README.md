<img src="ClaimPage/src/assets/logo.png" align="right">

# Digitale Waardepapieren

This project is an example of how to use the [IOTA](iota.org) [tangle](https://learn.iota.org/faq/tangle) with [Discipl](https://discipl.org/) library to publish digital [verifiable claims](https://www.w3.org/TR/verifiable-claims-use-cases/). These digital certificates replace the certificates the City of Haarlem has to print on expensive forge-proof paper. Thus increasing the speed and decreasing the cost of our digital service delivery.

We believe there are many more applications for digital verifiable claims in public administrations. This [proof of concept](docs/proof-of-concept.md) demonstrates where we can start.
However, once these verifiable claims are digital many others can also be digitised on the same infrastructure, dramatically lowering the barrier to using verifications.

* [Why we've made this this Proof of Concept](docs/proof-of-concept.md)
* [The scenario this Proof of Concept fulfills](docs/scenario.md)
* [The technologies we use, why we've used them and how they work](docs/technologies.md)

## Components

This proof of concept is made out of three components that the three handle discrete steps set out in [the scenario](docs/scenario.md).

* [ClaimPage](./ClaimPage/README.md): A webserver that hosts the web-page where citizens can download their certificate.
* [ClaimServer](./ClaimServer/README.md): A server for the public administration that can handle the claim for a certificate and return it to the client of the _ClaimPage_.
* [Scanner](./Scanner/README.md): A webserver that hosts the web-app that can be used to scan the generated QR code and verify the certificate.

## Trying it out and running the dev environment

We've 2 separate docker-compose files for both development and production.
For both environments you need [docker](https://www.docker.com/community-edition) and [docker-compose](https://docs.docker.com/compose/install).

Development mode is easy to set up with just 1 command, the Docker VM will also autoreload when making changes.
The full stack can be obtained and started by doing the following:

* Run `docker-compose -f docker-compose.dev.yml up -d`
* When done, you can access the:
  * ClaimPage public administration website on <http://localhost:8080>
  * Scanner on <http://localhost:8081>
  * ClaimServer API on <http://localhost:8082>

## In production

For production, we'll only spawn the claim server, the rest (scanner and city demo page) should be hosted using a well-optimized static file server, like Nginx.

This manual assumes you've got a working version of NodeJS (min v6) installed.

* Run `docker-compose -f docker-compose.production.yml up -d`
* `cd` to the directories ClaimPage and Scanner, and do the following steps in each:
  * Run `npm install`
  * Run `npm run build`
  * Now you can use the output in the dist-folder to host said page. The files in dist are static, so a simple static file server would suffice.

## [Contributing](CONTRIBUTING.md)

Please feel free to [file Issues and Pull Requests](CONTRIBUTING.md) against this project. Thanks for contributing.

## Licence

© 2018 [Gemeente Haarlem](https://haarlem.nl)  
This project is licenced under the [GNU General Public Licence](LICENCE)
