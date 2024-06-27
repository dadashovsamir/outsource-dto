import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export class AttendanceCreateDto {
	amount: number
	date: Date
	worker: WorkerReadDto | { id: number }
	pricePosition: PricePositionReadDto | { id: number }
	counterpartyUnit: CounterpartyUnitReadDto | { id: number }
}
