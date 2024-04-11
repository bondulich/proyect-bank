import { Card } from "./entity";
import { dataSource } from "../../database/data-source";

const cardRepository = dataSource.getRepository(Card);

export const isValidCardMiddleware = async (req, res, next) => {
  const { cardnumber } = req.body;
  const card = await cardRepository.findOne({where: { cardnumber }});
  
  if(!card){
    return res.status(401).json({message: "La tarjeta no existe"});
  }

  if(!card.enabled){
    return res.status(401).json({message: "La tarjeta no esta activada"});
  }

  next();
}

export const isValidLimitCardMiddleware = async (req, res, next) => {
  const { cardnumber } = req.body;
  const card = await cardRepository.findOne({where: { cardnumber }});
  
  if(!card){
    return res.status(401).json({message: "La tarjeta no existe"});
  }

  const { amount } = req.body;

  if(amount > card.limit){
    return res.status(401).json({message: "El monto supera al limite de la tarjeta"});
  }

  next();
}