import { Injectable } from '@nestjs/common';

import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';


@Injectable()
export class AppService {
  constructor(
    @OgmaLogger(AppService) private readonly logger: OgmaService // or @OgmaLogger(MyService.name)
  ) {}
  getHello(): string {
    this.logger.log('Hello world!!!')
    return 'Hello World!'
  }
}
