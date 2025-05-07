import { Controller, Get } from '@nestjs/common';
import { SwaggerDocumentation } from '../../dist';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @SwaggerDocumentation({
    endpointDescription: 'test',
    endpointSummary: 'test',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
