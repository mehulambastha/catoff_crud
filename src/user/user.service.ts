import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { WalletAddress } from '../wallet/wallet.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(WalletAddress)
    private walletAddressRepository: Repository<WalletAddress>,
  ) {}

  // A little better. Not bare basic crud.
  async createUser(user: User): Promise<User> {
    // If the user provides a wallet address.
    if (user.walletAddress) {
      const walletAddress = user.walletAddress;

      // Adding user's data to the walletAddress also ( so that referencing is better.)
      walletAddress.user = user;

      // Saving the walletAddress data into its own table first.
      user.walletAddress =
        await this.walletAddressRepository.save(walletAddress);
    }

    // salting and hashing of password before saving
    const saltRound = 15;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const updatedUser = { ...user, password: hashedPassword };

    // finally saving user data.
    return await this.userRepository.save(updatedUser);
  }

  // Again very basic CRUD operations, nothing to explain here.
  async viewUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async viewOneUser(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete({ id: id });
  }

  async updateUser(id: number, user: Partial<User>): Promise<User> {
    await this.userRepository.update(id, user);
    return await this.userRepository.findOneBy({ id: id });
  }
}
