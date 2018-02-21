# Digitale Waardepapieren

This project is an example of how to use the IOTA tangle with the discipl-code library to publish certificates. These replace the certificates we have to print on expensive forge-proof paper, increasing the speed of and decreasing the cost of our digital service delivery.

## How to install and run

We've 2 separate docker-compose files for both development and production.
For both environments you need [docker](https://www.docker.com/community-edition) and [docker-compose](https://docs.docker.com/compose/install).

### Development

Development mode is easy to set up with just 1 command, the Docker VM will also autoreload when making changes.
The full stack can be obtained and started by doing the following:

  - Run `docker-compose -f docker-compose.dev.yml up -d`
  - When done, you can access:
    - [City demo page](http://localhost:8080)
    - [Scanner (for phone)](http://localhost:8081)
    - [Claim Server (API)](http://localhost:8082)

### Production

For production, we'll only spawn the claim server, the rest (scanner and city demo page) should be hosted using a well-optimized static file server, like Nginx.

This manual assumes you've got a working version of NodeJS (min v6) installed.

  - Run `docker-compose -f docker-compose.production.yml up -d`
  - `cd` to the directories ClaimPage and Scanner, and do the following steps in each:
    - Run `npm install`
    - Run `npm run build`
    - Now you can use the output in the dist-folder to host said page. The files in dist are static, so a simple static file server would suffice.

## Contributing

Please feel free to file Issues and Pull Requests against this project. Thanks for contributing.

## Licence

© 2018 Gemeente Haarlem  
This project is licenced under the [GNU General Public Licence](LICENCE)
