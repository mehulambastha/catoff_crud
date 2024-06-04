import { Module } from '@nestjs/common';
import { WalletAddressService } from './wallet.service';
import { WalletAddressController } from './wallet.controller';
import { WalletAddress } from './wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WalletAddress])],
  providers: [WalletAddressService],
  controllers: [WalletAddressController],
})
export class WalletModule {}
