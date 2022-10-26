import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();

routes.get('/usuario/listar', UserController.listar /**  */);
routes.get('/usuario/:id', UserController.buscarId /**  */);
routes.get('/usuario/idade', UserController.buscarIdade /**  */);
routes.get('/usuario/sexo', UserController.buscarSexo /**  */);
// continuar aqui
export default routes;
