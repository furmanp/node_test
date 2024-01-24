import express from 'express'


const app = express()


app.use(express.json())
app.get('/', (req, res)=>{
    res.status(200).json({success: true, message:"test app"})
})
app.get('/imco', (req, res)=>{
    res.status(200).json({success: true, message: "hey handsome"})
})
app.listen(8080, () => {
    console.log("the app is running")
})