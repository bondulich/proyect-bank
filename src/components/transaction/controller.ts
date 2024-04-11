import { TransactionServices } from "./services";

export class TransactionController {
  /**
   * @description Gets the User view.
   * @param {Req} req
   * @param {Res} res
   */

  static get = async (req, res, next) => {
    try {
      const data = await TransactionServices.get(req);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static ingress = async (req, res, next) => {
    try {
      const data = await TransactionServices.ingress(req);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static egress = async (req, res, next) => {
    try {
      const data = await TransactionServices.egress(req);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

}