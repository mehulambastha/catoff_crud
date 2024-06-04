import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
// import { UserService } from './user/user.service';
// import { UserController } from './user/user.controller';
import { WalletAddress } from './wallet/wallet.entity';
import { UserController } from './user/user.controller';
import { WalletAddressController } from './wallet/wallet.controller';
import { UserService } from './user/user.service';
import { WalletAddressService } from './wallet/wallet.service';
// import { WalletAddressService } from './wallet/wallet.service';
// import { WalletAddressController } from './wallet/wallet.controller';

// import { WalletAddressModule } from './wallet/wallet.module';
// import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sample',
      database: 'catoff_task',
      entities: [User, WalletAddress],
      synchronize: true,
    }),
    // UserController,
    // UserService,
    // WalletAddressController,
    // WalletAddressService,
  ],
  controllers: [AppController, UserController, WalletAddressController],
  providers: [AppService, UserService, WalletAddressService],
})
export class AppModule {}
