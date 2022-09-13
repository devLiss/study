import express,{Request, Response} from 'express'

const app = express()
const port = 3000

app.get('/',(req:Request, res:Response) =>{

    let helloWorld = 'Hello world!!';
    res.send(helloWorld)
})

app.listen(port,()=>{
    console.log(`Listening port ${port}`)
})