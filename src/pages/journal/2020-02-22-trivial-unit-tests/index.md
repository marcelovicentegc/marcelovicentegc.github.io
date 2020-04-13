---
title: "Unit testing your web app with Jest and React Testing Library: THE TRIVIAL"
---

The quality of your application is as important as if it works. At where I work, we are currently using MobX as the state manager for our web applications. It was a sunny saturday morning when a fellow colleague introduced me and some other dears colleagues, unit testing with Jest and the React Testing Library (if you want to know more about RTL, I recommend [this blog post by its creator](https://kentcdodds.com/blog/introducing-the-react-testing-library)). Since that day, I was using Enzyme and Jest as my tools to go testing. I had never ever heard of the React Testing Library. I gave it the shot, and I'm implementing it in every project I touch. A couple months have passed since that day, and I'm one of the few that really went heads and hands on on it. As soon as I noticed that, I knew where the problem was.

On that beautiful saturday morning, we didn't really test simple stuff, such as buttons, input fields, styles, children being rendered, etc. We were testing our stores and mocking the API responses… Well, unit testing that was challenging for me, and it certainly was as challenging or even frightening for other people. So, with that in mind, I would like to walk you through what I think is a really trivial, beginner-to-beginner guide, of how to unit test your web app with Jest and RTL with the goal of showing you how easy it is to get started.

# 🌎 Setting up your environment

First things first, Jest and RTL won't work out of the box. I'm assuming you are using Babel as your transpiler, and that you are familiar with Typescript, but if you are not, that shouldn't be a problem, you can follow along. So, I set up [this client boilerplate](https://github.com/marcelovicentegc/react-typescript-client) which we'll start implementing unit tests, or you can literally just apply what is about to follow to any React-based project, doing any project-specific modifications as you need. Time to clone that repository (or not ¯\_(ツ)\_/¯):

```
git clone --depth=1 --branch start/unit-testing https://github.com/marcelovicentegc/react-typescript-client.git
```

In case you just want to see the final configuration, take a look at the bare code and figure it out yourself, just head to the master branch.

From now on, I'll post exactly what you need to set everything up, whether you are on that boilerplate or not. First, let's install these guys: `npm i jest @testing-library/react @testing-library/jest-dom`, and this kid: `npm i -D @types/jest`. We still have other packages to install, but first, let's add the lines 4, and 5 (`test` and `test:watch` commands) to our `package.json`:

```json
 "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "start": "cross-env NODE_ENV=development webpack-dev-server --progress --host 0.0.0.0",
    "test": "jest \"(/__tests__/.)*\\.tsx?$\" --coverage --colors --silent",
    "test:watch": "jest \"(/__tests__/.)*\\.tsx?$\" --coverage --colors --watch"
  }
```

You can put the regex and the other options inside jest.config.js as well and free those commands from flags. \"(/**tests**/.)\*\\.tsx?\$\" tells Jest where to run tests from. You can check out other CLI options [here](https://jestjs.io/docs/en/cli#). Now, let's give our project a jest.setup.js file that should look like this:

```ts
jest.setTimeout(1000 * 60)
```

This file sets up some configuration that'll be called for each test. You can set any timeout here. I personally like to have Jest timeout after 60 seconds, as its default (5 seconds) may not be sufficient depending on what you're testing and you might hit [this error](https://stackoverflow.com/questions/49603939/async-callback-was-not-invoked-within-the-5000ms-timeout-specified-by-jest-setti).

Let's install another dependency, this one to stub non Javascript assets: npm i -D jest-transform-stub . Now, it's time to create our jest.config.js file. It should look like this:

```js
const modules = [].join("|")

module.exports = {
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
  transform: {
    "^.+\\.(ts|js|tsx)$": "babel-jest",
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  transformIgnorePatterns: [`<rootDir>/node_modules/(?!(${modules})/)`],
}
```

You can reach [Jest’s configuration documentation](https://jestjs.io/docs/en/configuration) to figure out what each one of these properties means and add others as you please, but I should let you know, right now, that we are configuring our tests to fail if it doesn’t hit the 70% coverage mark. If you are applying this to an existing large project, you probably don’t want your pipelines to crash until you write 91358319 tests, so you can just remove the block where it says `coverageThreshold`.
So far, we have almost everything in place. It won’t/shouldn’t work, but let’s create our first test for the sake of learning 😃. Create a **tests** folder inside src/components/Button if you are using the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) boilerplate, or on a simple component of your own project, and a index.tsx file inside it (the whole path should be something like src/components/Button/**tests**/index.tsx ). **We’ll follow this folder structure pattern for every component**. Now, paste in the following code:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Button } from ".."

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { container } = render(<Button label="Click me" />)
    expect(container).toMatchSnapshot()
  })
})
```

Check out line 2. While the other imports might seem obvious, `@testing-library/jest-dom/extend-expect` might not. It is a tool that makes RTL’s matchers available on the expect function, that comes from Jest, by using jest-extended library. If you already have a babel.config.js on your project, the output might be different, but if you don’t, you might get something like this when you run `npm test`:

<img src="https://miro.medium.com/max/1400/1*AbWBLQAWFdUjpM8brwwiyA.png" />

So far, we are not transpiling our code to Javascript on Jest’s terms, as on this project we are using `ts-loader` to do just that. Thus, as you read that _By default, if Jest sees a Babel config, it will use that to transform your files_... , we’ll create one! It should be located at the root of your project, be named `babel.config.js` and contain the following lines:

```js
module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
  ],
}
```

Those plugins aren’t installed yet, that’s right, and you can go ahead and install it all at once:

```bash
npm i -D @babel/plugin-transform-runtime @babel/plugin-syntax-dynamic-import @babel/plugin-transform-modules-commonjs @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/preset-typescript @babel/preset-env @babel/preset-react
```

Here is a list of each plugin we installed, linking to theirs documentation:

1. [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
2. [@babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
3. [@babel/plugin-transform-modules-commonjs](https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs)
4. [@babel/plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
5. [@babel/plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators)
6. [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
7. [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)
8. [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)
9. [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)

In case you are following me with the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) project, you’ll note that we’re running on a different problem now. We are missing a theme from Styled Components:

<img src="https://miro.medium.com/max/1372/1*1rMP53mJsBD832OGcn2BpQ.png" />

In case you are not following along with that boilerplate, you still might fall into this one if you are using some provider on your application from, say, Redux. The problem here is that the `render` method from RTL is not aware of the existence of any provider. Glance line 8:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Button } from ".."

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { container } = render(<Button label="Click me" />)
    expect(container).toMatchSnapshot()
  })
})
```

