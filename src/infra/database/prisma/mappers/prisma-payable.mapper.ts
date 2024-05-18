import { Payable } from '@modules/payable/entities/payable.entity';
import { Prisma, Payable as PrismaPayable } from '@prisma/client';

export class PrismaPayableMapper {
  static toPrisma(payable): Prisma.PayableUncheckedCreateInput {
    return {
      id: payable.id,
      value: payable.value,
      emissionDate: payable.emissionDate,
      assignor: payable.assignor,
      assignorId: payable.assignorId,
    } as PrismaPayable;
  }

  static toDomain(payable) {
    return new Payable({
      id: payable.id,
      value: payable.value,
      emissionDate: payable.emissionDate,
      assignor: payable.assignor,
    });
  }
}