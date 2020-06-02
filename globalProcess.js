const grab = flag => {
    let i = process.argv.indexOf(flag) + 1
    return process.argv[i]
}

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)