const fs = require("fs")

console.log(fs)

console.log("Starting")
// fs.writeFileSync("priyanshu.text","priyanshu is a good boy")
// console.log("Ending")

fs.writeFile("priyanshu2.text","priyanshu is a good boy",()=>{
    console.log("done")
    fs.readFile("priyanshu2.text",(error,data)=>{
        console.log(error,data.toString())
    })
})

console.log("Ending")



