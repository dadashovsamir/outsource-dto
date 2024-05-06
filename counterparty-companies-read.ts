import { CompanyReadDto } from './companies-read'
import { CounterpartyCompanyCreateDto } from './counterparty-companies-create'

export class CounterpartyCompanyReadDto extends CounterpartyCompanyCreateDto {
	id = 0
	company: CompanyReadDto | { id: number }
	constructor(company: CompanyReadDto | { id: number }) {
		super()
		this.company = company
	}
}
