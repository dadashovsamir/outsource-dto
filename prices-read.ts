import { PriceCreateDto } from './prices-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	counterpartyUnit?: CounterpartyUnitReadDto
	constructor(initialData?: Partial<PriceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
