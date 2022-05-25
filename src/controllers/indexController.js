const path = require('path');
const db= require('../database/models');
const controller={
    
    home: (req,res) => {
        return res.render('index');
    },
    tareas: (req,res) => {
        return res.render('tareas')
    },
    list: async (req, res) => {
        const tareas = await db.Tarea.findAll();
        res.json({tareas});
    },
    find:async (req, res) => {
        const id = req.params.id;
        const tarea= await db.Tarea.findByPk(id);
        res.json({tarea});

    },
    create: async (req, res) => {
        const {nombre,informacion,idPrioridad,idStatus}= req.body;
        await db.Tarea.create({
            nombre,
            informacion,
            idPrioridad:parseInt(idPrioridad),
            idStatus:parseInt(idStatus)})
        res.status(200).end();
    },
    delete:async (req, res) => {
        await db.Tarea.destroy({where: {id:req.params.id}});
        res.status(204).end();
    }
}

module.exports=controller;