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

  async createUser(user: User): Promise<User> {
    if (user.walletAddress) {
      const walletAddress = user.walletAddress;
      walletAddress.user = user;
      user.walletAddress =
        await this.walletAddressRepository.save(walletAddress);
    }
    const saltRound = 15;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    const updatedUser = { ...user, password: hashedPassword };
    return await this.userRepository.save(updatedUser);
  }

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
