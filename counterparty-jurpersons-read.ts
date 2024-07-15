import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyJurpersonCreateDto } from './counterparty-jurpersons-create'

export class CounterpartyJurpersonReadDto extends CounterpartyJurpersonCreateDto {
	id = 0
	counterpartyCompany: CounterpartyCompanyReadDto | { id: number }
	constructor(initialData?: Partial<CounterpartyJurpersonReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
