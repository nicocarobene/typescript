import express from 'express'

const router = express.Router()

router.get('/',(_req, resp)=>{
    resp.send('<h1>Pong</h1>')
})

export default router