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
          city: data.map(city => city.display_name),
          locations: data.map(location => ({
            latitude: location.lat,
            longitude: location.lon,
          })),
        })),
      );
  }
}
