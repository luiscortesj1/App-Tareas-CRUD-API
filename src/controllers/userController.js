/*const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const controller={
       
        procesoLogin: async (req, res) => {
           
            const {email,password} = req.body;
            userLogin= await db.User.findOne({
                where: {
                    email: email
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
        registro: (req,res) => {
            
            return res.render(path.join(__dirname,'../views/users/register'));
        },
        procesoRegistro: async (req, res) => {
            console.log(req.body);
            const errorsValidator =validationResult(req);
            
                if(errorsValidator.errors.length>0){
                    return res.render(path.join(__dirname,'../views/users/register'),{errors:errorsValidator.mapped(),old:req.body});

                }else{
                const {name,lastname,email,password, address,cellphone}=req.body
                
                await db.User.create({
                    name,
                    lastname,
                    email,
                    address,
                    cellphone,
                    password: bcrypt.hashSync(password,10),
                    idRol:2,
                    image: req.file.filename
                    
                 })
                    return res.redirect('/');
                }
        },
        logout:(req,res)=>{
           // res.clearCookie('userEmail')
            req.session.destroy();
            res.redirect('/');
        },
        profile: async (req,res)=>{
            //console.log( req.session.userLogin.id);
             const id= req.session.userLogin.id
            const user= await db.User.findOne({
                where: {
                    id: id
                } ,
                raw: true, // convertir en obeto
                nest: true,
            })
            delete user.password;
            
            console.log(user);
           res.render(path.join(__dirname, '../views/users/profile.ejs'),{user})
        },
        profileEdit: async (req,res)=>{
            //console.log( req.session.userLogin.id);
            const id= req.session.userLogin.id
            const user= await db.User.findOne({
                where: {
                    id: id
                } ,
                raw: true, // convertir en obeto
                nest: true,
            })
            delete user.password;
            
            res.render(path.join(__dirname, '../views/users/editarProfile.ejs'),{user})
        },
        profileEditanto: async(req, res)=>{
            const id= req.session.userLogin.id;
            console.log( id)
            
            
            const {name,lastname,address,cellphone}=req.body;
            if(req.file){
                await db.User.update({
                   name,lastname,address,cellphone,
                   image:req.file.filename
                },{where:{id:id}})
            }else{
                await db.User.update({
                    name,lastname,address,cellphone
                 },{where:{id:id}})  
            }
            res.redirect('/user/profile/')
        }
      
      
        }
        
        module.exports = controller; */