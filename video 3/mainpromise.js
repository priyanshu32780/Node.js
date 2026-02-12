import fs from "fs/promises"

let a = await fs.readFile("priyanshu.text")

let b = await fs.appendFile("priyanshu.text", "this is amazing promish")
console.log(a.toString(),b)