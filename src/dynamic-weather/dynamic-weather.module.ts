import { Module } from '@nestjs/common';
import { DynamicWeatherService } from './dynamic-weather.service';

@Module({
    providers: [DynamicWeatherService],
    exports: [DynamicWeatherService],
})
export class DynamicWeatherModule {}
