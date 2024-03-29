# chess2

The chess2 website frontend made in NextJS.

Chess2 is chess website with many new pieces and rules.

2 players can match against each other if they are rated similarly and choose the same game settings.
You are also able to play as a guest, but your rating and game history will not be saved.

A video from before the rewrite:

https://github.com/YishaiYosifov/chess2-frontend/assets/74960133/3d51e75d-6b80-496c-b594-1339757b1695

## Installation

First, install the dependencies:

```bash
$ npm install
```

then run the dev server:

```bash
$ npm run dev
```

Open http://127.0.0.1:3000 in your browser to view the website.

## OpenAPI SDK

The backend of this project is made in FastAPI. FastAPI automatically generates openapi specs. Using this, we can automatically generate a typesafe SDK.

This project uses the openapi-generator package. To generate the client, run

```bash
$ npm run generate-client
```

The SDK will be generated into `src/client`.

## Features

Check out the [backend readme](https://github.com/YishaiYosifov/chess2-backend#features).

## Screenshots

![Signup Page](https://github.com/YishaiYosifov/chess2-frontend/assets/74960133/f352b93f-f6af-4f0b-ab7b-573b71c84f82)

![Profile Page](https://github.com/YishaiYosifov/chess2-frontend/assets/74960133/2208684d-6521-4cbf-92d4-693e5d95d262)


![Play Page](https://github.com/YishaiYosifov/chess2-frontend/assets/74960133/1a5f6eba-7300-4977-a6c4-a125b4a5e44f)

## Testing

To run tests, run the following command:

```bash
$ npm run test
```

To run the test watcher, run the following command:

```bash
$ npm run test:watch
```

Tests are located in the `__tests__` subdirectory in each directory. Test are made with [React Testing Library](https://github.com/testing-library/react-testing-library) and [vitest](https://github.com/vitest-dev/vitest).
