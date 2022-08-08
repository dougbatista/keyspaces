import { Injectable } from '@nestjs/common';
import { Client, auth, types } from 'cassandra-driver';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import {SigV4AuthProvider } from 'aws-sigv4-auth-cassandra-plugin';


@Injectable()
export class AppService {

  helloWorld(): string {

    return 'Hello world';
  }
}
