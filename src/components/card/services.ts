import { Card } from "./entity";
import { dataSource } from "../../database/data-source";
import argon2 from "argon2";

const cardRepository = dataSource.getRepository(Card);

export class CardServices {
  constructor() {}

  static async activate(req) {
    const { cardnumber } = req.body;
    const card = await cardRepository.findOne({where: { cardnumber }});
    card.enabled=true;

    return await cardRepository.save(card);
  }

  static async changePIN(req) {
    const { cardnumber, pin } = req.body;
    const card = await cardRepository.findOne({where: { cardnumber }});
    const pinHash = await argon2.hash(pin);
    card.pin = pinHash;

    return await cardRepository.save(card);
  }
}
