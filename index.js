const { main } = require("./greet");

require("dotenv").config();

const { env } = process;
const { name } = env;

try {
    main(name);
} catch(error) {
    console.log('Error: ' + error);
}