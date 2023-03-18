import { Injectable, Logger } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    Logger.log(`handleUserCreate - COMMUNICATION - ${data}`);
    //TODO: Email the user...
  }
}
