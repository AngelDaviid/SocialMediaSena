import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {

  @Get()
  getIndex(@Res() res: Response){
    res.sendFile(join(__dirname, '..', 'plantilla', 'index.html'));
}

  @Get('chat.html')
  getChat(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'plantilla', 'chat.html'));
  }
}
