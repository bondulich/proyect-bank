import { CardServices } from "./services";

export class CardController {
  /**
   * @description Gets the User view.
   * @param {Req} req
   * @param {Res} res
   */

  static activate = async (req, res, next) => {
    try {
      const data = await CardServices.activate(req);
      res.status(200).json({success: true, message: "Tarjeta activada correctamente"});
    } catch (error) {
      next(error);
    }
  }

  static changePIN = async (req, res, next) => {
    try {
      const data = await CardServices.changePIN(req);
      res.status(200).json({success: true, message: "Cambio de PIN correcto"});
    } catch (error) {
      next(error);
    }
  }

}