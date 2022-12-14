import { CounterpartyUnitReadDto } from './counterparty-units-read';
import { PositionReadDto } from './positions-read';
import { PaymentTypeReadDto } from './payment-types-read';
import { WorkerReadDto } from './workers-read';

export class PaymentCreateDto {
  amount: number;
  date: Date;
  period: Date;
  paymentType: PaymentTypeReadDto | { id: number };
  worker: WorkerReadDto | { id: number };
  payer: WorkerReadDto | { id: number };
  position: PositionReadDto | { id: number };
  counterpartyUnit: CounterpartyUnitReadDto | { id: number };
}
