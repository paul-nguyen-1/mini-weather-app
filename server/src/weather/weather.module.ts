import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeoLocationModule } from 'src/geolocation/geolocation.module';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { GeoLocationService } from 'src/geolocation/geolocation.service';


@Module({
  imports: [HttpModule, GeoLocationModule],
  controllers: [WeatherController],
  providers: [WeatherService, GeoLocationService],
})
export class WeatherModule {}
