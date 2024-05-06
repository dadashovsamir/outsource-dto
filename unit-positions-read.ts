import { UnitPositionCreateDto } from './unit-positions-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { ProfessionReadDto } from './professions-read'

export class UnitPositionReadDto extends UnitPositionCreateDto {
	id = 0
	profession: ProfessionReadDto
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
	constructor(counterpartyUnit: CounterpartyUnitReadDto | { id: number }) {
		super()
		this.counterpartyUnit = counterpartyUnit
	}
}
