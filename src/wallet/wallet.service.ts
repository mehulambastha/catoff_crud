import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletAddress } from '../wallet/wallet.entity';

@Injectable()
export class WalletAddressService {
  constructor(
    @InjectRepository(WalletAddress)
    private readonly walletAddressRepository: Repository<WalletAddress>,
  ) {}

  async createWallet(walletAddress: WalletAddress): Promise<WalletAddress> {
    return await this.walletAddressRepository.save(walletAddress);
  }

  async viewWallet(): Promise<WalletAddress[]> {
    return await this.walletAddressRepository.find();
  }

  async viewOneWallet(id: number): Promise<WalletAddress> {
    return await this.walletAddressRepository.findOne({ where: { id: id } });
  }

  async deleteWallet(id: number): Promise<void> {
    await this.walletAddressRepository.delete({ id: id });
  }

  async updateWallet(
    id: number,
    user: Partial<WalletAddress>,
  ): Promise<WalletAddress> {
    await this.walletAddressRepository.update(id, user);
    return await this.walletAddressRepository.findOneBy({ id: id });
  }
}
