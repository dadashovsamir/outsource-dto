import { CounterpartyJurpersonReadDto } from './counterparty-jurpersons-read'

export class PriceGroupCreateDto {
	name: string
	counterpartyJurperson: CounterpartyJurpersonReadDto | { id: number }
}
