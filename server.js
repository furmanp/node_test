import express from 'express'


const app = express()


app.use(express.json())
app.get('/', (req, res)=>{
    res.status(200).json("hey Imco")
})
app.listen(8080, () => {
    console.log("the app is running")
})