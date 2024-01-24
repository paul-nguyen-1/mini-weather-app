// geo-location.module.ts

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeoLocationController } from './geolocation.controller';
import { GeoLocationService } from './geolocation.service';


@Module({
  imports: [HttpModule],
  controllers: [GeoLocationController],
  providers: [GeoLocationService],
})
export class GeoLocationModule {}
