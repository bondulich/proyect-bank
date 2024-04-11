import { dataSource } from "../../database/data-source";
import { Account } from "../account/entity";

const accountRepository = dataSource.getRepository(Account);

export class AccountServices {
  constructor() {}

  static getById(id: number){
    return accountRepository.findOne({where: { id }});
  }

}
