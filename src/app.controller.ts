import { Controller, Get } from '@nestjs/common';
import { types } from 'cassandra-driver';
import { AppService } from './app.service';
import { IotRepository } from './iot.repository';

@Controller()
export class AppController {
  constructor(private readonly iotRepository: IotRepository) {}

  @Get('sensors')
  async getSensorsData(): Promise<types.Row[]> {
    return await this.iotRepository.getSensorsData();
  }
}
