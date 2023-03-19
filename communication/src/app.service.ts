import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreate - COMMUNICATION', data);
    //TODO: Email the user...
  }
}