Can you see any provider surrounding that `<Button />` ? Me neither. We don’t want to write a provider for every test, thus, we’ll customize the RTL’s render method, just as its [illustrated on their docs]() and [examples](). On the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) project, there is a folder named `utils`. Create a `render.tsx` method inside it (the whole path should be `src/utils/render.tsx`). Inside the file, paste the following snippet:

```tsx
import React from "react"
import { render as testingLibraryRender } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

export const render = (ui: React.ReactElement) => {
  return {
    ...testingLibraryRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>),
  }
}
```

We’ll use this render method instead of RTL’s from now on. So let’s change the RTL’ s render method from the `<Button />` test case to ours. Run the test one more time! You should receive the following output on your console:

<img src="https://miro.medium.com/max/1378/1*jOVKbDvY3W871UQJTtQxvA.png" />

Our single test passed, but as the minimum coverage threshold for a successful run is of 70%, the test suite failed. Once we have everything minimally set up, we can dive in the next topic. It is worth noting that another valid approach is to compose the RTL’s render method, so instead of having a custom render method, we would wrap our component with another method to extend what we need. The `render.tsx` file would look something like this:
And we would use it like this on our tests:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Button } from ".."
import { withTheme } from "../../../utils/render"

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(withTheme(<Button label="Click me" />))

    expect(getByTestId("buttonWrapper")).toBeInTheDocument()
    expect(getByTestId("styledButton")).toBeInTheDocument()
    expect(getByTestId("label")).toBeInTheDocument()
  })
})
```

# 📝 Writing unit tests

If you are someone attentive for every line of written stuff, you might have noticed that our test says `test ids are in the document`, but we actually take a snapshot of our component. That’s because I didn’t want to touch the `<Button />` until now, so snapshot testing was the solution. From now on we’ll barely write any snapshots. Instead, we are going to rewrite the first test for our `<Button />` , applying some changes to the `<Button />` component itself _that should be applied to every component_ to be tested (as this might be exaggerated and overkill, I recommend doing so with the single aim of practicing). We’ll add a data-testid attribute to the HTML tags inside our components as follow:

```tsx
import React from "react"
import { ButtonWrapper, StyledButton, Label } from "./style"

