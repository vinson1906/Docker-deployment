const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 6500;

app.use(cors())

app.get("/api/get/message", async (req, res) => {
    res.json({
        data: "hii He!"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})