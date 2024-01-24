import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GeoLocationService } from './geolocation.service';

@Controller()
export class GeoLocationController {
  constructor(private geoLocationService: GeoLocationService) {}

  @Get(':city')
  getLocation(@Param('city') city: string): Observable<any> {
    return this.geoLocationService.getLocation(city);
  }
}
