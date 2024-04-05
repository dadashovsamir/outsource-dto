import { AttendanceCreateDto } from './attendances-create';
import { CounterpartyUnitReadDto } from './counterparty-units-read';
import { PositionReadDto } from './counterparty-unit-positions-read';
import { WorkerReadDto } from './workers-read';

export class AttendanceReadDto extends AttendanceCreateDto {
  id = 0;
  worker: WorkerReadDto;
  position: PositionReadDto;
  counterpartyUnit: CounterpartyUnitReadDto;
}
