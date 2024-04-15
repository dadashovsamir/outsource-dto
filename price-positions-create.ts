import { PriceReadDto } from './prices-read'
import { UnitPositionReadDto } from './unit-positions-read'
import { WorkMeasureReadDto } from './work-measures-read'

export class PricePositionCreateDto {
	price: PriceReadDto | { id: number }
	unitPosition: UnitPositionReadDto | { id: number } = {
		id: 0,
	}
	workMeasure: WorkMeasureReadDto | { id: number } = { id: 0 }
	internalRate: 0
	externalRate: 0
}
