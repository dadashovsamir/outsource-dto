import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { JurpersonReadDto } from './jurpersons-read'

export class PriceCreateDto {
	date: Date = new Date()
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
	jurperson: JurpersonReadDto | { id: number } = { id: 0 }
	comment = ''
}
