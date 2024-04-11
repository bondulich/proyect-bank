import { Transaction, Type } from "./entity";
import { dataSource } from "../../database/data-source";
import { AccountServices } from "../account/services";

const transactionRepository = dataSource.getRepository(Transaction);

export class TransactionServices {
  constructor() {}

  static async get(req) {
    
  }

  static async ingress(req) {
    const { idAccount, amount, detail } = req.body;
    const account = await AccountServices.getById(idAccount);

    const transaction = {
      type: Type.Ingress,
      amount,
      detail,
      account
    }

    return await transactionRepository.save(transaction);
  }

  static async egress(req) {
    const { idAccount, amount, detail } = req.body;
    const account = await AccountServices.getById(idAccount);

    const transaction = {
      type: Type.Egress,
      amount,
      detail,
      account
    }

    return await transactionRepository.save(transaction);
  }
}
