// wallet.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Exclude } from 'class-transformer';

// entity is basically like creating Models in express.js they serve the same purpose
@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  // i defined a onetoone relation betweent he wallet address and the user who crated it so that it is linked correctly.
  // IMPORTANT NOTE
  // I had to use the class transformer package to get rid of circular reference errors.
  // Issue I faced-
  // Creating the wallet address and saving it in its own table as soon as a user is created. Now I had created the walletAddress using the 'wallet' repository but the issue was that due to me referencing the User in the wallet entity itself, was generatting a circular reference. Solved it using transform and exclude from class transformer package.

  @OneToOne(() => User, (user) => user.walletAddress, { cascade: true })
  @Exclude({ toPlainOnly: true })
  user: User;
}
