const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const controllerUser = require('../controllers/userController');
const authUser = require('../middlewares/authUser');
/* GET home page. */
router.get('/', controller.home);
router.get('/tareas', authUser, controller.tareas);
router.post('/login', controller. procesoLogin);

// RUTAS API Notas
router.get('/api', authUser,controller.list);
router.get('/api/:id',authUser,  controller.find );
router.post('/api/', authUser, controller.create );
router.put('/api/:id', authUser, controller.update );
router.delete('/api/:id', authUser, controller.delete );

// RUTAS API LOGIN, REGISTER
router.post('/api/login', controllerUser.procesoLogin );
router.post('/api/registro', controllerUser.procesoRegistro );
router.get('/api/logout', controllerUser.logout );

module.exports = router;
