const path = require('path');
const db= require('../database/models');
const moment = require('moment');
const bcrypt= require('bcrypt')
const controller={
    
    home: (req,res) => {
        return res.render('index');
    },
    tareas: (req,res) => {
        return res.render(path.join(__dirname,'../views/tareas.ejs'))
    },
    procesoLogin: async (req, res) => {
        
        const {email,password} = req.body;
        userLogin= await db.Usuario.findOne({
            where: {
                mail: email
            } ,
            raw: true, // convertir en obeto
            nest: true,
        })
        console.log(userLogin)
        if(userLogin){
            pass=bcrypt.compareSync(password,userLogin.password);
            if(pass){
               
                delete userLogin.password
                req.session.userLogin =userLogin;
                return res.redirect('/tareas')
                
            }
        }

    },
    list: async (req, res) => {
        //const tareas = await db.Tarea.findAll();
        //res.json({tareas});
        try{
            const tareas = await db.Tarea.findAll();
            
            const response={
                meta:{
                    status: 200,
                    total:tareas.length,
                    url:'api/'
                },
                data: tareas,
                total:tareas.length
                
            }
            return res.json(response);
        } catch(error){
            return res.json({ message: error.message})
        } 
    },
    find:async (req, res) => {
        const id = req.params.id;
        //const tarea= await db.Tarea.findByPk(id);
       // res.json({tarea});
       try {
        const tarea= await db.Tarea.findByPk(id);
        const response={
            meta: {
                status: 200,
                total:1,
                url:`api/${tarea.id}`
            },
            data:tarea
        }
       return  res.json(response);
    } catch (error) {
        return res.json({ error});
    }



    },
    create: async (req, res) => {
        try{
        const {nombre,informacion,idPrioridad,idStatus}= req.body;
        const confirm=await db.Tarea.create({
            nombre,
            informacion,
            idPrioridad:parseInt(idPrioridad),
            idStatus:parseInt(idStatus)})
            const response={
                "message":"¡Tarea creada!"
            }
           return  res.json(response);
            } catch (error) {
                return res.json({ message: error.message})
            }
    },
    update: async (req, res) => {
        const {nombre,informacion,idPrioridad,idStatus}= req.body;
         const time=moment().format('YYYY-MM-DD hh:mm:ss')
         try{
        await db.Tarea.update({
            nombre,
            informacion,
            idPrioridad:parseInt(idPrioridad),
            fechaModificacion:time,
            idStatus:parseInt(idStatus)},{where: {id:req.params.id}});
            const response={
                "message":"¡Tarea actualizada!"
            }
             return  res.json(response);
            } catch (error) {
                return res.json({ message: error.message})
            }
    
    },
    delete:async (req, res) => {
        try{
        await db.Tarea.destroy({where: {id:req.params.id}});
        res.json({"message":"¡Tarea eliminada!"})
        } catch{
            return res.json({ message: error.message})
        }
    }
}

module.exports=controller;