import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'

export class CounterpartyUnitCreateDto {
	name: string
	address: string
	counterpartyJurperson: CounterpartyJurpersonReadDto | { id: number }
}
