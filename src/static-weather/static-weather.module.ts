import { Module } from '@nestjs/common';
import { StaticWeatherService } from './static-weather.service';

@Module({
  providers: [StaticWeatherService],
  exports: [StaticWeatherService],
})
export class StaticWeatherModule {}
