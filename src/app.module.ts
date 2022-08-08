import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraConnector } from './cassandra.connector';
import { IotRepository } from './iot.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CassandraConnector, IotRepository],
})
export class AppModule { }
