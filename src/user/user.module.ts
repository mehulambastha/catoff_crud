import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletAddress } from '../wallet/wallet.entity';

@Module({
  // Imp: I imported both User and WalletAddress entities in user module because in the controller files both are being used. So they need to imported to have the correct scope.
  imports: [TypeOrmModule.forFeature([User, WalletAddress])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
