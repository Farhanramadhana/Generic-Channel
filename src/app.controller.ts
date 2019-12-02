import {
  Controller,
  Get,
  Req,
  Res,
  Post,
  HttpCode,
  Body,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service' ;

@Controller('message')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('retrieveMessage')
  retrieveMessage(@Req() request: Request) {
    console.log(request.body);
  }

  @Post('sendMessage')
  sendMessage(@Req() request: Request) {
    let data = request.body;
    return this.appService.sendMessage(data);
  }
}
