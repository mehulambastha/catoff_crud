import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { WalletAddress } from '../wallet/wallet.entity';

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

  @OneToOne(() => WalletAddress, (walletAddress) => walletAddress.user)
  @JoinColumn()
  walletAddress: WalletAddress;
}
