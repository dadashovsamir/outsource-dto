import { PricePositionCreateDto } from './price-positions-create'
import { PriceReadDto } from './prices-read'
import { CounterpartyUnitPositionReadDto } from './counterparty-unit-positions-read'
import { WorkMeasureReadDto } from './work-measures-read'

export class PricePositionReadDto extends PricePositionCreateDto {
	id = 0
	workMeasure: WorkMeasureReadDto
	price: PriceReadDto
	counterpartyUnitPosition: CounterpartyUnitPositionReadDto
	constructor(price: PriceReadDto) {
		super()
		this.price = price
	}
}
