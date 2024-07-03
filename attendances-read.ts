import { AttendanceCreateDto } from './attendances-create'
import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { AttendanceConstructorParams } from './types'
import { WorkerReadDto } from './workers-read'

export class AttendanceReadDto extends AttendanceCreateDto {
	id = 0
	date: Date = new Date()
	worker: WorkerReadDto
	pricePosition: PricePositionReadDto
	counterpartyUnit: CounterpartyUnitReadDto
	constructor({ counterpartyUnit, worker, date }: AttendanceConstructorParams) {
		super()
		if (date) {
			this.date = date
		}
		if (counterpartyUnit) {
			this.counterpartyUnit = counterpartyUnit
		}
		if (worker) {
			this.worker = worker
		}
	}
}
