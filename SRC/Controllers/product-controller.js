const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req,res,next) => {
    Product.find({}).then(data => {
        res.status(200).send(data);
    }).catch(e=> {
        res.status(400).send(e);
    });
}

exports.getByRisc = (req,res,next) => {
    Product.find({
        Risc: req.params.Risc,
        active: true
    }).then(data => {
        res.status(200).send(data);
    }).catch(e=> {
        res.status(400).send(e);
    });
}

exports.getByAgente = (req,res,next) => {
    Product.find({
        Agente: req.params.Agente,
        active: true
    }).then(data => {
        res.status(200).send(data);
    }).catch(e=> {
        res.status(400).send(e);
    });
}

exports.post = ('/', (req, res, next) => {
    let product = new Product(req.body);
    product.save().then(x => {
        res.status(201).send({message: 'Risco cadastrado com sucesso'});
    }).catch(e=> {
        res.status(400).send({
            message: 'Error ao cadastrar produto',
            data: e
        });
    });
    
});

exports.put = ('/:id', (req, res, next) =>{
    product.findByIdAndUpdate(req.params.id, {
        $set:{
            Risc: req.body.Risc,
            agente: req.body.Agente,
            description: req.body.description,
        }
    }).then(x => {
        res.status(200).send({
            message:'Risco atualizado com sucesso!'
        });
    }).catch(e=> {
        res.status(400).send({
            message: 'Falha ao atualizar risco.',
            data: e
        })
    })
});

exports.delete = ('/', (req, res, next) => {
    product.findOneAndRemove(req.params.id).then(x => {
        res.status(200).send({
            message:'Risco removido com sucesso!'
        });
    }).catch(e=> {
        res.status(400).send({
            message: 'Falha ao remover risco.',
            data: e
        })
    })
});