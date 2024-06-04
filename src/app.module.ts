import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

// import { UserController } from './user/user.controller';
import { WalletAddress } from './wallet/wallet.entity';
// import { UserController } from './user/user.controller';

import { UserModule } from './user/user.module';

import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sample', //sensitive data. Pls dont steal my password. :)
      database: 'catoff_task',
      entities: [User, WalletAddress],
      synchronize: true,
    }),
    //the module so that "unable to access" or "not in scope" type errors are not possible.
    UserModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
