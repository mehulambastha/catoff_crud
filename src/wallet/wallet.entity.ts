// wallet-address.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.walletAddress, { cascade: true })
  @Exclude({ toPlainOnly: true })
  user: User;
}
