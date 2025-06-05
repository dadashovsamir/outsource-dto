import { CounterpartyCompanyReadDto } from './counterparty-companies-read'

export class UnitGroupCreateDto {
	name: string = ''
	counterpartyCompany: CounterpartyCompanyReadDto | { id: number }
}
