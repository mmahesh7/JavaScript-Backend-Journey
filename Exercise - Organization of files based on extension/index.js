import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\mmahe\\OneDrive\\Documents\\Sigma\\Video 93"
const files = await fs.readdir(basepath)
// console.log(files)
for (const file of files) {
    console.log("Running for ", file)
    const ext = file.split(".")[1]
    // console.log(ext)
    if(ext != 'js' && ext != 'json' && file.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath,ext))){
            fs.rename(path.join(basepath,file),path.join(basepath,ext,file))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath,file),path.join(basepath,ext,file));
        }
    }
}