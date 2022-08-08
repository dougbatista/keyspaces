import { Injectable } from '@nestjs/common';
import { types } from 'cassandra-driver';
import { CassandraConnectorAdapter } from './cassandra.connector.adapter';

@Injectable()
export class IotRepository {
    
    constructor(private connector: CassandraConnectorAdapter) { }

    async getSensorsData(): Promise<types.Row[]> {
        try {
            
            const connected = await this.connector.connectCassandra();
            
            const result = await connected.execute('SELECT * FROM tutorialkeyspace.temperature');
            
            await connected.shutdown();
            
            return result.rows;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}