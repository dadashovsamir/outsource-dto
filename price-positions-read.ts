import { PricePositionCreateDto } from './price-positions-create'
import { PriceReadDto } from './prices-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkMeasureReadDto } from './work-measures-read'

export class PricePositionReadDto extends PricePositionCreateDto {
	id = 0
	workMeasure: WorkMeasureReadDto
	price: PriceReadDto | { id: number }
	unitPosition: UnitPositionReadDto
	constructor(initialData?: Partial<PricePositionReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
