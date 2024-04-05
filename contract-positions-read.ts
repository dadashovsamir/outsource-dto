import { ContractPositionCreateDto } from './contract-positions-create';
import { ContractReadDto } from './contracts-read';
import { CounterpartyUnitPositionReadDto } from './counterparty-unit-positions-read';
import { WorkMeasureReadDto } from './work-measures-read';

export class ContractPositionReadDto extends ContractPositionCreateDto {
  id = 0;
  workMeasure: WorkMeasureReadDto;
  contract: ContractReadDto;
  counterpartyUnitPosition: CounterpartyUnitPositionReadDto;
  constructor(contract: ContractReadDto) {
    super();
    this.contract = contract;
  }
}
