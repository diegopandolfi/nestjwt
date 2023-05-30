import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Diego Pandolfi Almeida da Conceicao';
  }
}
