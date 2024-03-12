import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaticWeatherModule } from './static-weather/static-weather.module';
import { WeatherController } from './weather/weather.controller';
import { LoggerMiddleware } from './logger.middleware';
import { DynamicWeatherModule } from './dynamic-weather/dynamic-weather.module';

@Module({
  imports: [StaticWeatherModule, DynamicWeatherModule],
  controllers: [AppController, WeatherController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
