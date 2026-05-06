const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get("/" , (req , res ) => {
    
    res.send("server is running")
})



// mongodb+srv://simpleClientUser:oEbr1dPXWDrAaejS@cluster0.xbssfgf.mongodb.net/?appName=Cluster0
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})