const Historia = require('../models/historia.model')



function crearHistoraDefult (){
    Historia.find((err,HistoriaFiended)=>{
        if(err){
            return console.log("error en la peticion 1")            
        }else if (HistoriaFiended.length == 0){
            let histriaModel = new Historia()
            histriaModel.EncalceVideo = 'https://www.youtube.com/watch?v=f0hN3s9XvI0'
            histriaModel.DescripcionHistoria = 'Lorem, ipsum dolor sit amet '
            histriaModel.imgPathPrincipal = 'asd'
            histriaModel.imgPathFondo = 'asd'
            histriaModel.save((err,noticia1Saved)=>{
            if(err){
                return console.log('error en la peticon 2')
            }else if (noticia1Saved){
               return console.log('se crearon las noticas predeterminadas porfavor de la orden de editarlos')
            }
         })
        }else {
            return console.log("se encontraron registros sobre las noticias ")
        }
    })


}




async function obtenerHistoria(req,res){
    Historia.find({},(err,historiaFiend)=>{
        if(err){
            return res.status(200).send({message:'error en la peticion'})
        }else if(historiaFiend){
            return res.status(200).send({historia:historiaFiend})
        }

    })
}

function editarhistoria(req,res){
    let  idHistoria = req.params.idHistoria
    let parametros = req.body
    
    Historia.findByIdAndUpdate(idHistoria,parametros,{new:true},(err,historiaUpdated)=>{
        if(err){
            return res.status(200).send({messege:'error en la petion'})
        }else if (historiaUpdated){
            return res.status(200).send({historia:historiaUpdated})
        }else{
            return res.status(200).send({message:'error al editar'})

        }
    })


}

function eliminarhistoria(req,res){
    let idHistoria = req.params.idHistoria
    
    Historia.findByIdAndDelete(idHistoria,(err,historiaDeleted)=>{
        if(err){
            return res.status(200).send({message:'error en la peticion'})
        }else if(historiaDeleted){
            return res.status(200).send({message:'se elimino correctamente'})
        }
    })
}

 function createHistoria(req,res){
    console.log(req.body)
    return res.json({
        message:'photo successfully saved'
    })
}



module.exports ={
    crearHistoraDefult,
    eliminarhistoria,
    obtenerHistoria,
    editarhistoria,
    createHistoria
}