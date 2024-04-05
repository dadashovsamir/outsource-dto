import { CounterpartyUnitReadDto } from './counterparty-units-read';
import { PositionReadDto } from './counterparty-unit-positions-read';
import { RedemptionTypeReadDto } from './redemption-types-read';
import { WorkerReadDto } from './workers-read';

export class RedemptionCreateDto {
  amount: number;
  date: Date;
  period: Date;
  redemptionType: RedemptionTypeReadDto | { id: number };
  worker: WorkerReadDto | { id: number };
  position: PositionReadDto | { id: number };
  counterpartyUnit: CounterpartyUnitReadDto | { id: number };
  comment = '';
}
