const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const authUser = require('../middlewares/authUser');
/* GET home page. */
router.get('/', controller.home);
router.get('/tareas', authUser, controller.tareas);
router.post('/login', controller. procesoLogin);

// RUTAS API
router.get('/api',  controller.list);
router.get('/api/:id',  controller.find );
router.post('/api/',  controller.create );
router.put('/api/:id',  controller.update );
router.delete('/api/:id',  controller.delete );


module.exports = router;
