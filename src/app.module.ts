import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OgmaModule, OgmaInterceptor } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OgmaModuleConfig } from './config/ogma.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LogConfigService } from './config/logConfig.service';
import { LogModule } from './config/log.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    OgmaModule.forFeature(AppService), // or OgmaModule.forFeature(MyService.name)
    OgmaModule.forRootAsync({
      useClass: OgmaModuleConfig,
      imports: [LogModule, ConfigModule],
      inject: [LogConfigService]
    }),
  ],
  controllers: [AppController],
  providers: [
    LogConfigService,
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: OgmaInterceptor
    }
  ],
})
export class AppModule {}
