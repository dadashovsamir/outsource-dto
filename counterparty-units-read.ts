import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id = 0
	counterpartyJurperson: CounterpartyJurpersonReadDto | { id: number }
	constructor(initialData?: Partial<CounterpartyUnitReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
