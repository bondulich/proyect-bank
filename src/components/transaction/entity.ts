import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Account } from "../account/entity";

export enum Type {
  Ingress = 'ingress',
  Egress = 'egress',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  detail: string;

  @Column({ type: 'decimal', nullable: false })
  amount: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @Column('enum', { nullable: false, enum: Type })
  type: Type
}
