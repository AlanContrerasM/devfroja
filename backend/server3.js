//aqui vamos a probar mongodb
// lo abrimos en este folder por que ya instalamos express y todo
// para usar mongo estamos usando mlab, y mongoose
// instalar mongoose npm install mongoose --save
//Creamos un archivo para que sea el cliente de mongoose mongooseClient.js
var express = require('express')
const bodyParser = require('body-parser')
var app = express()

//para llamar un archivo que esta en esta carpeta usamos ./ y asi importamos archivos
const {Articulo,Factura} = require('./mongooseClient3')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Todo lo de articulos

//crear articulo
app.post('/api/v1/articulos/create', (req,res)=>{
    const {name,price,stock,description} = req.body
    let nuevoArticulo = Articulo({
        name,
        price,
        stock,
        description
    })
    nuevoArticulo.save((err,articulo)=>{
        if (err) throw err;
        res.status(201).send(articulo)
    })
})

//get todos los articulos
app.get('/api/v1/articulos', (req,res)=>{
    Articulo.find().exec().then(articulos =>{
        res.send(articulos)
    }).catch(err => {
        res.status(400).send(err)
    })
})

//obtener el articulo por id
app.get('/api/v1/articulos/:uid', (req,res)=>{
   const {uid} = req.params
   Articulo.findById(uid).exec().then(articulo =>{
        res.send(articulo)
   }).catch(err =>{
       res.status(404).send(err)
   })
})

function getPrice(uid){
    return new Promise((resolve,reject)=>{
        app.get(`/api/v1/articulos/${uid}`, (req,res)=>{
            Articulo.findById(uid).exec().then(articulo =>{
                 resolve(articulo.price)
            }).catch(err =>{
                res.status(404).send(err)
            })
         })
    })
}

app.delete('/api/v1/articulos/:uid',(req,res)=>{
    const {uid} = req.params
   Articulo.findByIdAndRemove(uid).exec().then(articulo =>{
       res.status(204).send()
   }).catch(err =>{
       res.status(404).send(err)
   })
});

//updatear un id
app.put('/api/v1/articulos/:uid',(req,res)=>{
    const {uid} = req.params
   Articulo.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec().then(articulo =>{
        res.send(articulo)
   }).catch(err =>{
       res.send(err)
   })
});


//Todo lo de facturas

//crear factura



app.post('/api/v1/facturas/create', (req,res)=>{
    const {rfc,articulosComprados} = req.body
    

    function subTotales(arts){
        return new Promise((resolve,reject)=>{
            var sub = 0
            var counter = 0;
            for(i=0;i<arts.length;i++){
                let quant = arts[i].cantidad
                Articulo.findById(arts[i].id).exec().then(articulo =>{
                    sub += quant*articulo.price
                    counter ++
                    if(counter === arts.length){
                        resolve(sub)
                    }
                }).catch(err =>{
                    res.status(404).send(err)
                    reject("Error")
                })
                
            }
        })
    }

    subTotales(articulosComprados).then(response =>{
        var subTotal = response
        console.log("Numero final",subTotal)
        var iva = subTotal*.16
        var total = subTotal + iva

        let nuevoFactura = Factura({
            rfc,
            articulosComprados,
            subTotal,
            iva,
            total:total
        })
        nuevoFactura.save((err,factura)=>{
            if (err) throw err;
            res.status(201).send(factura)
        })
    })
                                .catch(err=>{console.log(err)})
    /*
    function subTotales(arts){  
        for(i=0;i<arts.length;i++){
            let quant = arts[i].cantidad
            Articulo.findById(arts[i].id).exec().then(articulo =>{
                sub += quant*articulo.price
                console.log(sub)
            }).catch(err =>{
                res.status(404).send(err)
            })
        }
        return sub
    }
    subTotales(articulosComprados)
    
    var subTotal = sub
    console.log("Numero final",subTotal)
    var iva = subTotal*.16
    var total = subTotal + iva

    let nuevoFactura = Factura({
        rfc,
        articulosComprados,
        subTotal,
        iva,
        total:total
    })
    nuevoFactura.save((err,factura)=>{
        if (err) throw err;
        res.status(201).send(factura)
    })
    */
})

//get todas las facturas
app.get('/api/v1/facturas', (req,res)=>{
    Factura.find().exec().then(factura =>{
        res.send(factura)
    }).catch(err => {
        res.status(400).send(err)
    })
})

//obtener la factura por id
app.get('/api/v1/facturass/:uid', (req,res)=>{
   const {uid} = req.params
   Factura.findById(uid).exec().then(factura =>{
        res.send(factura)
   }).catch(err =>{
       res.status(404).send(err)
   })
})

app.delete('/api/v1/facturas/:uid',(req,res)=>{
    const {uid} = req.params
   Factura.findByIdAndRemove(uid).exec().then(factura =>{
       res.status(204).send()
   }).catch(err =>{
       res.status(404).send(err)
   })
});

//updatear un id
app.put('/api/v1/facturas/:uid',(req,res)=>{
    const {uid} = req.params
   Factura.findByIdAndUpdate(uid,{$set:req.body},{new:true}).exec().then(factura =>{
        res.send(factura)
   }).catch(err =>{
       res.send(err)
   })
});


app.listen(3000,()=>{
    console.log('server on 3000')
})