import express from "express";
import { UserController } from "./components/user/controller";
import { UtilsController } from "./components/utils/controller";
import { CardController } from "./components/card/controller";
import { isValidCardMiddleware, isValidLimitCardMiddleware } from "./components/card/middleware";
import { TransactionController } from "./components/transaction/controller";

export const routes = express.Router();

// Consultar movimientos de una cuenta específica
routes.get('/transacciones/:idAccount', [isValidCardMiddleware], TransactionController.get);

// Sacar dinero de la cuenta asociada a la tarjeta
routes.post('/retirar-dinero', [isValidCardMiddleware, isValidLimitCardMiddleware], TransactionController.egress);

// Ingresar dinero en la cuenta asociada a la tarjeta
routes.post('/ingresar-dinero', [isValidCardMiddleware], TransactionController.ingress);

// Hacer transferencias a otras cuentas
routes.post('/transferir', [isValidCardMiddleware], (req, res) => {
  // Lógica para transferir dinero
});

// Activar la tarjeta
// parms => cardnumber: string
routes.put('/activar-tarjeta', CardController.activate);

// Cambiar el código PIN de la tarjeta
// params => cardnumber:string, pin:string
routes.put('/cambiar-pin', [isValidCardMiddleware], CardController.changePIN);
