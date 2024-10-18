import { PriceCreateDto } from './prices-create'
import { JurpersonReadDto } from './jurpersons-read'
import { CounterpartyUnitReadDto } from './counterparty-units-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	counterpartyUnit: CounterpartyUnitReadDto
	jurperson: JurpersonReadDto
	constructor(initialData?: Partial<PriceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
