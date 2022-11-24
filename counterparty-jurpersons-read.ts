import { CounterpartyCompanyReadDto } from './counterparty-companies-read'
import { CounterpartyJurpersonCreateDto } from './counterparty-jurpersons-create'

export class CounterpartyJurpersonReadDto extends CounterpartyJurpersonCreateDto {
	id: number
	counterpartyCompany: CounterpartyCompanyReadDto | { id: number }
}
