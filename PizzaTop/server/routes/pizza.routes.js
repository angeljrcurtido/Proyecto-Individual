const ControladorPizza = require('../controllers/pizza.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {

    app.get('/api/obtenerpizza',authenticate,ControladorPizza.obtenerPizza)
    app.get('/api/obtenerunapizza/:id',authenticate,ControladorPizza.obtenerUnaPizza)
    app.post('/api/crearpizza',authenticate,ControladorPizza.crearPizza)
    app.put('/api/editarpizza/:id',authenticate,ControladorPizza.editarPizza)
    app.delete('/api/borrarpizza/:id',authenticate,ControladorPizza.eliminarPizza)
}
