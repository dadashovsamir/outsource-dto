import { ContractReadDto } from './contracts-read';
import { CounterpartyUnitPositionReadDto } from './counterparty-unit-positions-read';
import { WorkMeasureReadDto } from './work-measures-read';

export class ContractPositionCreateDto {
  contract: ContractReadDto | { id: number };
  counterpartyUnitPosition: CounterpartyUnitPositionReadDto | { id: number } = {
    id: 0,
  };
  workMeasure: WorkMeasureReadDto | { id: number } = { id: 0 };
  internalRate: 0;
  externalRate: 0;
}