export enum ButtonType {
  primary,
  secondary,
  tertiary,
}

interface Props
  extends Omit<React.HTMLProps<HTMLButtonElement>, "type" | "as" | "ref"> {
  label: string
  type?: ButtonType
}

export const Button: React.FC<Props> = ({ label, type, ...props }) => {
  return (
    <ButtonWrapper data-testid="buttonWrapper">
      <StyledButton
        {...props}
        buttonType={type ? type : ButtonType.primary}
        data-testid="styledButton"
      >
        <Label data-testid="label">{label}</Label>
      </StyledButton>
    </ButtonWrapper>
  )
}
```

See the `data-testid` all around? Do it with the naming convention that you want. For the sake of simplicity, I’m using the name of the styled component in camelCase, and I’ll keep this pattern on the whole project. Let’s change the test to match what was originally intended, to check if `test ids are in the document`:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { Button } from ".."
import { render } from "../../../utils/render"

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Button label="Click me" />)

    expect(getByTestId("buttonWrapper")).toBeInTheDocument()
    expect(getByTestId("styledButton")).toBeInTheDocument()
    expect(getByTestId("label")).toBeInTheDocument()
  })
})
```

Now we are on the line! `getByTestId` comes from RTL’s render method that we on overrode on the former section, and if you haven’t taken a grasp on the documentation or on what methods your editor’s intellisense might point, I highly recommend you to do so, because that’s how you will get rebel 😎. There is an official [cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet) and another not-so-official [cheatsheet](https://devhints.io/jest) with really fun and useful information. If you got so far, you can drop out right now and trail the unit testing path by exploring these cheatsheets. It is worth noting that another valid approach is to compose the RTL’s render method, so instead of having a custom render method, we would wrap our component with another method to extend what we need. The `render.tsx` file would look something like this:

```tsx
import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme"

export const withTheme = (children: React.ReactElement) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
```

And we would use it like this on our tests (note that we import the `render` method from RTL):

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import { Button } from ".."
import { withTheme } from "../../../utils/render"

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(withTheme(<Button label="Click me" />))

    expect(getByTestId("buttonWrapper")).toBeInTheDocument()
    expect(getByTestId("styledButton")).toBeInTheDocument()
    expect(getByTestId("label")).toBeInTheDocument()
  })
})
```

Oh, hi! I didn’t see you there! We are going to test for user inputs on our `<Button />`, now:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { Button } from ".."
import { render } from "../../../utils/render"
import { fireEvent } from "@testing-library/react"

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Button label="Click me" />)

    expect(getByTestId("buttonWrapper")).toBeInTheDocument()
    expect(getByTestId("styledButton")).toBeInTheDocument()
    expect(getByTestId("label")).toBeInTheDocument()
  })

  test("onClick prop is called", () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Button label="Click me" onClick={onClick} />
    )

    fireEvent.click(getByTestId("styledButton"), { button: 1 })
    expect(onClick).toHaveBeenCalled()
  })
})
```

Whether you are using the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) or not, investigate the component you want to test. What else can we test on that component? Which are the properties that when passed affect the component’s behavior? In the case of the `<Button />`, it has a type property that affect its appearance by modifying its style sheet. We should definitely test that, with this code:

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { Button, ButtonType } from ".."
import { render } from "../../../utils/render"
import { fireEvent } from "@testing-library/react"
import { theme } from "../../../utils/theme"

