import express from 'express'
import router from './routes/diaries'
import FindById from './routes/FindById'

const app= express()
app.use(express.json())

app.get('/',(_req,resp)=>{
    resp.send('<h1>Hola MUNDO</h1>')
})
app.use('/api/diares',router)
app.use('/findById',FindById)

const PORT=3030
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})