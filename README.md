# dual-run-action-example

An example of a program that can be run either directly or via GitHub Actions.

## Running directly

1. Clone locally (or open in GitHub Codespaces)
1. Create a `./.env` file with the following variables:
   1. `name=Alex`: The name for the greeting
1. Run `npm install` in the terminal
1. Run `node index.js` in the terminal

## Running as an Actions workflow

```yml
name: example

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    name: Example
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: npm install
        run: npm install
      - name: Run example
        uses: ./
```
