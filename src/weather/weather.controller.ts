import { Controller, Get } from '@nestjs/common';
import { StaticWeatherService } from 'src/static-weather/static-weather.service';
import { DynamicWeatherService } from 'src/dynamic-weather/dynamic-weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    private readonly staticWeatherService: StaticWeatherService,
    private readonly dynamicWeatherService: DynamicWeatherService,
  ) {}

  @Get('/static')
  getStaticWeather() {
    return this.staticWeatherService.getStaticWeather();
  }

  @Get('/dynamic')
  getDynamicWeather() {
    return this.dynamicWeatherService.getDynamicWeather();
  }
}
