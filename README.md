# [React template](https://github.com/quentinlao/reactTemplate/)

React template is a template use to create a react app from scratch without CRA.

-   **WHY ANOTHER TEMPLATE :** Simpler frontend project, reusable tools/components and easier to debug.
-   **Job interview:** Sample to use to create a job interview frontend.
-   **Private project:** Build an professionnal app with right structure and configuration.
-   **POC/MVP:** Design to create a fast and reusable POC/MVP to learn/demonstrate during a meeting.

## Introduction and project configuration

React template is designed for minimum configuration and **you can use all you need**:

-   React Api 16 Hooks [React hooks](https://fr.reactjs.org/docs/hooks-intro.html).
-   Typescript [TS](https://www.typescriptlang.org/).
-   Yarn package manager [yarn](https://yarnpkg.com/).
-   Webpack bundler [webpack](https://webpack.js.org/).
-   Babel JS compiler ECMAScript 2015+ [babel](https://babeljs.io/docs/en/) (arrow function, and so on).
-   Google TS stylesheet [google TS stylesheet](https://google.github.io/styleguide/tsguide.html).
-   Prettier [prettier](https://prettier.io/) configuration with VScode
-   ESlint [ESlint](https://eslint.org/) linter fix auto config VScode
-   Jest [Jest](https://jestjs.io/fr/) unit test
-   Cypress [Cypress](https://www.cypress.io/) end to end testing (features workflow)
-   Mochawesome report cypress HTML and NYC coverage report

You can use this minimun configuration to start a clean project, test it and improve it

## Installation

VSCODE extensions

-   Prettier

```
 Config path prettier user VSCODE : .prettierrc.json
```

-   ESlint

-   Git hooks

Run the .bat script in `<GIT_DIRECTORY>/.git-hooks` to instanciate the git hooks configuration on your project.

## Documentation

You can complete this README for your project here

-   [Example subject job interview](https://reactjs.org/tutorial/tutorial.html)
-   Constraint : X hours

## Examples of title

Here is an example of quoting code to explain :

```tsx
type IHelloMessage {
  name: string;
}

const HelloMessage = (props: IHelloMessage) => {
  return <div>Hello {props.name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
```

## Contributor

[Quentin](https://github.com/quentinlao/)

### License
