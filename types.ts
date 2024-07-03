import { CounterpartyUnitReadDto } from './counterparty-units-read'
import { PricePositionReadDto } from './price-positions-read'
import { WorkerReadDto } from './workers-read'

export interface AttendanceConstructorParams {
	worker?: WorkerReadDto
	pricePosition?: PricePositionReadDto
	counterpartyUnit?: CounterpartyUnitReadDto
	date?: Date
}
