const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
/* GET home page. */
router.get('/', controller.home);
router.get('/tareas', controller.tareas);

// RUTAS API
router.get('/api', controller.list);
router.get('/api/:id', controller.find );
router.post('/api/', controller.create );
router.delete('/api/:id', controller.delete );


module.exports = router;
