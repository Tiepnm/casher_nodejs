import { Injectable } from '@nestjs/common';
import {ConfigService} from "./config/config.service";


@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService)
  {
    console.log(config.get('DATABASE_USER'));
  }
  root(): string {
    console.log(this.config.get('DATABASE_USER'));
    return 'Hello World!';
  }
}
