import { LogLevelType } from "./ogma.config";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class LogConfigService {
  constructor(private configService: ConfigService) {}

  getLogLevel(): LogLevelType {
    return this.configService.get<LogLevelType>('LOG_LEVEL') || 'INFO'
  }
  getAppName(): string {
    return this.configService.get<string>('APP_NAME') || 'NestJS'
  }
}