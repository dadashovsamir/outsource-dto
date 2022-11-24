import { CounterpartyCompanyReadDto } from './counterparty-companies-read'

export class CounterpartyUnitCreateDto {
	name: string
	address: string
	counterpartyCompany: CounterpartyCompanyReadDto | { id: number }
}
