import { CompanyReadDto } from './companies-read'

export class CounterpartyCompanyCreateDto {
	name: string
	company: CompanyReadDto | { id: number }
}
