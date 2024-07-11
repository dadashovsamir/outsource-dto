import { UnitPositionCreateDto } from './unit-positions-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { ProfessionReadDto } from './professions-read'

export class UnitPositionReadDto extends UnitPositionCreateDto {
	id = 0
	profession: ProfessionReadDto
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
	constructor(initialData?: Partial<UnitPositionReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
