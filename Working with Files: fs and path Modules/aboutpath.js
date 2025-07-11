import path from "path"
// console.log(path)
let mypath = "C:\\Users\\mmahe\\OneDrive\\Documents\\Sigma\\Video 87\\mmk.txt"

// console.log(path.extname(mypath)) // return extension name of the file--> .txt

// console.log(path.dirname(mypath)) //returns directory name of the file--> C:\Users\mmahe\OneDrive\Documents\Sigma\Video 87

// console.log(path.basename(mypath)) //returns name of the file wtih extension--> mmk.txt

console.log(path.join("C:/","programs\\mmk.txt"))
console.log(path.parse(mypath))