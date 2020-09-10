import { Module } from "@nestjs/common";
import { LogConfigService } from "./logConfig.service";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
  ],
  controllers: [],
  providers: [
    ConfigService,
    LogConfigService,
  ],
})
export class LogModule {}