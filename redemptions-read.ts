import { RedemptionCreateDto } from './redemptions-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class RedemptionReadDto extends RedemptionCreateDto {
	id = 0
	date: Date = new Date()
	period: Date = new Date()
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
	constructor(initialData?: Partial<RedemptionReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
