import { CompanyReadDto } from './companies-read'
import { CounterpartyCompanyCreateDto } from './counterparty-companies-create'

export class CounterpartyCompanyReadDto extends CounterpartyCompanyCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(initialData?: Partial<CounterpartyCompanyReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
