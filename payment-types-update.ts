import { PartialType } from '@nestjs/mapped-types';
import { PaymentTypeCreateDto } from './payment-types-create';

export class PaymentTypeUpdateDto extends PartialType(PaymentTypeCreateDto) {}
