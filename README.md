# [React template](https://github.com/quentinlao/reactTemplate/)

React template is a template use to create a react app from scratch without CRA.

-   **WHY ANOTHER TEMPLATE :** Simpler frontend project, reusable tools/components and easier to debug.
-   **Job interview:** Sample to use to create a job interview frontend.
-   **Private project:** Build an professionnal app with right structure and configuration.
-   **POC/MVP:** Design to create a fast and reusable POC/MVP to learn/demonstrate during a meeting.

## Introduction and project configuration

React template is designed for minimum configuration and **you can use all you need**:

-   React API 17 with Hooks [React hooks](https://fr.reactjs.org/docs/hooks-intro.html).
-   Typescript [TS](https://www.typescriptlang.org/).
-   Standard CSS (CSS-loader, style-loader) this project allow you to choose your standard (inline, styled-components typestyle,css modules, preprocessors SASS/LESS)
-   Yarn package manager [yarn](https://yarnpkg.com/).
-   Webpack bundler [webpack](https://webpack.js.org/).
-   Babel JS compiler ECMAScript 2015+ [babel](https://babeljs.io/docs/en/) (arrow function, and so on).
-   Google TS stylesheet [google TS stylesheet](https://google.github.io/styleguide/tsguide.html).
-   Prettier [prettier](https://prettier.io/) configuration with VScode
-   ESlint [ESlint](https://eslint.org/) linter fix auto config VScode
-   Jest [Jest](https://jestjs.io/fr/) unit test
-   Cypress [Cypress](https://www.cypress.io/) end to end testing (features workflow)
-   Mochawesome report cypress HTML and NYC coverage report
-   Axios for request HTTP handling data
-   dotenv to configure .env

You can use this minimun configuration to start a clean project, test it and improve it

## Pre installation (toolings)

VSCODE extensions used to develop faster

-   Prettier

Config path prettier user VSCODE in settings.json: `.prettierrc.json`

-   ESlint

This plugin is used to help you to develop and add rules to stylesheet your coding style.

-   Git hooks

Run the .bat script in `<GIT_DIRECTORY>/.git-hooks` to instanciate the git hooks configuration on your project.

Configuration Windows or Linux (use powershell or bash)
Recommendation use VSCode bash = default configuration

-   `package.json`
    Replace windows commands with linux commands
    | Windows | Linux | Explanation |
    |---------|-------|-------------|
    | copy | cp | Copy element(s) |
    | mv | move | Move element(s) |
    | del | rm | Delete element(s) |
    | backslash \\\ |path /| Separation between folder |

# Installation

-   Default project `PORT=8082`, change `.env` with `PORT={your_port}` or setenv `PORT` in `package.json` default port

```
yarn start
```

-   Build project in one package for cloud provider

```
yarn build
```

-   Unit test created in jest and coverage in folder `.coverage/jest-coverage`

```
yarn ut
```

-   Integration test for working flow test in folder `.coverage/cypress-coverage`

```
yarn it
```

-   Starting cypress to start specific it

```
yarn cy:open
```

-   Copy in folder `.coverage` reports UT and IT

```
yarn reports:move
```

-   Merge reports with Nyc

```
yarn reports:merge
```

-   Combined reports and create new report in `.coverage/combined`

```
yarn reports:combined
```

-   Execute all coverages commands IT/UT and move, merge and combined

```
yarn reports:coverage
```

## Project structure

| File or folder                  | Description                                                                                        |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `src/index.tsx`                 | The entry file. This is where we import babel polyfills and render the App into the root DOM node. |
| `src/index.html`                | The only HTML file in our App. All scripts and styles will be injected here by Webpack.            |
| `src/assets/**`                 | All the static assets exported to index.tsx                                                        |
| `src/api/**`                    | Services API for managing all api requests, all data requests and response data                    |
| `src/pages/**`                  | Core application                                                                                   |
| `src/pages/App.tsx`             | Main application routes, components that need to be mounted at all times                           |
| `src/components/**`             | Directory use for independant components reusable                                                  |
| `src/types/**`                  | Interface use to define Model structures                                                           |
| `src/utils/**`                  | All the utility, helpers, constants and enums that can be used across the application              |
| `.coverage/cypress-coverage/**` | Lcov and html report cypress for integration test                                                  |
| `cypress/**`                    | Cypress configuration for adding plugings, instruments coverage and testing                        |
| `cypress/integration/**`        | Integration test folder                                                                            |
| `.coverage/jest-coverage/**`    | Lcov and html report jest for unit test                                                            |
| `.coverage/combined/**`         | Coverage IT and UT                                                                                 |
| `./jest/**`                     | Jest configuration needed for files                                                                |
| `src/components/**`             | Jest unit tests files in component                                                                 |

## Contributor

[Quentin](https://github.com/quentinlao/)
[Alan](https://github.com/alanlachkar)

### License

[MIT](https://opensource.org/licenses/MIT)
