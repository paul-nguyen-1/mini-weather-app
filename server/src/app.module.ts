import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeoLocationModule } from './geolocation/geolocation.module';

@Module({
  imports: [GeoLocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
