import express from "express"

const app=express();

app.get("/",(req,res)=>{
       res.send("hello");
       //we can also directly pass html content[full code jitna bada bhi ho] in side re.send("<h1>hellow</h1>")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log("Server is running");
    
})