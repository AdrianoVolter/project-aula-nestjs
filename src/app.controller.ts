import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/ola") // http://localhost:3000/ola
  getOla(): string {  // fun
    return this.appService.getOla();
  }
}
