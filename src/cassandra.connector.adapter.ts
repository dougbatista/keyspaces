import { Injectable } from "@nestjs/common";
import { Client, auth, types } from 'cassandra-driver';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { SigV4AuthProvider } from 'aws-sigv4-auth-cassandra-plugin';


@Injectable()
export class CassandraConnectorAdapter {

    async connectCassandra(): Promise<Client> {

        try {
            const authentication = new SigV4AuthProvider({
                region: 'us-east-1',
                accessKeyId: '',
                secretAccessKey: ''
            });

            const sslOptions1 = {
                ca: [readFileSync(resolve(__dirname, '../certs/sf-class2-root.crt'))],
                host: 'cassandra.us-east-1.amazonaws.com',
                rejectUnauthorized: true
            };

            const client = new Client({
                contactPoints: ['cassandra.us-east-1.amazonaws.com'],
                localDataCenter: 'us-east-1',
                authProvider: authentication,
                sslOptions: sslOptions1,
                protocolOptions: { port: 9142 }
            });

            return client;

        } catch (error) {
            throw error;
        }
    }

}