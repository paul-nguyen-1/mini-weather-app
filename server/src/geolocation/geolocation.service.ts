import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { catchError, map, of } from 'rxjs';

@Injectable()
export class GeoLocationService {
  constructor(private httpService: HttpService) {}

  getLocation(city) {
    return this.httpService
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
      .pipe(
        map((response) => response.data),
        map((data) => data.map(city => ({
            city: city.display_name,
            latitude: city.lat,
            longitude: city.lon,
          }))),
          catchError((error) => {
            return of(new NotFoundException('City data not found:', error));
          }),
      );
  }
}
