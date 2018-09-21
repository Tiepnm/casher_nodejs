import {Get, Controller, ForbiddenException, UseFilters} from '@nestjs/common';
import { AppService } from './app.service';
import {HttpExceptionFilter} from "nestjs-utility";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  root(): string {
    //throw new ForbiddenException();
    return this.appService.root();
  }
}
