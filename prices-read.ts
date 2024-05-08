import { PriceCreateDto } from './prices-create'
import { JurpersonReadDto } from './jurpersons-read'
import { CounterpartyUnitReadDto } from './counterparty-units-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
	jurperson: JurpersonReadDto
	constructor(counterpartyUnit: CounterpartyUnitReadDto | { id: number }) {
		super()
		this.counterpartyUnit = counterpartyUnit
	}
}
