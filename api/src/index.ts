import express from 'express'
import router from './routes/diaries'

const app= express()
app.use(express.json())

app.get('/',(_req,resp)=>{
    resp.send('<h1>Hola MUNDO</h1>')
})

app.use('/api/diares',router)

const PORT=3030
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})