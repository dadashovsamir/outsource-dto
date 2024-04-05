import { CounterpartyUnitPositionCreateDto } from './counterparty-unit-positions-create';
import { CounterpartyUnitReadDto } from './counterparty-units-read';
import { ProfessionReadDto } from './professions-read';

export class CounterpartyUnitPositionReadDto extends CounterpartyUnitPositionCreateDto {
  id = 0;
  profession: ProfessionReadDto;
  counterpartyUnit: CounterpartyUnitReadDto | { id: number };
  constructor(counterpartyUnit: CounterpartyUnitReadDto) {
    super();
    this.counterpartyUnit = counterpartyUnit;
  }
}
