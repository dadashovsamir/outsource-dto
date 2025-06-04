import { CounterpartyUnitReadDto } from './counterparty-units-read'

export class PriceCreateDto {
	date: Date = new Date()
	counterpartyUnit?: CounterpartyUnitReadDto | { id: number }
	comment = ''
}
