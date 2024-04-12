import { DataSource } from "typeorm";
import { Transaction } from "../components/transaction/entity";
import { Account } from "../components/account/entity";
import { Card } from "../components/card/entity";
import environmentVars from "../config/env";

export const dataSource = new DataSource({
  type: "mysql",
  host: environmentVars.DB_HOST, // Linked service name in docker-compose.yml
  port: environmentVars.DB_PORT, // Linked port in docker-compose.yml
  username: environmentVars.DB_USER,
  password: environmentVars.DB_PASS,
  database: environmentVars.DB_NAME,
  entities: [Card, Account, Transaction],
  logging: true,
  synchronize: true,
});
