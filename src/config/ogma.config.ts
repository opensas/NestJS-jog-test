import { ExpressParser } from '@ogma/platform-express';
import { Injectable, LogLevel } from '@nestjs/common';
import { OgmaModuleOptions } from '@ogma/nestjs-module';
import { ConfigService } from '@nestjs/config';
import { ModuleConfigFactory } from '@golevelup/nestjs-modules';
import { LogConfigService } from './logConfig.service';

export type LogLevelType = "OFF" | "ALL" | "VERBOSE" | "DEBUG" | "LOG" | "WARN" | "ERROR" | "FATAL" | "INFO" | "FINE" | "SILLY"

@Injectable()
export class OgmaModuleConfig implements ModuleConfigFactory<OgmaModuleOptions> {

  constructor(private readonly configService: LogConfigService) {}

  createModuleConfig(): OgmaModuleOptions {
    return {
      service: {
        // returns one of Ogma's log levels, or 'ALL'.
        logLevel: this.configService.getLogLevel(),
        color: true,
        // could be something like 'MyAwesomeNestApp'
        application: this.configService.getAppName(),
      },
      interceptor: {
        http: ExpressParser
      }
    }
  }
}