import { CompanyReadDto } from './companies-read'

export class CounterpartyCompanyCreateDto {
	name = ''
	company: CompanyReadDto | { id: number }
}
