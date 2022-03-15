
const dbs = require('../model/index.ts');

const Tutorial = dbs.tutirial;
const Op = dbs.sequelize.Op;

//create tutorial 
exports.create = (req,res)=>{
//validate request
if(!req.body.title){
    res.status(400).send({
        message:'Title is empty!'
    });
    return;
}

//Set tutorial
const tutorial ={
title: req.body.title,
description:req.body.description,
published:req.body.published ? req.body.published : false
};

//Save tutorial
Tutorial
.create(tutorial)
.then(data => {
    res.send(data);
})
.catch(err=>{
    res.status(500).send({
        message:err.message || 'Create tutirial failure'
    });
})

};


//Retrueve all tutiruals
exports.findAll = (req,res) => {
    const title = req.query.title;
    let condition = {where:{}};

   
    Tutorial
    .findAll(condition)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
        message:err.message || 'Retrieve all tutorials failure'
        });
    });
    
};

//Retrueve tutirual by id
exports.findOne = (req,res) =>{
    const id = req.params.id;

    Tutorial
    .findByPk(id)
    .then(data=>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Retrieve tutorial faulure.(id:'+id+')'
        });
    });
};

//upeate
exports.update = (req,res)=>{
    const id = req.params.id;
    const condition = id ? {where:{id:id}}:null;

    Tutorial
    .update(
        req.body,
        condition
    )
    .then(resultCount => {
        if(resultCount == 1){
            res.send({
                message : 'Tutorial updated'
            });
        }else{
            res.send({
                message:'Cannot update tutorial.(id:' + id + ')'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || 'Update tutorial failure. (id:' +id+')'
        });
    });
};

//delete
exports.delete = (req,res) => {
    const id = req.params.id;
    const condition = id ? {where:{id:id}}:null;

    Tutorial
    .destroy(condition)
    .then(resultCount => {
        if(resultCount == 1 ){
            res.send({
                message:'Tutorial deleted'
            });
        }else{
            res.send({
                message:'Cannot dlete tutorial (id'+ id + ')'
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || 'Delete tutorial faulure (id:' +id+')'
        });
    });
};


    