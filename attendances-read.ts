import { AttendanceCreateDto } from './attendances-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id = 0
	date: Date = new Date()
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
	constructor(initialData?: Partial<AttendanceReadDto>) {
		super()
		Object.assign(this, initialData)
	}
}
