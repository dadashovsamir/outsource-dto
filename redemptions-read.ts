import { RedemptionCreateDto } from './redemptions-create'
import { ClientUnitReadDto } from './client-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionReadDto extends RedemptionCreateDto {
	id = 0
	date: Date = new Date()
	period: Date = new Date()
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	clientUnit: ClientUnitReadDto
	constructor(initialData?: Partial<RedemptionReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
