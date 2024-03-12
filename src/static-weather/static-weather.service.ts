import { Injectable } from '@nestjs/common';


@Injectable()
export class StaticWeatherService {
  getStaticWeather() {
    return { city: 'Paris', temperature: '20°C', condition: 'Sunny' };
  }
}