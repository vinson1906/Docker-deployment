const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 6500;

app.use(cors())

app.get("/api/get/message", async (req, res) => {
    res.json({
        data: "hii this is for learning purpose!"
    })
})

app.post("/api/post/example",async(req,res) => {
    const {data} = req.body;
    res.json({
        message:"posted successfully",
        result:data
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
