import { CompanyReadDto } from './companies-read'
import { CounterpartyCompanyCreateDto } from './counterparty-companies-create'

export class CounterpartyCompanyReadDto extends CounterpartyCompanyCreateDto {
	id: number
	company: CompanyReadDto | { id: number }
}
