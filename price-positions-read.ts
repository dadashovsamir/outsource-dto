import { PricePositionCreateDto } from './price-positions-create'
import { PriceReadDto } from './prices-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkMeasureReadDto } from './work-measures-read'

export class PricePositionReadDto extends PricePositionCreateDto {
	id = 0
	workMeasure: WorkMeasureReadDto
	price: PriceReadDto
	unitPosition: UnitPositionReadDto
	constructor(price: PriceReadDto) {
		super()
		this.price = price
	}
}
