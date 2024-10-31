import { PriceCreateDto } from './prices-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PriceGroupReadDto } from './price-groups-read'

export class PriceReadDto extends PriceCreateDto {
	id = 0
	counterpartyUnit?: CounterpartyUnitReadDto
	priceGroup?: PriceGroupReadDto
	constructor(initialData?: Partial<PriceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
