import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { ProfessionReadDto } from './professions-read'

export class UnitPositionCreateDto {
	profession: ProfessionReadDto | { id: number } = { id: 0 }
	counterpartyUnit: CounterpartyUnitReadDto | { id: number } = { id: 0 }
}
