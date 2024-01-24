import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoLocationModule } from './geolocation/geolocation.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [GeoLocationModule, WeatherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
