# market-application

### Description

A React and Redux based web interface for categorizing shopping products. Users can use this application to view, sort and categorize various products as they wish. This application use the **React** library for its user interface, **Redux** for state management, **Redux-Saga** for side-effect management and a customized version of [**json-server**](https://github.com/typicode/json-server) as a placeholder backend.

### Requirements

In order to run the application locally, the following tools must be installed and ready:

- Docker
- Docker compose

### Environment Setup

Docker and Docker Compose need to be setup on the host machine in order to run the service. Installation instructions for Docker can be found [here](https://docs.docker.com/get-docker/). Installation instructions for Docker Compose can be found [here](https://docs.docker.com/compose/install/)

### Running the Service

#### Using Docker

The service can be run by running the following command in the terminal:

```
docker-compose up --build && docker-compose rm -fsv
```

Or it can be run in detached mode by running the follwing command:

```
docker-compose up -d --build
```

and then running the following to perform a clean shutdown:

```
docker-compose down
```

Once running, the application interface can be accessed at http://localhost:3000/\*\*. The service endpoints can be accessed at http://localhost:8081/.

Its as simple as this! :smile:

#### Using NPM

In order to run the application without Docker, the application can be run by calling ```npm install``` in each subdirectory  followed by ```npm run start```.

### Documentation

In order to see a documentation of the React components used in the application, please switch to the _/market-application-ui_ directory and run the following command:

```
styleguidist server
```

In order for this command to work, the dependencies of the application must be installed first via

```
npm install
```

The documentation server should then be available on http://localhost:6000

### Authors

This repository and all its contents have been compiled and written by Masna Ahmed ([Github](https://github.com/maZna), [LinkedIn](https://www.linkedin.com/in/masna-ahmed-355432160/)). Please feel free to contact me for ideas, suggestions, and/or questions.

Business Email: masnaahmed1998@gmail.com
