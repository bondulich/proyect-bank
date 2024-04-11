import express from "express";
import { UserController } from "./components/user/controller";
import { UtilsController } from "./components/utils/controller";
import { CardController } from "./components/card/controller";
import { isValidCardMiddleware } from "./components/card/middleware";

export const routes = express.Router();

// Consultar movimientos de una cuenta específica
routes.get('/transacciones/:id_cuenta', (req, res) => {
  // Lógica para consultar movimientos
});

// Sacar dinero de la cuenta asociada a la tarjeta
routes.post('/retirar-dinero', (req, res) => {
  // Lógica para retirar dinero
});

// Ingresar dinero en la cuenta asociada a la tarjeta
routes.post('/ingresar-dinero', (req, res) => {
  // Lógica para ingresar dinero
});

// Hacer transferencias a otras cuentas
routes.post('/transferir', [isValidCardMiddleware], (req, res) => {
  // Lógica para transferir dinero
});

// Activar la tarjeta
// parms=> cardnumber: string
routes.put('/activar-tarjeta', CardController.activate);

// Cambiar el código PIN de la tarjeta
routes.put('/cambiar-pin', (req, res) => {
  // Lógica para cambiar el PIN
});
