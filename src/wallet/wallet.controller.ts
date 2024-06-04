import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { WalletAddressService } from '../wallet/wallet.service';
import { WalletAddress } from '../wallet/wallet.entity';

@Controller('wallet-addresses')
export class WalletAddressController {
  constructor(private walletAddressService: WalletAddressService) {}

  @Post()
  async create(@Body() walletAddress: WalletAddress): Promise<WalletAddress> {
    return await this.walletAddressService.createWallet(walletAddress);
  }

  @Get()
  async getAll(): Promise<WalletAddress[]> {
    return await this.walletAddressService.viewWallet();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<WalletAddress> {
    return await this.walletAddressService.viewOneWallet(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() walletAddress: WalletAddress,
  ): Promise<WalletAddress> {
    return await this.walletAddressService.updateWallet(id, walletAddress);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.walletAddressService.deleteWallet(id);
  }
}
