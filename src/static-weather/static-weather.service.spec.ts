import { Test, TestingModule } from '@nestjs/testing';
import { StaticWeatherService } from './static-weather.service';

describe('StaticWeatherService', () => {
  let service: StaticWeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaticWeatherService],
    }).compile();

    service = module.get<StaticWeatherService>(StaticWeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