describe("<Button /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId } = render(<Button label="Click me" />)

    expect(getByTestId("buttonWrapper")).toBeInTheDocument()
    expect(getByTestId("styledButton")).toBeInTheDocument()
    expect(getByTestId("label")).toBeInTheDocument()
  })

  test("onClick prop is called", () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Button label="Click me" onClick={onClick} />
    )

    fireEvent.click(getByTestId("styledButton"), { button: 1 })
    expect(onClick).toHaveBeenCalled()
  })

  test("renders secondary style", () => {
    const { getByTestId } = render(
      <Button label="Click me" type={ButtonType.secondary} />
    )

    expect(getByTestId("styledButton")).toHaveStyle(
      `background-color: ${theme.color.white1};
      color: ${theme.color.blue1};`
    )
  })
})
```

I believe we still have one more thing to test, which is if the component renders and displays the passed `label` property properly, we can do that with this:

```tsx
test("renders passed label prop", () => {
  const { getByTestId } = render(<Button label="Click me" />)

  expect(getByTestId("label")).toHaveTextContent("Click me")
})
```

It is true that this could be tested earlier, on, say, any of the previous tests, as this prop is required and we are passing it in every test case. Despite that, we are unit testing, which means we are testing units of our components’ functionalities. We are not trying to test the whole thing at once, but its behavioral fragments. Imagine if the above test fails, but doesn’t fails on its own test case, but on the `test ids are in the document` test case. It wouldn’t be obvious that what failed was not a component that didn’t render, as one would intuitively guess if he/she saw this on the console: `test ids are in the document failed`.

By now you should be getting this output if following along:

<img src="https://miro.medium.com/max/1374/1*18QVikMsoff4C_dY35EJPg.png" />

Jest says that lines 30 and 45 of our `style.ts` file are uncovered. Let’s see what’s going on up there:

```ts
import { styled } from "../../utils/theme"
import { ButtonType } from "."

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  transition: 0.2s;
  margin: 0px 8px;
  &:hover {
    filter: brightness(1.1);
  }
`

export const StyledButton = styled.button<{ buttonType: ButtonType }>`
  position: relative;
  border-color: transparent;
  outline: none;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  ${({ theme, buttonType }) =>
    `background-color: ${
      buttonType === ButtonType.primary
        ? theme.color.green1
        : buttonType === ButtonType.secondary
        ? theme.color.white1
        : theme.color.blue3
    }
    color: ${
      buttonType === ButtonType.primary || buttonType === ButtonType.tertiary
        ? theme.color.white1
        : theme.color.blue1
    }
    
    &:after {
      position: absolute;
        background-color: ${
          buttonType === ButtonType.primary
            ? theme.color.green2
            : buttonType === ButtonType.secondary
            ? theme.color.white2
            : theme.color.blue2
        }
      border-color: transparent;
      border-width: 0 0 4px;
      border-radius: 16px;
      bottom: -8px;
      content: "";
      left: 0;
      right: 0;
      z-index: -1;
      top: 0;
    }`}
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const Label = styled.span`
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  top: 1px;
`
```

It points us on line 30 that we are not testing this condition entirely: `buttonType === ButtonType.secondary ? theme.color.white1 : theme.color.blue3` (and line 45 highlights something similar), condition responsible for rendering the tertiary style on our component. Let’s test it and see what happens. Add this test case, if you haven’t done it yet:

```tsx
test("renders tertiary style", () => {
  const { getByTestId } = render(
    <Button label="Click me" type={ButtonType.tertiary} />
  )

  expect(getByTestId("styledButton")).toHaveStyle(
    `background-color: ${theme.color.blue3};
      color: ${theme.color.white1};`
  )
})
```

Running the tests now gives us this output:

<img src="https://miro.medium.com/max/1352/1*UqCEiue0cqrOVUPniNd07g.png" />

But, wait… We didn’t test the pseudo element style changes that differ depending on which `type` we pass to our `<Button />` and line 45 just disappeared from the Uncovered Lines column. Jest is not perfect, and so is our test suite for this component. Our **use case coverage** is not 100% yet. It’s time to recommend you another blog post from the creator of the RTL on [how to test and what to test](https://kentcdodds.com/blog/how-to-know-what-to-test/). Let’s cover that and some other stuff invisible to Jest’s eyes, but that will be pretty visible to our users:

```tsx
test("implicitly renders the primary style", () => {
  const { getByTestId } = render(<Button label="Click me" />)

  const styledButton = getByTestId("styledButton")

  expect(styledButton).toHaveStyle(
    `background-color: ${theme.color.green1};
      color: ${theme.color.white1};`
  )
  expect(styledButton).toMatchSnapshot()
})

