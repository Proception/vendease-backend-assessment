# Vendease Backend

The purpose of this backend app is to expose APIs with the intention of accessing episodes, comments, and characters entities.

## Requirements

* Node.js >= 16.13 (no nodejs installed? try [nvm](https://github.com/nvm-sh/nvm))
* Docker: Have docker and docker compose installed on local setup (no docker/docker-compose installed? try [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/))
* Postgres (docker containers are used for the test environment and dev environment)

## Application configuration

The app can be configured using environment variables:

- **`NAME`** the application name. Default: `name` in [`package.json`](./package.json).
- **`VERSION`** the application version. It's automatically set by deployment script as the deploy tag. Default: `version` in [`package.json`](./package.json).
- **`NODE_ENV`** the environment the application will be running in. Default: `local`.
- **`SERVER_PORT`** or **`PORT`** the port the application will be running on. Default: `8080`.
- **`SERVER_HOST`** or **`HOST`** the host the application will be running on. Default: `0.0.0.0`.
- **`POSTGRES_URL`** the connection string to PostgresDB.

## Usage

### Basic dev setup

Make sure requirements are satisfied.

* `npm ci` - to install dependencies.
* `cd dev/services && docker-compose up -d` - to start the postgres docker containers for development and test environment
* `npm run db:migrate` and `npm run db:seed` - to fill in the development database with the episode, character, location, and comments data
* `npm test` - to run tests.

Start the app in the development mode with any options e.g.:

```
HOST="localhost" npm run dev
```

To see the swagger [documentation](https://vendease-assessment.herokuapp.com/documentation), visit this [url](https://vendease-assessment.herokuapp.com/documentation)

