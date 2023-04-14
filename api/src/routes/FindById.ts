import express from 'express'
import findById from '../service/DiaryService'
const route = express.Router()

route.get('/:id',(req,resp)=>{
    const id : number = Number(req.params.id)
    findById.getEntries()
    if(isNaN(id)){
        resp.json({error: 'the id must be a number'})
    }
    resp.send(`<h2>${id}</h2>`)
})

export default route