import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyUnitCreateDto } from './counterparty-units-create'

export class CounterpartyUnitReadDto extends CounterpartyUnitCreateDto {
	id = 0
	counterpartyCompany: CounterpartyCompanyReadDto
	constructor(counterpartyCompany: CounterpartyCompanyReadDto) {
		super()
		this.counterpartyCompany = counterpartyCompany
	}
}