test("explicitly renders the primary style", () => {
  const { getByTestId } = render(
    <Button label="Click me" type={ButtonType.primary} />
  )

  const styledButton = getByTestId("styledButton")

  expect(styledButton).toHaveStyle(
    `background-color: ${theme.color.green1};
      color: ${theme.color.white1};`
  )
  expect(styledButton).toMatchSnapshot()
})

test("renders secondary style", () => {
  const { getByTestId } = render(
    <Button label="Click me" type={ButtonType.secondary} />
  )

  const styledButton = getByTestId("styledButton")

  expect(styledButton).toHaveStyle(
    `background-color: ${theme.color.white1};
      color: ${theme.color.blue1};`
  )
  expect(styledButton).toMatchSnapshot()
})

test("renders tertiary style", () => {
  const { getByTestId } = render(
    <Button label="Click me" type={ButtonType.tertiary} />
  )

  const styledButton = getByTestId("styledButton")

  expect(styledButton).toHaveStyle(
    `background-color: ${theme.color.blue3};
      color: ${theme.color.white1};`
  )
  expect(styledButton).toMatchSnapshot()
})
```

Yes, you read that right, we’re snapshot testing. That’s because the `:after` pseudo element is invisible to RTL eyes (for those who are applying this to projects other than the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client), if you’re not using a styling system like Styled Components, [you should try this](https://davidwalsh.name/pseudo-element)). I have no idea why and I’ll investigate it and keep you posted if I find anything related to this, say, “issue”. Run this test and take a look at the generated snapshot. If you’re following along with the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) project or a project relaying on Styled Components, the snapshot you’re seeing doesn’t make any sense, it just contains the HTML tags and their attributes. We are snapshot testing to check whether our styles are being rendered correctly, not if the classes names are being rendered correctly. We need to add another dependency: `npm i -D jest-styled-components` and import it right on the top of the `jest.setup.js`, like this:

```js
import "jest-styled-components"
jest.setTimeout(1000 * 60)
```

At this point, we should update our snapshots by running: `npm test -- -u`. The -u flag tells Jest to update the snapshots taken. Take a look at that file now. Isn’t it more aligned with our purpose?

Time to jump to our next component to be tested, the `<Card />`. From now on you should know that we are going to get repetitive on our tests. Every component is different, but some test cases apply to them all. Whether you are following along or not, take a glance at the `<Card />` file and its test file. You will see no mystery:

```tsx
import React from "react"
import { CardWrapper, StyledCard, Title } from "./style"

interface Props {
  children?: React.ReactNode
  withTitle?: {
    title: string
    withFunction?: () => void
  }
}

export const Card: React.SFC<Props> = ({ children, withTitle }) => {
  return (
    <CardWrapper data-testid="cardWrapper">
      <StyledCard data-testid="styledCard">
        {withTitle && (
          <Title
            hoverable={!!withTitle.withFunction}
            onClick={() =>
              withTitle.withFunction ? withTitle.withFunction() : null
            }
            data-testid="title"
          >
            {withTitle.title}
          </Title>
        )}
        {children}
      </StyledCard>
    </CardWrapper>
  )
}
```

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { Card } from ".."
import { render } from "../../../utils/render"
import { fireEvent } from "@testing-library/react"

const leftClick = { button: 1 }

describe("<Card /> test case", () => {
  test("test ids are in the document", () => {
    const { getByTestId, queryByTestId } = render(<Card />)

    expect(getByTestId("cardWrapper")).toBeInTheDocument()
    expect(getByTestId("styledCard")).toBeInTheDocument()
    expect(queryByTestId("title")).toBeNull()
  })

  test("renders passed title prop with no function associated with it", () => {
    const { getByTestId } = render(<Card withTitle={{ title: "Unit tests" }} />)

    expect(getByTestId("title")).toBeInTheDocument()
    expect(getByTestId("title")).toHaveTextContent("Unit tests")
    expect(fireEvent.click(getByTestId("title"), leftClick)).toBeTruthy()
  })

  test("renders passed title prop with a function associated with it", () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Card withTitle={{ title: "Unit tests", withFunction: onClick }} />
    )

    expect(getByTestId("title")).toHaveTextContent("Unit tests")
    fireEvent.click(getByTestId("title"), leftClick)
    expect(onClick).toHaveBeenCalled()
  })

  test("renders passed children prop", () => {
    const { container } = render(
      <Card>
        <div>
          <span>We are the children! 🚸</span>
        </div>
      </Card>
    )

    expect(container).toContainHTML(
      "<div><span>We are the children! 🚸</span></div>"
    )
  })

  test("card's title is hoverable", () => {
    const onClick = jest.fn()
    const { getByTestId } = render(
      <Card withTitle={{ title: "Unit tests", withFunction: onClick }} />
    )

    expect(getByTestId("title")).toHaveStyle("cursor: pointer")
  })

  test("card's title is not hoverable", () => {
    const { getByTestId } = render(<Card withTitle={{ title: "Unit tests" }} />)

    expect(getByTestId("title")).toHaveStyle("cursor: default")
  })
})
```

