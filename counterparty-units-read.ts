import { UnitGroupReadDto } from './unit-groups-read'
import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id = 0
	unitGroup?: UnitGroupReadDto | null
	constructor(initialData?: Partial<CounterpartyUnitReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
