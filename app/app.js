const express = require("express");
const app = express();

app.get("/", (req,res)=>{
res.send("Node.js App deployed on GKE using Jenkins CI/CD 🚀");
});

app.listen(3000,()=>{
console.log("Server running on port 3000");
});
