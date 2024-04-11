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
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

}