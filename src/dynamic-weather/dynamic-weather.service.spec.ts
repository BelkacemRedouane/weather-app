import { Test, TestingModule } from '@nestjs/testing';
import { DynamicWeatherService } from './dynamic-weather.service';

describe('DynamicWeatherService', () => {
  let service: DynamicWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicWeatherService],
    }).compile();

    service = module.get<DynamicWeatherService>(DynamicWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
