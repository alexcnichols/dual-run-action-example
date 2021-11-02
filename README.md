# dual-run-action-example

An example of a program that can be run either directly or via GitHub Actions.

## Running directly

1. Clone
2. Run `npm install`
3. Run `node index.js`

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
