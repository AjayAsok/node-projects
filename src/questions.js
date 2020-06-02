const questions = ["Your FirstName", "Your LastName"]
const ans = []

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)
}

ask()
process.stdin.on("data", data => {
    ans.push(data.toString().trim())
    if (ans.length < questions.length) {
        ask(ans.length)
    }
    else {
        process.exit()
    }
})