import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id = 0
	constructor(initialData?: Partial<CounterpartyUnitReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
