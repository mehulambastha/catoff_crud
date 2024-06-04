import { Test, TestingModule } from '@nestjs/testing';
import { WalletAddressService } from './wallet.service';

describe('WalletService', () => {
  let service: WalletAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletAddressService],
    }).compile();

    service = module.get<WalletAddressService>(WalletAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
