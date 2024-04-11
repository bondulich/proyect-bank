import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Transaction } from "../transaction/entity";
import { Card } from "../card/entity";

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  iban: string;

  @Column({ type: 'decimal', nullable: false })
  balance: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.account, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn()
  transactions: Transaction[];

  @ManyToOne(() => Card, (card) => card.accounts)
  card: Card;
}
