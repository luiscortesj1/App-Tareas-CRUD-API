const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const controller={
       
        procesoLogin: async (req, res) => {
           try{
            const {mail,password} = req.body;
            userLogin= await db.Usuario.findOne({
                where: {
                    mail: mail
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
                    const response={
                        "message":"¡Login Exitoso!"
                    }
                    return  res.json(response);
                }
            }
            }catch(error){
                return res.json({ message: error.message})  
            }
   
        },
        procesoRegistro: async (req, res) => {
            console.log(req.body);
            try{
            const {nombre,mail,password}=req.body
                await db.Usuario.create({
                    nombre,
                    mail,
                    password: bcrypt.hashSync(password,10)  
                 })
                const response={
                    "message":"¡Usuario Registrado!"
                }
                return  res.json(response);
            }catch(error){
                return res.json({ message: error.message})
            }
                
        },
        logout:(req,res)=>{
            try{
                req.session.destroy();
            const response={
                "message":"¡Logout!"
            } 
            res.json(response);
                }catch(error){
                    return res.json({ message: error.message})
                }
        }
        
       
        
        }
        
        module.exports = controller; 



        