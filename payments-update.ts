import { PartialType } from '@nestjs/mapped-types';
import { PaymentCreateDto } from './payments-create';

export class PaymentUpdateDto extends PartialType(PaymentCreateDto) {}
