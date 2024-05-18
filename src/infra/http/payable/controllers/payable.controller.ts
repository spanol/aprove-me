import { CreatePayableService } from '@modules/payable/services/create-payable.service';
import { Body, Controller, Post } from '@nestjs/common';
import { HttpPayableMapper } from '../mappers/http-payable.mapper';

@Controller('integrations/payable')
export class PayableController {
  constructor(private readonly createPayableService: CreatePayableService) {}

  @Post()
  async create(@Body() body: any) {
    return {
      Payable: HttpPayableMapper.toHttp(
        await this.createPayableService.execute(body),
      ),
    };
  }
}
