import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class GeoLocationService {
  constructor(private httpService: HttpService) {}

  getLocation(city) {
    return this.httpService
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
      .pipe(
        map((response) => response.data),
        map((data) => ({
          city: data.map(item => item.display_name),
          locations: data.map(item => ({
            latitude: item.lat,
            longitude: item.lon,
          })),
        })),
      );
  }
}
