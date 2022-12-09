import { CompanyReadDto } from './companies-read'
import { CounterpartyCompanyCreateDto } from './counterparty-companies-create'

export class CounterpartyCompanyReadDto extends CounterpartyCompanyCreateDto {
	id = 0
	company: CompanyReadDto
	constructor(company: CompanyReadDto) {
		super()
		this.company = company
	}
}
