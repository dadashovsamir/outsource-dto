import { CounterpartyCompanyReadDto } from './counterparty-companies-read'

export class CounterpartyJurpersonCreateDto {
	name: string
	address: string
	bankDetails: string
	counterpartyCompany: CounterpartyCompanyReadDto | { id: number }
}
