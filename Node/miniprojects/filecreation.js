import readline from "readline";
import fs from "fs";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const showmenu=()=>{
    rl.question("1.enter the file name",handlefilecreation)
}

const handlefilecreation=(filename)=>{
         rl.question("enter the content for file",(content)=>{
            fs.writeFileSync(`${filename}.txt`,`${content}`,"utf-8");
           console.log(`file ${filename}.txt created successfully`);
           rl.close();
         })
        
}


showmenu();