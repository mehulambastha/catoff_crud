import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { WalletAddress } from '../wallet/wallet.entity';
import { Transform } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: false })
  password: string;

  // A onetoone relation connecting user' walletAddress details to the respective wallet address in that walletAddress table.
  @OneToOne(() => WalletAddress, (walletAddress) => walletAddress.user)
  @JoinColumn()
  // Using transform to debug the circular dependency error that I was experiencing.
  @Transform(({ value }) => value && { ...value, user: undefined }, {
    toPlainOnly: true,
  })
  walletAddress: WalletAddress;
}
