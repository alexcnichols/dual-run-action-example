async function main(name) {
    const nameToGreet = name;
    console.log(`Hello ${nameToGreet}`);

    const time = (new Date()).toTimeString();
    return time;
}

module.exports = { main };