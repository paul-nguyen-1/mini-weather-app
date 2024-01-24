import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get(':city')
  getLocation(@Param('city') location: string): Observable<any> {
    return this.weatherService.getWeather(location);
  }
}
