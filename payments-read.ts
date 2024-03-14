import { CounterpartyUnitReadDto } from './counterparty-units-read';
import { PositionReadDto } from './positions-read';
import { PaymentTypeReadDto } from './payment-types-read';
import { PaymentCreateDto } from './payments-create';
import { WorkerReadDto } from './workers-read';

export class PaymentReadDto extends PaymentCreateDto {
  id = 0;
  paymentType: PaymentTypeReadDto;
  payer: WorkerReadDto;
  recipient: WorkerReadDto;
  position: PositionReadDto;
  counterpartyUnit: CounterpartyUnitReadDto;
  constructor(recipient: WorkerReadDto) {
    super();
    this.recipient = recipient;
  }
}
