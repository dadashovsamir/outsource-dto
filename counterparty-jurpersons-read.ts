import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyJurpersonCreateDto } from './counterparty-jurpersons-create'

export class CounterpartyJurpersonReadDto extends CounterpartyJurpersonCreateDto {
	id = 0
	counterpartyCompany: CounterpartyCompanyReadDto
	constructor(counterpartyCompany: CounterpartyCompanyReadDto) {
		super()
		this.counterpartyCompany = counterpartyCompany
	}
}