There isn’t much new here, right? We are literally switching some bits of code here and there between the both test suites. I’ll go through two more examples, a little more complex compared with the previous ones, but still simple and far from as complex as it can get. Let’s move on to the `<List />` component.

```tsx
import React from "react"
import { UnorderedList, ListItem, Container } from "./style"
import { generateKey } from "../../utils/generateKey"

export interface Item
  extends Omit<React.HTMLProps<HTMLLIElement>, "ref" | "as"> {
  label: string
  key: string
}

interface Props {
  items: Item[]
  setTipKey?: (key: string) => void
  displayItemEditionModal?: () => void
  removeItem?: (args: Item) => void
  getCurrentTipLabel?: (tipLabel: string) => void
}

export const List: React.FC<Props> = ({
  items,
  displayItemEditionModal,
  removeItem,
  setTipKey,
  getCurrentTipLabel,
}) => {
  return (
    <UnorderedList data-testid="unorderedList">
      {items.map(item => {
        return (
          <ListItem
            {...item}
            key={generateKey(20)}
            withExtraFunctionalities={!!displayItemEditionModal || !!removeItem}
            data-testid="listItem"
          >
            {item.label}
            <Container>
              {displayItemEditionModal && setTipKey && getCurrentTipLabel && (
                <span
                  onClick={() => {
                    setTipKey(item.key)
                    getCurrentTipLabel(item.label)
                    displayItemEditionModal()
                  }}
                >
                  ♻️
                </span>
              )}
              {removeItem && <span onClick={() => removeItem(item)}>➖</span>}
            </Container>
          </ListItem>
        )
      })}
    </UnorderedList>
  )
}
```

As you can see, this component has more conditions than any of the previous components, and all of them are inside a loop. One way we can test each of them is iterating over them on our tests as well.

```tsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { List } from ".."
import { render } from "../../../utils/render"
import { tips } from "../../../utils/mocks"
import { fireEvent } from "@testing-library/react"

describe("<List /> test case", () => {
  test("test ids are in the document and items are rendered", () => {
    const { getByTestId, getAllByTestId } = render(<List items={tips} />)

    expect(getByTestId("unorderedList")).toBeInTheDocument()
    expect(getAllByTestId("listItem")).toHaveLength(tips.length)
  })

  test("renders items with extra functionalities", () => {
    const mockFunction = jest.fn()
    const { getAllByTestId } = render(
      <List
        items={tips}
        removeItem={mockFunction}
        displayItemEditionModal={mockFunction}
      />
    )

    expect(getAllByTestId("listItem")).toMatchSnapshot()
  })

  test("renders edit option when on edit mode", () => {
    const mockFunction = jest.fn()
    const { queryAllByText } = render(
      <List
        items={tips}
        displayItemEditionModal={mockFunction}
        getCurrentTipLabel={mockFunction}
        setTipKey={mockFunction}
      />
    )

    const editItemButtons = queryAllByText(/♻️/i)

    expect(editItemButtons).toHaveLength(tips.length)

    for (let i = 0; i < editItemButtons.length; i++) {
      fireEvent.click(editItemButtons[i])
    }

    expect(mockFunction).toHaveBeenCalledTimes(editItemButtons.length * 3)
  })

  test("renders remove option when removeItem function is passed", () => {
    const removeItem = jest.fn()
    const { queryAllByText } = render(
      <List items={tips} removeItem={removeItem} />
    )

    const removeItemButtons = queryAllByText(/➖/i)
    expect(removeItemButtons).toHaveLength(tips.length)

    for (let i = 0; i < removeItemButtons.length; i++) {
      fireEvent.click(removeItemButtons[i])
    }

    expect(removeItem).toHaveBeenCalledTimes(removeItemButtons.length)
  })
})
```

