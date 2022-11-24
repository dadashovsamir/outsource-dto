import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'
import { JurpersonReadDto } from './jurpersons-read'

export class ContractCreateDto {
	name: string
	date: Date
	jurperson: JurpersonReadDto | { id: number }
	counterpartyJurperson: CounterpartyJurpersonReadDto | { id: number }
}
