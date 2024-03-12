import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicWeatherService {
  getDynamicWeather() {
    const randomTemperature = Math.floor(Math.random() * 30);
    return { city: 'Berlin', temperature: `${randomTemperature}°C`, condition: 'Cloudy' };
  }
}
