import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id: number
	counterpartyCompany: CounterpartyCompanyReadDto
}