By now you should have enough artillery to write trivial tests, and if you’re following along with the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client) project, you should be able to find your way to 200% coverage. I would like to go through one more example, which you’ll probably face quite often, let’s dive into the `<LandingPage />` component.

```tsx
import React from "react"
import { Image, Span, GreetingsBox } from "./style"
import rocketLaunch from "../../icons/rocketLaunch.png"
import { useLandingPageContext } from "../../contexts/LandingPageContext"
const Modal = React.lazy(() => import("./Modal"))

export const LandingPage: React.FC = () => {
  const {
    state,
    hideTipsModal,
    addTip,
    displayTipAdditionModal,
    displayTipEditionModal,
    displayTipsModal,
    removeTip,
    editTip,
  } = useLandingPageContext()

  return (
    <React.Suspense fallback={"loading..."}>
      {!!state.modal && (
        <Modal
          state={state}
          hideTipsModal={hideTipsModal}
          addTip={addTip}
          displayTipAdditionModal={displayTipAdditionModal}
          displayTipEditionModal={displayTipEditionModal}
          displayTipsModal={displayTipsModal}
          removeTip={removeTip}
          editTip={editTip}
          data-testid="modal"
        />
      )}
      <GreetingsBox data-testid="greetingsBox">
        <Span data-testid="span">
          The install worked successfully! Congratulations!
        </Span>
        <br />
        <Span data-testid="span">Now go build something great 😃!</Span>
      </GreetingsBox>
      <Image src={rocketLaunch} alt={"Rocket being launched"} />
    </React.Suspense>
  )
}
```

This component is highly dependent on the provided context, and, as you can notice, it lazy loads another component. To mock our context, we just need to pass a value to our provider. Like this:

```tsx
test("renders suspense fallback", () => {
  const mockFunction = jest.fn()
  const tree = (
    <LandingPageContext.Provider
      value={{
        state: {
          modal: ModalState.tips,
          tips,
        },
        dispatch: mockFunction,
      }}
    >
      <LandingPage />
    </LandingPageContext.Provider>
  )
  const { getByText } = render(tree)

  expect(getByText("loading...")).toBeInTheDocument()
})
```

If you’re not following along with the [react-typescript-client](https://github.com/marcelovicentegc/react-typescript-client), and using, say, MobX, Redux or EasyPeasy to manage your state, you’ll likely need to change the `<LandingPageContext.Provider value={...} />` for something along these lines: `<Provider store={new ExampleStore()} />`. Our suspended lazy component has not resolved yet, so the import we see on the LandingPage.tsx snippet’s line 5 has not finished. Thus, we test if the suspense fallback is rendering what we expect. If we tried to verify the `<Modal />` existence, we would get an error, because in this case we’re not waiting the lazy component to be loaded. To do so, we need to use jest’s ability to resolve promises. This is the way we test lazy loaded components:

```tsx
test("renders tips card", async () => {
  const mockFunction = jest.fn()
  const tree = (
    <LandingPageContext.Provider
      value={{
        state: {
          modal: ModalState.tips,
          tips,
        },
        dispatch: mockFunction,
      }}
    >
      <LandingPage />
    </LandingPageContext.Provider>
  )
  const { getByTestId } = render(tree)

  const modal = await waitForElement(() => getByTestId("innerCardWrapper"))

  expect(modal).toBeVisible()
})
```

There are several ways to do this, and I highly recommend you to watch [this video](https://www.youtube.com/watch?v=lfb5jvHq9c4&t=719s) by Kent Dodds if you want to learn more how to do so.

# 🔭 The end

If you got this far, congratulations! If you didn’t know anything about unit testing with Jest and RTL, I believe you now have the minimum requirement to set your testing environment up and write the most trivial test cases you’ll probably encounter on many code bases. I hope this article was helpful, and please feel free to comment, review, interrogate and leave your feedback. Any help to improve this article is welcome! See you next time 😉.
