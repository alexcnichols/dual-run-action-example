const { main } = require("./greet");
const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who-to-greet');
  main(nameToGreet);
} catch (error) {
  core.setFailed(error.message);
}