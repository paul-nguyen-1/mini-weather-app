import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { forkJoin, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GeoLocationService } from 'src/geolocation/geolocation.service';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private geoLocationService: GeoLocationService,
  ) {}

  getWeather(city) {
    return this.geoLocationService.getLocation(city).pipe(
      mergeMap((locations) => {
        const weatherData = locations.map(({ latitude, longitude }) => {
          return this.httpService.get(`https://api.weather.gov/points/${latitude},${longitude}`)
            .pipe(
                mergeMap((response) => {
                    return this.httpService.get(response.data.properties.forecast);
              }),
              map((forecastResponse) => forecastResponse.data.properties.periods[0].temperature),
              catchError((error) => {
                return of(new NotFoundException('Weather data not found:', error));
              }),
            );
        });
        return forkJoin(weatherData);
      }),
    );
  }
}
