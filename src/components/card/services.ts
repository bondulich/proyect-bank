import { Card } from "./entity";
import { dataSource } from "../../database/data-source";

const cardRepository = dataSource.getRepository(Card);

export class CardServices {
  constructor() {}

  static async activate(req) {
    const { cardnumber } = req.body;
    const card = await cardRepository.findOne({where: { cardnumber }});
    card.enabled=true;

    return await cardRepository.save(card);
  }

  static save() {

  }
}
