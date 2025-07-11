
import fs from "fs/promises"

let a = await fs.readFile("mmk.txt")
console.log(a.toString())

let b = await fs.appendFile("mmk.txt","\n\n Hare Krishna Hare Krishna \n Krishna Krishna Hare Hare \n Hare Rama Hare Rama \n Rama Rama Hare Hare")
console.log(b)
//There is no need of async and await in the above code as we are using promises.