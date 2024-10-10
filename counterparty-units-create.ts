import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'

export class CounterpartyUnitCreateDto {
	name: string
	address = ''
	counterpartyJurperson: CounterpartyJurpersonReadDto | { id: number }
}
