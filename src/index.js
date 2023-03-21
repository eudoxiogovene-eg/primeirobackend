const express= require('express')
const cors= require('cors')
const path = require ('path')

const port=3333




const app=express()
const mongoose= require('mongoose')

app.use(cors())
app.use(
          express.urlencoded({
                    extended:true
          })
)

   
app.use(express.json())

const dados=[
    {nome:'eudoxio',sobrenome:'govene',idade:22,pais:'brasil',cidade:'sao paulo'},
    {nome:'sousa',sobrenome:'rafael',idade:25,pais:'estados unidos',cidade:'nova york'},
    {nome:'eugenio',sobrenome:'luxo',idade:27,pais:'alemanha',cidade:'berlim'},
    {nome:'cipriano',sobrenome:'sitoe',idade:24,pais:'franca',cidade:'paris'},
    {nome:'custodio',sobrenome:'cossa',idade:52,pais:'mocambique',cidade:'xai-xai'},
    {nome:'fedula',sobrenome:'djeje',idade:24,pais:'italia',cidade:'roma'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
    {nome:'shanaia',sobrenome:'tchaia',idade:12,pais:'portugal',cidade:'lisboa'},
]

app.get('/',(req,res)=>{
    return res.status(200).json({message:'dados do usuario',dados})
})

app.listen(port,()=>{
          console.log(`estou rodando na porta ${port}`)
})
    



