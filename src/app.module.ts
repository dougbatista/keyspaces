import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CassandraConnectorAdapter } from './cassandra.connector.adapter';
import { IotRepository } from './iot.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CassandraConnectorAdapter, IotRepository],
})
export class AppModule { }
