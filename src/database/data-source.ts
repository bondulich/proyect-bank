import { DataSource } from "typeorm";
import { Transaction } from "../components/transaction/entity";
import { Account } from "../components/account/entity";
import { Card } from "../components/card/entity";

export const dataSource = new DataSource({
  type: "mysql",
  host: "db", // Linked service name in docker-compose.yml
  port: 3306, // Linked port in docker-compose.yml
  username: "root",
  password: "toor",
  database: "proyect-bank",
  entities: [Card, Account, Transaction],
  logging: true,
  synchronize: true,
});
