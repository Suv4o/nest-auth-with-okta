import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { OktaSdkConfig } from 'config/okta.sdk.config';
import { Okta } from './okta.setup';

@Module({
  imports: [],
  providers: [UserService, Okta, OktaSdkConfig],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
